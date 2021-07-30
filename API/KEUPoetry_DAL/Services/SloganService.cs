using KEUPoetry_DAL.Interfaces.Services;
using KEUPoetry_DAL.Models;
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

        public List<Slogan> GetAllSlogans()
        {
            return new List<Slogan>();
        }
    }
}
