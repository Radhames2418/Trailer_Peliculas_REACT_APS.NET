using FluentValidation;

namespace TrailersApp.Application.DTOs.User.Validators
{
    public class UserDtoValidator : AbstractValidator<UserDto>
    {
        public UserDtoValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0)
                .WithMessage("Invalid {PropertyName}.");

            RuleFor(x => x.Name)
                .NotNull().WithMessage("{PropertyName} is required.")
                .MaximumLength(50)
                .WithMessage("{PropertyName} must be less than 50 characters long.");

            RuleFor(x => x.Email)
                .NotNull().WithMessage("{PropertyName} is required.")
                .MaximumLength(50)
                .WithMessage("{PropertyName} must be less than 50 characters long.")
                .EmailAddress()
                .WithMessage("{PropertyName} must be a valid email.");
        }
    }
}