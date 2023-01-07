using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services;

namespace Rekboo.Controllers
{
    public class UserController : BaseCRUDController<User, UserSearchObject, UserInsertRequest, UserUpdateRequest>
    {
        public IUserService _userService;
        public UserController(IUserService userService) : base(userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("/api/User/login")]
        public IActionResult Login([FromBody] UserLoginRequest user)
        {
            var token = _userService.Login(user);
            if(token == null)
            {
                return BadRequest("Invalid email or password!");
            }
            return Ok(token);
        }
    }
}
