using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ProductInPackageDTO
    {
        public int package_price { get; set; }
        public int package_type_kod { get; set; }
        public List<SelectedProductsDTO> selectedProducts { get; set; }
         = new List<SelectedProductsDTO>();
    }
}
