using System;

namespace TrailersApp.Application.DTOs.Trailer
{
    public interface ITrailerDto
    {
        public string Name { get; set; }
        public DateTime ReleaseYear { get; set; }
        public int Duration { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
    }
}