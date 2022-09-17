using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TrailersApp.Core.Entities;

namespace TrailersApp.Application.Data.DataContext.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("users");
            
            builder.HasKey(x => x.Id);

            builder.Property(e => e.Id).HasColumnName("id");

            builder.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode(false);

            builder.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode(false);

            builder.Property(e => e.Password)
                .IsRequired()
                .HasMaxLength(25)
                .IsUnicode(false);
            
            builder.HasData(
                new User
                {
                    Id = 1,
                    Name = "Admin",
                    Email = "admin@mail.com",
                    Password = "admin1234"
                });
        }
    }
}