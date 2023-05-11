using AutoMapper;
using Rekboo.Model.SearchObjects;
using Rekboo.Services.Database;
using System.Collections.Generic;

namespace Rekboo.Services
{
    public class BaseCRUDService<T, TDb, TSearch, TInsert, TUpdate>
        : BaseService<T, TDb, TSearch>, ICRUDService<T, TSearch, TInsert, TUpdate>
            where T : class where TDb : class where TSearch : BaseSearchObject where TInsert : class where TUpdate : class
    {
        public BaseCRUDService(RekbooContext context, IMapper mapper) : base(context, mapper) { }

        public virtual async Task<T> Insert(TInsert insert)
        {
            var set = Context.Set<TDb>();
            TDb entity = Mapper.Map<TDb>(insert);

            set.Add(entity);

            await BeforeInsert(insert, entity);

            Context.SaveChanges();

            return Mapper.Map<T>(entity);
        }

        public virtual async Task BeforeInsert(TInsert insert, TDb entity)
        {
        }

        public virtual async Task<T> Update(int id, TUpdate update)
        {
            var set = Context.Set<TDb>();
            var entity = set.Find(id);
            if (entity == null)
                return null;

            Mapper.Map(update, entity);

            await BeforeUpdate(update, entity);

            Context.SaveChanges();

            return Mapper.Map<T>(entity);
        }

        public virtual async Task BeforeUpdate(TUpdate update, TDb entity)
        {
        }
    }
}
