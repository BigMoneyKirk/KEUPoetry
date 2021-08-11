using KEUPoetry_DAL.Models;
using KEUPoetry_DAL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KEUPoetry_API.Controllers
{
    [RoutePrefix("api/Booking")]
    public class BookingsController : ApiController
    {
        public BookingService bookingService;

        public BookingsController()
        {
            this.bookingService = new BookingService();
        }

        public BookingsController(BookingService bookingService)
        {
            this.bookingService = bookingService;
        }

        // GET api/values
        [Route("all")]
        public IHttpActionResult GetAll()
        {
            List<Booking> bookingList = this.bookingService.GetAllBookings();
            return this.Ok(bookingList);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
