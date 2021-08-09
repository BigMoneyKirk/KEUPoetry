using KEUPoetry_DAL.Infrastructure;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KEUPoetry_DAL.Models
{
    public class Slogan : BaseModel
    {
        public Slogan()
        {
        }

        [Key]
        public int SloganID { get; set; }

        public string Text { get; set; }

        public string Author { get; set; }
    }
}
