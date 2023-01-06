using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ENITY_API.Models
{
    public class User
    {
        public string email { get; set; } = String.Empty;
        public string password { get; set; } = String.Empty;
        public string registerdate { get; set; } = String.Empty;
    }
}
