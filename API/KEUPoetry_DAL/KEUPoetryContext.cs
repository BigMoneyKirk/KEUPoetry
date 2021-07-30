using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

using KEUPoetry_DAL.Models;

namespace KEUPoetry_API
{
    public class KEUPoetryContext : DbContext
    {
        public DbSet<Booking> Bookings { get; set; }

        public DbSet<Slogan> Slogans { get; set; }

        public virtual void SetModified(object entity)
        {
            this.Entry(entity).State = EntityState.Modified;
        }

        public virtual void SetDeleted(object entity)
        {
            this.Entry(entity).State = EntityState.Deleted;
        }
    }
}