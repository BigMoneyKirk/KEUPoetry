using KEUPoetry_DAL.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Models
{
    public class Booking : BaseModel
    {
        [Key]
        public int BookingID { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string BookedBy { get; set; }

        public bool OnHold { get; set; }
    }
}
