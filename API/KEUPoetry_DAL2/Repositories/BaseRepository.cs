using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Repositories
{
    public class BaseRepository<TEntity> 
    {
        //private readonly IDbSet<TEntity> dbSet;
        private readonly KEUPoetryContext context;
        protected BaseRepository() { }
    }
}
