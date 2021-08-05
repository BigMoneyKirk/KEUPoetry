using KEUPoetry_API;
using KEUPoetry_DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Infrastructure
{
    public class BaseRepository<TEntity> where TEntity : BaseModel
    {
        // global variables
        private readonly IDbSet<TEntity> dbSet;
        private readonly KEUPoetryContext dbContext;

        // constructors
        protected BaseRepository(KEUPoetryContext dbContext)
        {
            this.dbContext = dbContext;
            this.dbSet = this.dbContext.Set<TEntity>();
        }

        // methods

        protected KEUPoetryContext DbContext
        {
            get
            {
                return this.dbContext;
            }
        }

        protected IDbSet<TEntity> DbSet
        {
            get
            {
                return this.dbSet;
            }
        }

        //public virtual void GetAll()
        //{
        //    this.dbContext.Entry<Slogan>.OrderBy();
        //}

        public virtual void Update(TEntity entity)
        {
            this.dbContext.SetModified(entity);
            this.dbContext.SaveChanges();
        }

        public virtual void Find(int id)
        {

        }
    }
}
