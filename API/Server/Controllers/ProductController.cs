using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Server.Controllers
{
    [RoutePrefix("api/product")]
    [EnableCors("*", "*", "*")]
    public class ProductController : ApiController
    {
        [Route("GetProductList")]
        [HttpGet]
        public IHttpActionResult GetAllProductList()
        {
            return Ok(BL.ProductBL.GetAllProductList());
        }


        //[Route("AddProduct")]
        //[HttpGet]
        //public IHttpActionResult AddProduct(ProductDTO product)
        //{
        //    return Ok(BL.ProductBL.AddProduct(product));
        //}
    }
}
