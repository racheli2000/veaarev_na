using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class LotteryBL
    {
        public static List<WinnerDTO> Lottery()
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {

                var products = db.Products.ToList();
                List<WinnerDTO> allWinners = new List<WinnerDTO>();
                int tromaKod;
                Random r = new Random();
                Selected_Products winCard;

                foreach (var item in products)
                {
                    var product = db.Selected_Products.Where(p => p.product_kod == item.product_kod).ToList();
                    int basicLength = product.Count();
                    for (int i = 0; i < basicLength; i++)
                    {
                        for (int j = 1; j < product[i].amount_of_tickets; j++)
                        {
                            product.Add(product[i]);
                        }
                    }

                    if (product.Count() > 0)
                    {
                        winCard = product[r.Next(0, product.Count() - 1)];
                        var w = winCard.Donation_for_package.Donation.User;
                        if (product.Count() > 1)
                        {
                            int i;
                            for (i = 0; i < allWinners.Count() && allWinners[i].user_kod != w.user_kod; i++) ;

                            while (i != allWinners.Count())
                            {
                                winCard = product[r.Next(0, product.Count() - 1)];
                                w = winCard.Donation_for_package.Donation.User;
                                for (i = 0; i < allWinners.Count() && allWinners[i].user_kod != w.user_kod; i++) ;

                            }
                        }
                        WinnerDTO winner = new WinnerDTO();

                        winner.user_firsname = w.user_firsname;
                        winner.user_lastname = w.user_lastname;
                        winner.product_name = item.product_name;
                        winner.user_kod = w.user_kod;
                        item.winner_id = w.user_kod;
                        db.SaveChanges();

                        allWinners.Add(winner);
                    }
                }
                return allWinners;
            }
        }

    }
}




