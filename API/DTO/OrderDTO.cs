﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class OrderDTO
    {

        public List<ProductInPackageDTO> SelectedPackeges { get; set; } = new List<ProductInPackageDTO>();
        public UserDTO User { get; set; }

    }
}
