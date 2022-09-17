using System.Collections.Generic;
using System.Threading.Tasks;
using TrailersApp.Application.DTOs.Trailer;

namespace TrailersApp.Application.Interfaces
{
    public interface ITrailserService
    {
        Task<TrailerDto> GetTrailer(int id);
        Task<IEnumerable<TrailerDto>> GetAllTrailers(string filter = null);
        Task<TrailerDto> AddTrailer(CreateTrailerDto newTrailerDto);
        Task<TrailerDto> UpdateTrailer(UpdateTrailerDto updateTrailerDto);
        Task DeleteTrailer(int id);
    }
}