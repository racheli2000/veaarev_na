using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class PackagesDTO
    {
        public int package_kod { get; set; }
        public string package_name { get; set; }
        public Nullable<int> package_price { get; set; }
        public Nullable<int> num_of_cards { get; set; }

    }
}
