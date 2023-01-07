using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model.Requests
{
    public class UserLoginRequest
    {
        public string Password { get; set; } = null!;
        public string Email { get; set; } = null!;
    }
}
