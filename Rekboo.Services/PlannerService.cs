using AutoMapper;
using Microsoft.EntityFrameworkCore;
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
    public class PlannerService : BaseCRUDService<Model.Planner, Database.Planner, PlannerSearchObject, PlannerUpsertRequest, PlannerUpsertRequest>, IPlannerService
    {
        public PlannerService(RekbooContext context, IMapper mapper) : base(context, mapper)
        {
            //add filter implementirati
        }

        public override void AfterInsert(PlannerUpsertRequest insert, Planner entity)
        {
            var set = Context.Set<PlannerMeal>();
            foreach (var mealID in insert.MealIDs)
            {
                PlannerMeal plannerMealEntity = Mapper.Map<PlannerMeal>(new PlannerMealUpsertRequest
                {
                    MealID = mealID,
                    PlannerID = entity.PlannerID
                });
                set.Add(plannerMealEntity);
            }

            Context.SaveChanges();
        }

        public override IQueryable<Planner> AddInclude(IQueryable<Planner> query, PlannerSearchObject search = null)
        {
            query = query.Include(x => x.User).Include(x => x.Meals).ThenInclude(pm => pm.Meal);
            return query;
        }
    }
}
