using FluentValidation;

namespace TrailersApp.Application.DTOs.Trailer.Validators
{
    public class UpdateTrailerValidator : AbstractValidator<UpdateTrailerDto>
    {
        public UpdateTrailerValidator()
        {
            Include(new ITrailerDtoValidator());
            RuleFor(x => x.Image)
                .NotNull().WithMessage("{PropertyName} is required.");
        }
    }
}