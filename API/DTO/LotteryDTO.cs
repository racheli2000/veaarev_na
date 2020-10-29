using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class LotteryDTO
    {
        public int product_kod { get; set; }
        public string product_name { get; set; }
        public Nullable<int> donation_for_package_kod { get; set; }
        public Nullable<int> troma_kod { get; set; }
        public Nullable<int> user_kod { get; set; }
        public string user_firsname { get; set; }
        public string user_lastname { get; set; }

    }
}
