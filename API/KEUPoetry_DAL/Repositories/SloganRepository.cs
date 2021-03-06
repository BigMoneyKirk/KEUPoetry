using KEUPoetry_API;
using KEUPoetry_DAL.Interfaces;
using KEUPoetry_DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Repositories
{
    public class IBaseRepository : IBaseRepository<Slogan>
    {
        public KEUPoetryContext dbContext = new KEUPoetryContext();

        public virtual List<Slogan> GetAll()
        {
            List<Slogan> sloganList = this.dbContext.Slogans.OrderBy(slogan => slogan.SloganID).ToList();
            return sloganList;
        }
    }
}
