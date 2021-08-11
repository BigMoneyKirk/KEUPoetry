using KEUPoetry_DAL.Interfaces;
using KEUPoetry_DAL.Models;
using KEUPoetry_DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Services
{
    public class BookingService
    {
        private IBaseRepository<Booking> sloganRepository;

        public BookingService()
        {
            this.sloganRepository = new BookingRepository();
        }

        public BookingService(BookingRepository sloganRepository)
        {
            this.sloganRepository = sloganRepository;
        }

        public List<Booking> GetAllBookings()
        {
            return this.sloganRepository.GetAll();
        }
    }
}
