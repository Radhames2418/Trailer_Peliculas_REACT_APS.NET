using System;
using FluentValidation;

namespace TrailersApp.Application.DTOs.Trailer.Validators
{
    public class ITrailerDtoValidator : AbstractValidator<ITrailerDto>
    {
        public ITrailerDtoValidator()
        {
            RuleFor(x => x.Name)
                .NotNull().WithMessage("{PropertyName} is required.");

            RuleFor(x => x.ReleaseYear)
                .LessThan(DateTime.Now)
                .WithMessage("{PropertyName}must be after {ComparisonValue}.");

            RuleFor(x => x.Duration)
                .GreaterThan(0)
                .WithMessage("{PropertyName} must be greater than {ComparisonValue}.")
                .LessThanOrEqualTo(300)
                .WithMessage("{PropertyName} must be less than {ComparisonValue} minutes long.");

            RuleFor(x => x.Category)
                .NotNull().WithMessage("{PropertyName} is required.")
                .MaximumLength(25)
                .WithMessage("{PropertyName} must be less than 4 characters long.");
            
            RuleFor(x => x.Description)
                .NotNull().WithMessage("{PropertyName} is required.")
                .MaximumLength(250)
                .WithMessage("{PropertyName} must be less than 250 characters long.");
            
            RuleFor(x => x.Url)
                .NotNull().WithMessage("{PropertyName} is required.");
        }
    }
}