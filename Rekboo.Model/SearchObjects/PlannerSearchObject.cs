
namespace Rekboo.Model.SearchObjects
{
    public class PlannerSearchObject : BaseSearchObject
    {
        public int? NumberOfPeople { get; set; }
        public int? NumberOfRecipes { get; set; }
        public int? UserID { get; set; }
        public string[]? Tags { get; set; }
    }
}
