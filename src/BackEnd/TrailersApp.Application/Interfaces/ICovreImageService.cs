using Microsoft.AspNetCore.Http;

namespace TrailersApp.Application.Interfaces
{
    public interface ICovreImageService
    {
        public string GetImgSrc(IFormFile imageFile, string dir);
        public void DeleteImg(string imageSrc);
    }
}