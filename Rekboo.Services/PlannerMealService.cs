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
    public class PlannerMealService : BaseCRUDService<Model.PlannerMeal, Database.PlannerMeal, PlannerMealSearchObject, PlannerMealUpsertRequest, PlannerMealUpsertRequest>, IPlannerMealService
    {
        public PlannerMealService(RekbooContext context, IMapper mapper) : base(context, mapper)
        {
            //add filter implementirati
        }
    }
}
