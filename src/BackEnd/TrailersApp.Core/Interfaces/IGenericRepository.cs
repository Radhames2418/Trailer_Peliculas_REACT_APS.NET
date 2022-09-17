using System.Collections.Generic;
using System.Threading.Tasks;
using TrailersApp.Core.Entities;

namespace TrailersApp.Core.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        Task<T> Get(int id);
        Task<IEnumerable<T>> GetAll();
        Task<T> Add(T entity);
        Task<T> Update(T entity);
        Task Delete(int id);
        Task<bool> Exists(int id);
    }
}