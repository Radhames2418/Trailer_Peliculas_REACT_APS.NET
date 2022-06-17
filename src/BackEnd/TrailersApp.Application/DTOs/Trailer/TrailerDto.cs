using System;

namespace TrailersApp.Application.DTOs.Trailer
{
    public class TrailerDto : ITrailerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CoverSrc { get; set; }
        public DateTime ReleaseYear { get; set; }
        public int Duration { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
    }
}