using AutoMapper;
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
        public MealService(RekbooContext context, IMapper mapper) : base(context, mapper)
        {
        }
        public override IQueryable<Meal> AddFilter(IQueryable<Meal> query, MealSearchObject search = null)
        {
            var filteredQuery = base.AddFilter(query, search);

            if (search?.Tags?.Length != null)
            {
                filteredQuery = filteredQuery.Where(meal => meal.Tags.Any(tag => search.Tags.Contains(tag)));
            }

            return filteredQuery;
        }
    }
}
