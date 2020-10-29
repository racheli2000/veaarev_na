using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class UserBL
    {
        public static int AddUser(UserDTO user)
        {
            using (veaarev_vaEntities db = new veaarev_vaEntities())
            {
                User newUser = new User
                {
                    user_kod = user.user_kod,
                    user_id = user.user_id,
                    user_firsname = user.user_firsname,
                    user_lastname = user.user_lastname,
                    user_email = user.user_email,
                    user_phone = user.user_phone
                };
                db.Users.Add(newUser);

                try
                {
                    db.SaveChanges();
                    return newUser.user_kod;
                }
                catch (Exception e)
                {
                    return -1;
                }
            }
        }
    }
}
