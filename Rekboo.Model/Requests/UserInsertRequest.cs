
namespace Rekboo.Model.Requests
{
    public class UserInsertRequest
    {
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string PasswordConfirmation { get; set; } = null!;
        public string Role { get; set; } = null!;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Phone { get; set; }
        public string? City { get; set; }
    }
}
