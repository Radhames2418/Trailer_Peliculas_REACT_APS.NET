using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using TrailersApp.Application.DTOs.User;
using TrailersApp.Application.Exceptions;
using TrailersApp.Application.Interfaces;
using TrailersApp.Core.Entities;
using TrailersApp.Core.Interfaces;

namespace TrailersApp.Application.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IConfiguration _config;
        private readonly IGenericRepository<User> _userRepo;
        private readonly IMapper _mapper;

        public AuthenticationService(IConfiguration config, IGenericRepository<User> userRepo, 
            IMapper mapper)
        {
            _config = config;
            _userRepo = userRepo;
            _mapper = mapper;
        }
        
        public async Task<(string, UserDto)> AuthenticateUser(UserLoginDto loginDto)
        {
            var (isValid, user) = await IsValidUser(loginDto);
            if (!isValid)
                throw new BusinessException("Invalid user credentials");
            
            var token = GenerateToken(user);

            var userDto = _mapper.Map<UserDto>(user);

            return (token, userDto);
        }
        
        private async Task<(bool, User)> IsValidUser(UserLoginDto userLoginDto)
        {
            var user = await GetLoginByCredentials(userLoginDto);
            return (user != null, user);
        }
        
        private async Task<User> GetLoginByCredentials(UserLoginDto userLoginDto)
        {
            var users = await _userRepo.GetAll();
            var result =
                users.FirstOrDefault(x =>
                    x.Email == userLoginDto.Email && x.Password == userLoginDto.Password);

            return result;
        }
        
        private string GenerateToken(User user)
        {
            var simetricSecurityKey =
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Auth:SecretKey"]));
            var signinCredentials =
                new SigningCredentials(simetricSecurityKey, SecurityAlgorithms.HmacSha256);
            var header = new JwtHeader(signinCredentials);
            
            var userDto = _mapper.Map<UserDto>(user);
            var claims = new[]
            {
                new Claim(ClaimTypes.UserData, JsonConvert.SerializeObject(userDto)),
            };
            
            var payload = new JwtPayload
            (
                _config["Auth:Issuer"],
                _config["Auth:Audience"],
                claims,
                DateTime.Now,
                DateTime.UtcNow.AddHours(24)
            );

            var token = new JwtSecurityToken(header, payload);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}