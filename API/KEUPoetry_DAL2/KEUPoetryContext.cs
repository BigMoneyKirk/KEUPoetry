using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

using KEUPoetry_DAL.Models;

namespace KEUPoetry_DAL
{
  public class KEUPoetryContext : DbContext
  {
    public DbSet<Booking> Bookings { get; set; }
    public DbSet<Slogan> Slogans { get; set; }
  }
}
