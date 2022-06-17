using System;
using Microsoft.AspNetCore.Http;

namespace TrailersApp.Application.DTOs.Trailer
{
    public class UpdateTrailerDto : ITrailerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IFormFile Image { get; set; }
        public DateTime ReleaseYear { get; set; }
        public int Duration { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
    }
}