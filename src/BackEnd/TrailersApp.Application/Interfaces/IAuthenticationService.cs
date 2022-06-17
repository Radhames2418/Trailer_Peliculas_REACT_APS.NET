using System.Threading.Tasks;
using TrailersApp.Application.DTOs.User;

namespace TrailersApp.Application.Interfaces
{
    public interface IAuthenticationService
    {
        Task<string> AuthenticateUser(UserLoginDto loginDto);
    }
}