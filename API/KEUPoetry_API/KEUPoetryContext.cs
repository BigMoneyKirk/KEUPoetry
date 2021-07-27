using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

using KEUPoetry_API.Models;

namespace KEUPoetry_API
{
  public class KEUPoetryContext : DbContext
  {
    public DbSet<Booking> Bookings { get; set; }
  }
}
