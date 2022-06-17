using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using TrailersApp.Application.Interfaces;

namespace TrailersApp.Application.Services
{
    public class CoverImaveService : ICovreImageService
    {
        private readonly IWebHostEnvironment _env;

        public CoverImaveService(IWebHostEnvironment env)
        {
            _env = env;
        }

        public void DeleteImg(string imageSrc)
        {
            var fullPath = Path.Combine(_env.ContentRootPath, imageSrc);
            if(File.Exists(fullPath))
                File.Delete(fullPath);
        }

        public string GetImgSrc(IFormFile imageFile, string dir)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName)
                .Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imageFullPath = Path.Combine(_env.ContentRootPath,"Images/" + dir, imageName);
            
            using (var fileStream = new FileStream(imageFullPath, FileMode.Create))
            {
                var task = Task.Run(() => imageFile.CopyTo(fileStream));
                task.Wait();
            }

            return Path.Combine("Images/" + dir, imageName);
        }
    }
}