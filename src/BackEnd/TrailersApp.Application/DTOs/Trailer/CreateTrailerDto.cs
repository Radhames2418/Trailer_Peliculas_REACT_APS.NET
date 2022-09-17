using System;
using Microsoft.AspNetCore.Http;

namespace TrailersApp.Application.DTOs.Trailer
{
    public class CreateTrailerDto : ITrailerDto
    {
        public string Name { get; set; }
        public IFormFile Image { get; set; }
        public DateTime ReleaseYear { get; set; }
        public int Duration { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
    }
}