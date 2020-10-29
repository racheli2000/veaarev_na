using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class SelectedProductsBL
    {
        //public static SelectedProductsDTO ConvertProductToDTO(Selected_Products sp)
        //{
        //    return new SelectedProductsDTO
        //    {
        //        product_kod=sp.product_kod,
        //        amount_of_tickets=sp.amount_of_tickets,
        //        donation_for_package_kod=sp.donation_for_package_kod
        //    };
        //}

        //public static Selected_Products ConvertProductToDAL(SelectedProductsDTO sp)
        //{
        //    return new Selected_Products
        //    {
        //        product_kod = sp.product_kod,
        //        amount_of_tickets = sp.amount_of_tickets,
        //        donation_for_package_kod = sp.donation_for_package_kod
        //    };
        //}

        //public static List<SelectedProductsDTO> GetAllSelectedProductList()
        //{
        //    using (veaarev_vaEntities db = new veaarev_vaEntities())
        //    {
        //        var products = db.Products.ToList();
        //        return products.Select(p => ConvertProductToDTO(p)).ToList();
        //    }
        //}

        public static bool AddSelectedProducts(SelectedProductsDTO sp, int packageKod)
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                if (sp.amount != 0)
                {
                    db.Selected_Products.Add(new Selected_Products
                    {
                        product_kod = sp.product_kod,
                        amount_of_tickets = sp.amount,
                        donation_for_package_kod = packageKod
                    });
                }
                try
                {
                    db.SaveChanges();
                    return true;
                }
                catch ( Exception e)
                {
                    return false;
                }
                    
            }
        }
    }
}
