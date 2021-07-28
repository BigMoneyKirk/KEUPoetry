using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using KEUPoetry_DAL.Interfaces.Services;
using KEUPoetry_DAL.Models;
using KEUPoetry_DAL.Services;

namespace KEUPoetry_API.Controllers
{
    public interface BaseController {

        HttpResponseMessage GetAll();

        HttpResponseMessage Get(int id);

        HttpResponseMessage Post([FromBody] string value);

        HttpResponseMessage Put(int id, [FromBody] string value);

        HttpResponseMessage Delete(int id);
    }
}
