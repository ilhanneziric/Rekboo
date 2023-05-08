using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;

namespace Rekboo.Services
{
    public interface IUserService : ICRUDService<User, UserSearchObject, UserInsertRequest, UserUpdateRequest>
    {
        string Login(UserLoginRequest request);
        bool ExistUser(string email);
        User SetAdmin(int id);
    }
}
