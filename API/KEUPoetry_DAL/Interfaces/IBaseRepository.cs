using KEUPoetry_DAL.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Interfaces
{
    public interface IBaseRepository<TModel> where TModel : BaseModel
    {
        List<TModel> GetAll();
    }
}
