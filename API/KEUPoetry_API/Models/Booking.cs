using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KEUPoetry_API.Models
{
  public class Booking
  {
    [Key]
    public int BookingID { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public string BookedBy { get; set; }

    public bool OnHold { get; set; } // if someone is thinking about booking but hasn't fully committed.
  }
}
