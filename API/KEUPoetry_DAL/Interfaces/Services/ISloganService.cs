using KEUPoetry_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Interfaces.Services
{
    public interface ISloganService
    {
        List<Slogan> GetAllSlogans();
    }
}
