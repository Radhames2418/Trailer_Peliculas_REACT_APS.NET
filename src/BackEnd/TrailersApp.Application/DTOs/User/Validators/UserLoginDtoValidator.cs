using FluentValidation;

namespace TrailersApp.Application.DTOs.User.Validators
{
    public class UserLoginDtoValidator : AbstractValidator<UserLoginDto>
    {
        public UserLoginDtoValidator()
        {
            RuleFor(x => x.Email)
                .NotNull().WithMessage("{PropertyName} is required.")
                .MaximumLength(50)
                .WithMessage("{PropertyName} must be less than 50 characters long.")
                .EmailAddress()
                .WithMessage("{PropertyName} must be a valid email.");
            
            RuleFor(x => x.Password)
                .NotNull().WithMessage("{PropertyName} is required.")
                .MinimumLength(6)
                .WithMessage("{PropertyName} must be atleast 6 characters long.")
                .MaximumLength(25)
                .WithMessage("{PropertyName} must be less than 25 characters long.");
        }
    }
}