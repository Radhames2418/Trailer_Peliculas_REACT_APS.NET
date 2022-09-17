using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TrailersApp.Application.DTOs.Trailer;
using TrailersApp.Application.Exceptions;
using TrailersApp.Application.Interfaces;
using TrailersApp.Core.Entities;
using TrailersApp.Core.Interfaces;

namespace TrailersApp.Application.Services
{
    public class TrailserService : ITrailserService
    {
        private readonly IGenericRepository<Trailer> _trailerRepo;
        private readonly IMapper _mapper;
        private readonly ICovreImageService _image;

        public TrailserService(IGenericRepository<Trailer> trailerRepo, IMapper mapper, 
            ICovreImageService image)
        {
            _trailerRepo = trailerRepo;
            _mapper = mapper;
            _image = image;
        }

        public async Task<TrailerDto> GetTrailer(int id)
        {
            var isValidId = await _trailerRepo.Exists(id);
            if (!isValidId)
                throw new BusinessException("Invalid trailer id.");
                    
            var trailer = await _trailerRepo.Get(id);
            var result = _mapper.Map<TrailerDto>(trailer);

            return result;
        }

        public async Task<IEnumerable<TrailerDto>> GetAllTrailers(string filter = null)
        {
            var trailers = await _trailerRepo.GetAll();
            if (filter != null && filter != "undefined")
                trailers = trailers.Where(x => x.Name.ToLower().Contains(filter.ToLower()));

            var result = _mapper.Map<IEnumerable<TrailerDto>>(trailers);

            return result;
        }

        public async Task<TrailerDto> AddTrailer(CreateTrailerDto newTrailerDto)
        {
            var trailer = _mapper.Map<Trailer>(newTrailerDto);
            trailer.CoverSrc = "https://localhost:5001/" + _image.GetImgSrc(newTrailerDto.Image, "trailers");
            await _trailerRepo.Add(trailer);

            var result = _mapper.Map<TrailerDto>(trailer);
            return result;
        }
        
        public async Task<TrailerDto> UpdateTrailer(UpdateTrailerDto updateTrailerDto)
        {
            var currentTrailer = await _trailerRepo.Get(updateTrailerDto.Id);
            if (currentTrailer == null)
                throw new BusinessException("Invalid trailer id.");
            
            if (updateTrailerDto.Image != null)
                _image.DeleteImg(currentTrailer.CoverSrc);

            var trailer = _mapper.Map<Trailer>(updateTrailerDto);
            trailer.CoverSrc = "https://localhost:5001/" +  _image.GetImgSrc(updateTrailerDto.Image, "trailers");
            await _trailerRepo.Update(trailer);
            return _mapper.Map<TrailerDto>(trailer);
        }

        public async Task DeleteTrailer(int id)
        {
            var trailer = await _trailerRepo.Get(id);
            if (trailer == null)
                throw new BusinessException("Invalid trailer id.");
            
            _image.DeleteImg(trailer.CoverSrc);
            await _trailerRepo.Delete(id);
        }
    }
}