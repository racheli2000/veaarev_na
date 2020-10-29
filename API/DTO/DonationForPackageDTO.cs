using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DonationForPackageDTO
    {
        public int donation_for_package_kod { get; set; }
        public Nullable<int> package_kod { get; set; }
        public Nullable<int> troma_kod { get; set; }
    }
}
