using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class UserDTO
    {
        public int user_kod { get; set; }
        public string user_id { get; set; }
        public Nullable<int> user_password { get; set; }
        public string user_firsname { get; set; }
        public string user_lastname { get; set; }
        public string user_email { get; set; }
        public string user_phone { get; set; }
    }
}
