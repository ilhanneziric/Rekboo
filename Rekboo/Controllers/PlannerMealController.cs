using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services;

namespace Rekboo.Controllers
{
    public class PlannerMealController : BaseCRUDController<PlannerMeal, PlannerMealSearchObject, PlannerMealUpsertRequest, PlannerMealUpsertRequest>
    {

        public PlannerMealController(IPlannerMealService plannerMealService) : base(plannerMealService)
        {
        }
    }
}
