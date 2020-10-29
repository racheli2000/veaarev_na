using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ProductDTO
    {
        public int product_kod { get; set; }
        public string product_name { get; set; }
        public Nullable<int> torem_id { get; set; }
        public string prouduct_picture { get; set; }

        public string description { get; set; }

        public Nullable<int> amount_of_tickets_even { get; set; }
    }
}
