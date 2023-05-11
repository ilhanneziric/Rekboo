using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services.Database;

namespace Rekboo.Services
{
    public class PlannerService : BaseCRUDService<Model.Planner, Database.Planner, PlannerSearchObject, PlannerUpsertRequest, PlannerUpsertRequest>, IPlannerService
    {
        public PlannerService(RekbooContext context, IMapper mapper) : base(context, mapper)
        {
        }

        public override IQueryable<Planner> AddFilter(IQueryable<Planner> query, PlannerSearchObject search = null)
        {
            var filteredQuery = base.AddFilter(query, search);

            if (search?.UserID != null)
            {
                filteredQuery = filteredQuery.Where(x => x.UserID == search.UserID);
            }

            return filteredQuery;
        }

        public override Task<Model.Planner> Insert(PlannerUpsertRequest insert)
        {
            var result = base.Insert(insert);       
            
            foreach (var mealID in insert.MealIDs)
            {
                PlannerMeal plannerMealEntity = Mapper.Map<PlannerMeal>(new PlannerMealUpsertRequest
                {
                    MealID = mealID,
                    PlannerID = result.Result.PlannerID
                });
                Context.PlannerMeals.Add(plannerMealEntity);
            }

            Context.SaveChanges();

            return result;
        }

        public override IQueryable<Planner> AddInclude(IQueryable<Planner> query, PlannerSearchObject search = null)
        {
            query = query.Include(x => x.User).Include(x => x.Meals).ThenInclude(pm => pm.Meal);
            return query;
        }
    }
}
