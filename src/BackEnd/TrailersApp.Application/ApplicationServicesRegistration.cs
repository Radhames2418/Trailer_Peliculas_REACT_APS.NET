using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TrailersApp.Application.Data.DataContext;
using TrailersApp.Application.Data.Repositories;
using TrailersApp.Application.Interfaces;
using TrailersApp.Application.Services;
using TrailersApp.Core.Interfaces;

namespace TrailersApp.Application
{
    public static class ApplicationServicesRegistration
    {
        public static IServiceCollection AddApplicationServices(
            this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<Trailers_dbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("Trailers_db")));

            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            services.AddScoped<ITrailserService, TrailserService>();
            services.AddScoped<ICovreImageService, CoverImaveService>();
            
            return services;
        }
    }
}