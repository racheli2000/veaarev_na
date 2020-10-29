using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    class ProductsAndSelectedProductsBL
    {
        public static ProductsAndSelectedProductsDTO ConvertToDTO(Selected_Products p)
        {
            return new ProductsAndSelectedProductsDTO
            {
                product_kod = p.product_kod,
                amount_of_tickets=p.amount_of_tickets
            };
        }

        public static Selected_Products ConvertToDAL(ProductsAndSelectedProductsDTO p)
        {
            return new Selected_Products
            {
                product_kod = p.product_kod,
                amount_of_tickets = p.amount_of_tickets
            };
        }

        public static List<ProductsAndSelectedProductsDTO> GetKodAndAmount()
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                var Sp = //from Selected_Products sp join Product p on sp.product_kod=p.product_kod
                        from sp in Selected_Products join p in Product on sp.product_kop=p.product_kod
                        select new { p.product_kod, sp.amount_of_tickets };

                return Sp.Select(p => ConvertToDTO(p)).ToList();

            }
        }
    }
}
