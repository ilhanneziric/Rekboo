using Microsoft.AspNetCore.Authorization;
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

        [AllowAnonymous]
        [HttpGet("/api/Meal/tags")]
        public IActionResult GetCachedTags()
        {
            return Ok(_mealService.GetTags());
        }

        public override Task<Meal> Insert([FromForm] MealUpsertRequest insert)
        {
            return base.Insert(insert);
        }

        public override Task<Meal> Update(int id, [FromForm] MealUpsertRequest update)
        {
            return base.Update(id, update);
        }
    }
}
