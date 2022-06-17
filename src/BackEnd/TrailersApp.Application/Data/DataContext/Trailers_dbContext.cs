using Microsoft.EntityFrameworkCore;
using TrailersApp.Core.Entities;

#nullable disable

namespace TrailersApp.Application.Data.DataContext
{
    public class Trailers_dbContext : DbContext
    {
        public Trailers_dbContext()
        {
        }

        public Trailers_dbContext(DbContextOptions<Trailers_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Trailer> Trailers { get; set; }
        public virtual DbSet<User> Users { get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(Trailers_dbContext).Assembly);
        }
    }
}
