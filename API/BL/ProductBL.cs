using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class ProductBL
    {

        public static ProductDTO ConvertProductToDTO(Product p)
        {
            return new ProductDTO
            {
                product_kod = p.product_kod,
                product_name = p.product_name,
                torem_id = p.torem_id,
                prouduct_picture = p.prouduct_picture,
                amount_of_tickets_even = p.amount_of_tickets_even,
                description = p.description


            };
        }

        public static Product ConvertProductToDAL(ProductDTO p)
        {
            return new Product
            {
                product_kod = p.product_kod,
                product_name = p.product_name,
                torem_id = p.torem_id,
                prouduct_picture = p.prouduct_picture,
                amount_of_tickets_even = p.amount_of_tickets_even,
                description=p.description
            };
        }

        //public static List<ProductDTO> ConvertProductListToDTO(List<Product> products)
        //{
        //    return products.Select(p => ConvertProductToDTO(p)).ToList();
        //}

        public static List<ProductDTO> GetAllProductList()
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                var products = db.Products.ToList();
                return products.Select(p=> ConvertProductToDTO(p)).ToList();
            }
        }

        public static int AddProduct(ProductDTO p, int id)
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            { 

                Product newProduct = new Product
                {
                    product_kod=p.product_kod,
                    product_name=p.product_name,
                    prouduct_picture=p.prouduct_picture,
                    torem_id=id,
                    description=p.description
                    
                };
                db.Products.Add(newProduct);

                try
                {
                    db.SaveChanges();
                    return newProduct.product_kod;
                }
                catch (Exception e)
                {
                    return -1;
                }
            }
        }
    }
}
