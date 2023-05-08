
namespace Rekboo.Model
{
    public class Planner
    {
        public int PlannerID { get; set; }
        public int NumberOfPeople { get; set; }
        public int NumberOfRecipes { get; set; }
        public int UserID { get; set; }
        public virtual User? User { get; set; }
        public string[] Tags { get; set; } = null!;
        public virtual ICollection<string>? Meals { get; set; }
    }
}
