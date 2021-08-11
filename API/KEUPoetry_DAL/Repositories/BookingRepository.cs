using KEUPoetry_API;
using KEUPoetry_DAL.Interfaces;
using KEUPoetry_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Repositories
{
    public class BookingRepository : IBaseRepository<Booking>
    {
        public KEUPoetryContext dbContext = new KEUPoetryContext();

        public virtual List<Booking> GetAll()
        {
            List<Booking> bookingList = this.dbContext.Bookings.OrderBy(booking => booking.BookingID).ToList();
            return bookingList;
        }
    }
}
