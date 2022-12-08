using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services;

namespace Rekboo.Controllers
{
    public class MealController : BaseCRUDController<Meal, MealSearchObject, MealUpsertRequest, MealUpsertRequest>
    {

        public MealController(IMealService mealService) : base(mealService)
        {
        }
    }
}
