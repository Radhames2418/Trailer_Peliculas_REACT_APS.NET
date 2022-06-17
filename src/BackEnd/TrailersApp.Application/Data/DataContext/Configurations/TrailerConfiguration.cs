using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TrailersApp.Core.Entities;

namespace TrailersApp.Application.Data.DataContext.Configurations
{
    public class TrailerConfiguration : IEntityTypeConfiguration<Trailer>
    {
        public void Configure(EntityTypeBuilder<Trailer> builder)
        {
            builder.ToTable("trailers");
            
            builder.HasKey(x => x.Id);

            builder.Property(e => e.Id).HasColumnName("id");
            
            builder.Property(e => e.Category)
                .IsRequired()
                .HasMaxLength(25)
                .IsUnicode(false);

            builder.Property(e => e.CoverSrc)
                .IsRequired()
                .HasMaxLength(250)
                .IsUnicode(false);

            builder.Property(e => e.Description)
                .IsRequired()
                .HasMaxLength(250)
                .IsUnicode(false);

            builder.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode(false);

            builder.Property(e => e.ReleaseYear).HasColumnType("date");

            builder.Property(e => e.Url)
                .IsRequired()
                .HasMaxLength(250)
                .IsUnicode(false);
        }
    }
}