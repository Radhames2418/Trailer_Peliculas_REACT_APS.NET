using System;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using TrailersApp.Application.Filters;

namespace TrailersApp.Api.Extensions
{
    public static class ValidationSetUp
    {
        public static IServiceCollection AddFluentValidationSetUp(
            this IServiceCollection services)
        {
            services
                .AddMvc(options =>
                {
                    options.Filters.Add<ValidationFilter>();
                })
                .AddFluentValidation(options =>
                {
                    options.RegisterValidatorsFromAssemblies(AppDomain.CurrentDomain.GetAssemblies());
                });
            
            return services;
        }
    }
}