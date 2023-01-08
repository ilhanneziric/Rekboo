using AutoMapper;
using Microsoft.Extensions.Configuration;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services
{
    public class UserService : BaseCRUDService<Model.User, Database.User, UserSearchObject, UserInsertRequest, UserUpdateRequest>, IUserService
    {
        public ITokenService _tokenService;
        public IConfiguration _configuration;
        public UserService(RekbooContext context, IMapper mapper, ITokenService tokenService, IConfiguration configuration) : base(context, mapper)
        {
            _tokenService = tokenService;
            _configuration = configuration;
        }

        public override Model.User Insert(UserInsertRequest insert)
        {
            if(insert.Password != insert.PasswordConfirmation)
            {
                throw new Exception("Passwords doesn't match!");
            }

            var entity = base.Insert(insert);

            Context.SaveChanges();
            return entity;
        }

        public override void BeforeInsert(UserInsertRequest insert, Database.User entity)
        {
            var salt = GenerateSalt();
            entity.PasswordSalt = salt;
            entity.PasswordHash = GenerateHash(salt, insert.Password);
            base.BeforeInsert(insert, entity);
        }

        public static string GenerateSalt()
        {
            RNGCryptoServiceProvider provider = new RNGCryptoServiceProvider();
            var byteArray = new byte[16];
            provider.GetBytes(byteArray);

            return Convert.ToBase64String(byteArray);
        }

        public static string GenerateHash(string salt, string password)
        {
            byte[] src = Convert.FromBase64String(salt);
            byte[] bytes = Encoding.Unicode.GetBytes(password);
            byte[] dst = new byte[src.Length + bytes.Length];

            System.Buffer.BlockCopy(src, 0, dst, 0, src.Length);
            System.Buffer.BlockCopy(bytes, 0, dst, src.Length, bytes.Length);

            HashAlgorithm algorithm = HashAlgorithm.Create("SHA1");
            byte[] inArrey = algorithm.ComputeHash(dst);
            return Convert.ToBase64String(inArrey);
        }

        public override IQueryable<User> AddFilter(IQueryable<User> query, UserSearchObject search = null)
        {
            var filteredQuery = base.AddFilter(query, search);

            if (!string.IsNullOrWhiteSpace(search?.Email))
            {
                filteredQuery = filteredQuery.Where(x => x.Email == search.Email);
            }

            //if (!string.IsNullOrWhiteSpace(search?.FirstName) && !string.IsNullOrWhiteSpace(search?.LastName))
            //{
            //    filteredQuery = filteredQuery.Where(x => x.FirstName.Contains(search.FirstName) || x.LastName.Contains(search.LastName));
            //}

            if (!string.IsNullOrWhiteSpace(search?.FirstName))
            {
                filteredQuery = filteredQuery.Where(x => x.FirstName == search.FirstName);
            }

            if (!string.IsNullOrWhiteSpace(search?.LastName))
            {
                filteredQuery = filteredQuery.Where(x => x.LastName == search.LastName);
            }

            if (!string.IsNullOrWhiteSpace(search?.Phone))
            {
                filteredQuery = filteredQuery.Where(x => x.Phone == search.Phone);
            }

            if (!string.IsNullOrWhiteSpace(search?.City))
            {
                filteredQuery = filteredQuery.Where(x => x.City == search.City);
            }

            if (!string.IsNullOrWhiteSpace(search?.Role))
            {
                filteredQuery = filteredQuery.Where(x => x.Role == search.Role);
            }

            return filteredQuery;
        }

        public string Login(UserLoginRequest request)
        {
            var entity = Context.Users.FirstOrDefault(x => x.Email == request.Email);
            if (entity == null)
            {
                return null;
            }

            var hash = GenerateHash(entity.PasswordSalt, request.Password);
            if (hash != entity.PasswordHash)
            {
                return null;
            }

            var token = _tokenService.BuildToken(_configuration["Jwt:Key"].ToString(), _configuration["Jwt:Issuer"].ToString(), Mapper.Map<Model.User>(entity));

            return token;
        }
    }
}
