using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;

namespace Rekboo.Services
{
    public interface IMealService : ICRUDService<Meal, MealSearchObject, MealUpsertRequest, MealUpsertRequest>
    {
        IEnumerable<string> GetTags(); 
    }
}
