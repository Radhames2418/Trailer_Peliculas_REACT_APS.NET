using System;

#nullable disable

namespace TrailersApp.Core.Entities
{
    public class Trailer : BaseEntity
    {
        public string Name { get; set; }
        public string CoverSrc { get; set; }
        public DateTime ReleaseYear { get; set; }
        public int Duration { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
    }
}
