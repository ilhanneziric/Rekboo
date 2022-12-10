using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services.Database
{
    public partial class Meal
    {
        public int MealID { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int Calories { get; set; }

        //photo
        //tags/preferences

        public virtual ICollection<PlannerMeal>? Planners { get; set; }
    }
}
