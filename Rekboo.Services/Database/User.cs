using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services.Database
{
    public partial class User
    {
        public int UserID { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public string PasswordSalt { get; set; } = null!;
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? City { get; set; }

        public virtual ICollection<Planner>? Planners { get; set; }
    }
}
