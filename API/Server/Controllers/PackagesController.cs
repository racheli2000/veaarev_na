using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Server.Controllers
{
    [RoutePrefix("api/Package")]
    [EnableCors("*", "*", "*")]
    public class PackagesController : ApiController
    {
        [Route("GetAllPackagesList")]
        [HttpGet]

        public IHttpActionResult GetAllPackagesList()
        {
            return Ok(BL.PackagesBL.GetAllPackagesList());
        }

    }
}
