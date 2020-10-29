//using DAL;
using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Server.Controllers
{
    [RoutePrefix("api/Order")]
    [EnableCors("*", "*", "*")]
    public class OrderController : ApiController
    {
        [HttpPost,Route("EndOrder")]
        public IHttpActionResult EndOrder(OrderDTO order)
        {

            OrderBL.sendEmail(order.User);

            int userKod = BL.UserBL.AddUser(order.User);

            OrderBL.EndOrder(userKod, order.SelectedPackeges);

            return Ok();
        }
    }
}
