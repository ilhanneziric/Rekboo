
namespace Rekboo.Services.Database
{
    public partial class User
    {
        public int UserID { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string PasswordHash { get; set; } = null!;
        public string PasswordSalt { get; set; } = null!;
        public string Role { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string? Phone { get; set; }
        public string? City { get; set; }
        public string? Address { get; set; }

        public virtual ICollection<Planner>? Planners { get; set; }
    }
}
