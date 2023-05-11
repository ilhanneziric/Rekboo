
namespace Rekboo.Services.Database
{
    public partial class Meal
    {
        public int MealID { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int Calories { get; set; }
        public int Time { get; set; } 
        public bool Active { get; set; }
        public string? Photo1 { get; set; }
        public string? Photo2 { get; set; }
        public string[] Tags { get; set; } = null!;

        public virtual ICollection<PlannerMeal>? Planners { get; set; }
    }
}
