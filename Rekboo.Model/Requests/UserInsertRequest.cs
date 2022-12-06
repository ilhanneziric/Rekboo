using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model.Requests
{
    public class UserInsertRequest
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string PasswordConfirmation { get; set; } = null!;
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? City { get; set; }
    }
}
