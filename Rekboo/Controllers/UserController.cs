using AutoMapper;
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

        //[AllowAnonymous]
        //public override IActionResult Insert([FromBody] UserInsertRequest insert)//popraviti da vrati string, mozda dodati u onaj Model.User response, mozda staviti sve response u baseovima da se vraca Iactionresult
        //{
        //    base.Insert(insert);

        //    var token = _userService.Login(new UserLoginRequest
        //    {
        //        Password = insert.Password,
        //        Email = insert.Email,
        //    });
        //}

        [AllowAnonymous]
        public override User Insert([FromBody] UserInsertRequest insert)
        {
            return base.Insert(insert);
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
