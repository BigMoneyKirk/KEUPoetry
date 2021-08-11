using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

using KEUPoetry_DAL.Interfaces.Services;
using KEUPoetry_DAL.Models;
using KEUPoetry_DAL.Services;

namespace KEUPoetry_API.Controllers
{
    [EnableCors(origins: "http://localhost:4200/, *", headers: "*", methods: "*")]
    [RoutePrefix("api/Slogan")]
    public class SlogansController : ApiController
    {
        public ISloganService sloganService;

        public SlogansController()
        {
            this.sloganService = new SloganService();
        }

        public SlogansController(ISloganService sloganService)
        {
            this.sloganService = sloganService;
        }

        // GET: api/Slogans
        [HttpGet]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [Route("all")]
        public IHttpActionResult GetAll()
        {
            List<Slogan> entity = this.sloganService.GetAllSlogans();
            return this.Ok(entity);
        }

        /* ---------------------------------------------- Everything below here is TO-DO ---------------------------------------------------- */

        // GET: api/Slogans/5
        [Route("{id:int}")]
        public HttpResponseMessage Get(int id)
        {
            List<Slogan> entity = new List<Slogan>();
            return this.Request.CreateResponse(HttpStatusCode.OK, entity);
        }

        // POST: api/Slogans
        [Route("modify")]
        public HttpResponseMessage Post([FromBody]string value)
        {
            List<Slogan> entity = new List<Slogan>();
            return this.Request.CreateResponse(HttpStatusCode.OK, entity);
        }

        // PUT: api/Slogans/5
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            List<Slogan> entity = new List<Slogan>();
            return this.Request.CreateResponse(HttpStatusCode.OK, entity);
        }

        // DELETE: api/Slogans/5
        [Route("delete/{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            List<Slogan> entity = new List<Slogan>();
            return this.Request.CreateResponse(HttpStatusCode.OK, entity);
        }
    }
}
