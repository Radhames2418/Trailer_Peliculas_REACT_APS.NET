using Microsoft.Extensions.DependencyInjection;
using TrailersApp.Application.Filters;

namespace TrailersApp.Api.Extensions
{
    public static class ControllerSetUp
    {
        public static IServiceCollection AddControllersSetUp(
            this IServiceCollection services)
        {
            services
                .AddControllers(options =>
                {
                    options.Filters.Add<GlobalExceptionFilter>();
                })
                .AddNewtonsoftJson(op =>
                {
                    op.SerializerSettings.ReferenceLoopHandling =
                        Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                    op.SerializerSettings.NullValueHandling = 
                        Newtonsoft.Json.NullValueHandling.Ignore;
                })
                .ConfigureApiBehaviorOptions(options =>
                {
                    options.SuppressModelStateInvalidFilter = true;
                });
            return services;
        }
    }
}