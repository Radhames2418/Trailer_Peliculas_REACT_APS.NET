using AutoMapper;
using TrailersApp.Application.DTOs.Trailer;
using TrailersApp.Application.DTOs.User;

namespace TrailersApp.Application.DTOs.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region User Mappings
            CreateMap<Core.Entities.User, UserDto>().ReverseMap();
            CreateMap<Core.Entities.User, UserLoginDto>().ReverseMap();
            #endregion
            
            #region Trailer Mappings
            CreateMap<Core.Entities.Trailer, TrailerDto>().ReverseMap();
            CreateMap<Core.Entities.Trailer, CreateTrailerDto>().ReverseMap();
            CreateMap<Core.Entities.Trailer, UpdateTrailerDto>().ReverseMap();
            #endregion
        }
    }
}