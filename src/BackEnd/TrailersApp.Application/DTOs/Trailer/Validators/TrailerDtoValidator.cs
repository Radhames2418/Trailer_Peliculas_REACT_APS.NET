using FluentValidation;

namespace TrailersApp.Application.DTOs.Trailer.Validators
{
    public class TrailerDtoValidator : AbstractValidator<TrailerDto>
    {
        public TrailerDtoValidator()
        {
            RuleFor(x => x.Id)
                .GreaterThan(0)
                .WithMessage("Invalid {PropertyName}.");
            
            Include(new ITrailerDtoValidator());
        }
    }
}