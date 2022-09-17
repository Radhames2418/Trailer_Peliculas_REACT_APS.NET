using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrailersApp.Application.Data.DataContext;
using TrailersApp.Core.Entities;
using TrailersApp.Core.Interfaces;

namespace TrailersApp.Application.Data.Repositories
{
    public class GenericRepository <T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly Trailers_dbContext _dbContext;
        private DbSet<T> _db;

        public GenericRepository(Trailers_dbContext dbContext)
        {
            _dbContext = dbContext;
            _db = _dbContext.Set<T>();
        }

        public async Task<T> Get(int id)
        {
            return await _db.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _db.AsNoTracking().ToListAsync();
        }

        public async Task<T> Add(T entity)
        {
            await _db.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<T> Update(T entity)
        {
            _db.Attach(entity);
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task Delete(int id)
        {
            var entity = await Get(id);
            _db.Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<bool> Exists(int id)
        {
            var entity = await Get(id);
            return entity != null;
        }
    }
}