using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class OrderBL
    {
        public static bool EndOrder(int userCode, List<ProductInPackageDTO> packages)
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                int donationAmount = 0;

                ProductInPackageDTO singlePackage = null;
                int numSingle = 0;

                int packageCode;
                int singlePackageCode = PackagesBL.GetSingleTicketPackageCode();
                if (packages.Count > 0)
                {
                    singlePackage = packages.FirstOrDefault(p => p.package_type_kod == singlePackageCode);
                }
                if (singlePackage != null)
                {
                    numSingle = singlePackage.selectedProducts.Count;
                    packages.Remove(singlePackage);
                    donationAmount = numSingle * db.Packages.ToList().FirstOrDefault(pa => pa.package_kod == singlePackage.package_type_kod).package_price.Value;
                }

                packages.ForEach(p =>
            {
                donationAmount += db.Packages.ToList().FirstOrDefault(pa => pa.package_kod == p.package_type_kod).package_price.Value;

            }
           );
                Donation donation = new Donation { troma_date = DateTime.Today, troma_amount = donationAmount, user_kod = userCode };
                db.Donations.Add(donation);
                db.SaveChanges();

                if (singlePackage != null)
                {
                    for (int i = 0; i < numSingle; i++)
                    {
                        packageCode = DonationForPackageBL.AddPackageToDonation(donation.troma_kod, singlePackage.package_type_kod);
                        singlePackage.selectedProducts.ForEach(sp => SelectedProductsBL.AddSelectedProducts(sp, packageCode));

                    }
                }

                packages.ForEach(p =>
                {
                    packageCode = DonationForPackageBL.AddPackageToDonation(donation.troma_kod, p.package_type_kod);
                    p.selectedProducts.ForEach(sp => SelectedProductsBL.AddSelectedProducts(sp, packageCode));
                });

                db.SaveChanges();
                return true;
            }
        }


        public static void sendEmail(UserDTO user)
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {

                var fromAddress = new MailAddress("veaarevnaproject@gmail.com", "Veaarev Na");
                var toAddress = new MailAddress(user.user_email, "To Name");
                const string fromPassword = "v211651880v";
                const string subject = "תודה על תרומתך!";
                string body = "שלום  " + user.user_firsname + "!@ תודה שהשתתפת בהגרלה!@ זכית להפיץ תורה!!!";
                body = body.Replace("@", " " + Environment.NewLine);


                var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                };
                using (var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = body
                })
                {
                    smtp.Send(message);
                }
            }
        }


    }
}
