using BL;
using DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;

namespace Server.Controllers
{

    [RoutePrefix("api/torem")]
    [EnableCors("*", "*", "*")]

    public class ToremController:ApiController
    {
        [HttpPost, Route("AddTorem")]
        public bool AddTorem()
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();

            TormimDTO torem = serializer.Deserialize<TormimDTO>(HttpContext.Current.Request["torem"]);
            ProductDTO product = serializer.Deserialize<ProductDTO>(HttpContext.Current.Request["product"]);

            HttpPostedFile image = HttpContext.Current.Request.Files[0];
            product.prouduct_picture = image.FileName;
            image.SaveAs(HostingEnvironment.MapPath("/Images/"+image.FileName));            // int id = TormimBL.AddTorem(torem);

            int toremId = BL.TormimBL.AddTorem(torem);

            ProductBL.AddProduct(product, toremId);

            return true;

        }

    }
}