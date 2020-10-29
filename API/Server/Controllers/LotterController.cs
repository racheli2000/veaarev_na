using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Server.Controllers
{
    [RoutePrefix("api/lottery")]
    [EnableCors("*", "*", "*")]
    public class LotterController: ApiController
    {
        [Route("getAllWinners")]
        [HttpGet]
        public IHttpActionResult getAllWinners()
        {
            return Ok(BL.LotteryBL.Lottery());
        }

    }
}