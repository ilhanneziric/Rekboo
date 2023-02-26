using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services
{
    public class MealService : BaseCRUDService<Model.Meal, Database.Meal, MealSearchObject, MealUpsertRequest, MealUpsertRequest>, IMealService
    {
        private readonly IMemoryCache _memoryCache;
        public MealService(RekbooContext context, IMapper mapper, IMemoryCache memoryCache) : base(context, mapper)
        {
            _memoryCache = memoryCache;
        }
        public override IQueryable<Meal> AddFilter(IQueryable<Meal> query, MealSearchObject search = null)
        {
            var filteredQuery = base.AddFilter(query, search);

            if (search?.Active != null)
            {
                filteredQuery = filteredQuery.Where(meal => meal.Active == search.Active);
            }

            if (search?.Tags?.Length != null)
            {
                filteredQuery = filteredQuery.Where(meal => meal.Tags.Any(tag => search.Tags.Contains(tag)));
            }

            return filteredQuery;
        }

        public IEnumerable<string> GetTags()
        {
            var cacheKey = "mealTags";

            if (!_memoryCache.TryGetValue(cacheKey, out IEnumerable<string> mealTags))
            {
                mealTags = new string[] { "MODERNO", "VEGETARIJANSKO", "VEGAN", /*"FITNESS",*/ "ZDRAVO", /*"AZIJSKA KUHINJA",*/ "AZIJSKO", "TRADICIONALNO", "MEDITERANSKO", "ORIJENTALNO" };

                var cacheExpiryOptions = new MemoryCacheEntryOptions
                {
                    AbsoluteExpiration = DateTime.Now.AddSeconds(50),
                    Priority = CacheItemPriority.High,
                    SlidingExpiration = TimeSpan.FromSeconds(20)
                };

                _memoryCache.Set(cacheKey, mealTags, cacheExpiryOptions);
            }
            return mealTags;
        }
    }
}
