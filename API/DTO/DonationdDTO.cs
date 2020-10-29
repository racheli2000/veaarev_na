using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DonationdDTO
    {
        public int troma_kod { get; set; }
        public Nullable<int> user_kod { get; set; }
        public Nullable<System.DateTime> troma_date { get; set; }
        public Nullable<int> troma_amount { get; set; }
        public string receipt { get; set; }
    }
}
