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
    public class SloganRepository : ISloganRepository
    {
        public KEUPoetryContext dbContext = new KEUPoetryContext();

        public virtual List<Slogan> GetAll()
        {
            // for testing purposes
            List<Slogan> test = this.dbContext.Slogans.OrderBy(slogan => slogan.SloganID).ToList();
            return test;
        }
    }
}
