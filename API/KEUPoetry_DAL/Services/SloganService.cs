using KEUPoetry_DAL.Interfaces.Services;
using KEUPoetry_DAL.Models;
using KEUPoetry_DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Services
{
    public class SloganService : ISloganService
    {
        public SloganService() { }

        private SloganRepository sloganRepository = new SloganRepository();

        public List<Slogan> GetAllSlogans()
        {
            var test = this.sloganRepository.GetAll();
            return test;
        }
    }
}
