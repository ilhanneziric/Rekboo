using Microsoft.AspNetCore.Mvc;
using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services;

namespace Rekboo.Controllers
{
    public class MealController : BaseCRUDController<Meal, MealSearchObject, MealUpsertRequest, MealUpsertRequest>
    {
        public readonly IMealService _mealService;        
        public MealController(IMealService mealService) : base(mealService)
        {
            _mealService = mealService; 
        }

        [HttpGet("/api/Meal/tags")]
        public IActionResult GetCachedTags()
        {
            return Ok(_mealService.GetTags());
        }
    }
}
