using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class PackagesBL
    {
        public static PackagesDTO ConvertPackagesToDTO(Package p)
        {
            return new PackagesDTO
            {
                
                package_kod = p.package_kod,
                package_name = p.package_name,
                package_price = p.package_price,
                num_of_cards = p.num_of_cards
            };
        }

        public static Package ConvertPackagesToDAL(PackagesDTO p)
        {
            return new Package
            {
                package_kod = p.package_kod,
                package_name = p.package_name,
                package_price = p.package_price,
                num_of_cards = p.num_of_cards
            };
        }

        public static List<PackagesDTO> GetAllPackagesList()
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                var packages = db.Packages.ToList();
                return packages.Select(p => ConvertPackagesToDTO(p)).ToList();
            }
           
        }

        public static int GetSingleTicketPackageCode()
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                return db.Packages.First(p => p.num_of_cards == 1).package_kod;
            }
        }

       
    }
}
