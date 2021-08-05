using KEUPoetry_API;
using KEUPoetry_DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.UnitOfWork
{
    public class UnitOfWork
    {
        // constructors
        public UnitOfWork()
        {
            this.dbContext = new KEUPoetryContext();
        }

        public UnitOfWork(KEUPoetryContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // global variables
        private KEUPoetryContext dbContext;
        private SloganRepository sloganRepository;

        // methods
        public SloganRepository SloganRepository()
        {
            return this.sloganRepository = new SloganRepository();
        }
    }
}
