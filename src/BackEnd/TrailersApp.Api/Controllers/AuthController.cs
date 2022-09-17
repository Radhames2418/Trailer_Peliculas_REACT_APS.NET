using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrailersApp.Application.DTOs.User;
using TrailersApp.Application.Interfaces;

namespace TrailersApp.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthenticationService _authService;

        public AuthController(IAuthenticationService authService)
        {
            _authService = authService;
        }
        
        /// <summary>
        /// Returns a Bearer token if submmited data is valid.
        /// </summary>
        /// <param name="userLoginDto">Login credentials.</param>
        /// <returns>Bearer token with user data</returns>
        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Authentication(UserLoginDto userLoginDto)
        {
            var result = await  _authService.AuthenticateUser(userLoginDto);
            return Ok(result);
        }
    }
}