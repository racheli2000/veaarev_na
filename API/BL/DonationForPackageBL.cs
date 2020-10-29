using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class DonationForPackageBL
    {
        //public static bool AddDonationForPackage(PackagesDTO p)
        //{
        //    using (veaarev_vaEntities db = new veaarev_vaEntities())
        //    {
        //        db.Donation_for_package.Add(new Donation_for_package
        //        {
        //            package_kod = p.package_kod,
        //            //var donations = from d in  DTO.DonationdDTO
        //                          //  select new {d.troma_kod,d.}
        //        });

        //        try
        //        {
        //            db.SaveChanges();
        //            return true;
        //        }
        //        catch (Exception e)
        //        {
        //            return false;
        //        }
        //    }
        //}

        public static int AddPackageToDonation(int donationCode, int packageTypeId)
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
               
                Donation_for_package donation_For_Package = new Donation_for_package { package_kod = packageTypeId, troma_kod = donationCode };

                db.Donation_for_package.Add(donation_For_Package);

                Package currentPackage = db.Packages.FirstOrDefault(p => p.package_kod == packageTypeId);
                foreach (var item in db.products_for_packages)
                {
                    if (item.Free_lottery_minimum_amount <= currentPackage.package_price)
                        donation_For_Package.Selected_Products.Add(new Selected_Products { amount_of_tickets=1,product_kod=item.product_kod});
                }
                db.SaveChanges();

                return donation_For_Package.donation_for_package_kod;
            }

            }
    }
}
