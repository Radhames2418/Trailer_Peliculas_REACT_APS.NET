using FluentValidation;

namespace TrailersApp.Application.DTOs.Trailer.Validators
{
    public class CreateTrailerDtoValidator : AbstractValidator<CreateTrailerDto>
    {
        public CreateTrailerDtoValidator()
        {
            Include(new ITrailerDtoValidator());
            RuleFor(x => x.Image)
                .NotNull().WithMessage("{PropertyName} is required.");
        }
    }
}