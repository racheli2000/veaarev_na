using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class DonationsBL
    {
        public static bool AddDonation(UserDTO user,PackagesDTO p)
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                db.Donations.Add(new Donation
                {
                    user_kod = user.user_kod,
                    troma_date = DateTime.Today,
                    troma_amount = p.package_price
                });

                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
