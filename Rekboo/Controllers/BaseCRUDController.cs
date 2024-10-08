﻿using Microsoft.AspNetCore.Mvc;
using Rekboo.Services;

namespace Rekboo.Controllers
{
    public class BaseCRUDController<T, TSearch, TInsert, TUpdate> : BaseController<T, TSearch>
        where T : class where TSearch : class where TInsert : class where TUpdate : class
    {
        public BaseCRUDController(IService<T, TSearch> service) : base(service) { }

        [HttpPost]
        public virtual Task<T> Insert([FromBody] TInsert insert)
        {
            var result = ((ICRUDService<T, TSearch, TInsert, TUpdate>)this.Service).Insert(insert);
            return result;
        }

        [HttpPut("{id}")]
        public virtual Task<T> Update(int id, [FromBody] TUpdate update)
        {
            var result = ((ICRUDService<T, TSearch, TInsert, TUpdate>)this.Service).Update(id, update);
            return result;
        }
    }
}
