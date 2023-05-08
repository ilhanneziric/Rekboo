using AutoMapper;
using Rekboo.Model.SearchObjects;
using Rekboo.Services.Database;

namespace Rekboo.Services
{
    public class BaseService<T, TDb, TSearch> : IService<T, TSearch> where T : class where TDb : class where TSearch : BaseSearchObject
    {
        public RekbooContext Context { get; set; }
        public IMapper Mapper { get; set; }

        public BaseService(RekbooContext context, IMapper mapper)
        {
            Context = context;
            Mapper = mapper;
        }

        public virtual IEnumerable<T> Get(TSearch search = null)
        {
            var entity = Context.Set<TDb>().AsQueryable();
            entity = AddFilter(entity, search);
            entity = AddInclude(entity, search);

            if (search.Page.HasValue == true || search.PageSize.HasValue == true)
            {
                entity = entity.Skip(search.Page.Value * search.PageSize.Value).Take(search.PageSize.Value);
            }

            var list = entity.ToList();

            return Mapper.Map<IList<T>>(list);
        }

        public virtual T GetById(int id)
        {
            var set = Context.Set<TDb>();
            var entity = set.Find(id);
            return Mapper.Map<T>(entity);
        }

        public virtual IQueryable<TDb> AddInclude(IQueryable<TDb> query, TSearch search = null)
        {
            return query;
        }

        public virtual IQueryable<TDb> AddFilter(IQueryable<TDb> query, TSearch search = null)
        {
            return query;
        }
    }
}
