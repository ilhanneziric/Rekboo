using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;

namespace Rekboo.Services
{
    public interface IPlannerMealService : ICRUDService<PlannerMeal, PlannerMealSearchObject, PlannerMealUpsertRequest, PlannerMealUpsertRequest>
    {
    }
}
