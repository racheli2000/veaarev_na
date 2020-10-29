using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class WinnerDTO
    {
        private string v1;
        private string v2;
        private string v3;

        public string user_firsname { get; set; }
        public string user_lastname { get; set; }
        public string product_name { get; set; }
        public Nullable<int> user_kod { get; set; }


        public WinnerDTO():this(" "," "," ")
        {

        }

        public WinnerDTO(string v1, string v2, string v3)
        {
            this.v1 = v1;
            this.v2 = v2;
            this.v3 = v3;
        }
    }
}
