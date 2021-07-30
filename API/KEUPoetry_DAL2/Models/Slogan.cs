using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KEUPoetry_DAL.Models
{
    public class Slogan
    {
        [Key]
        public int SloganID { get; set; }

        public string Text { get; set; }

        public string Author { get; set; }
    }
}