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
        public bool Active { get; set; }
        public byte[] Photo1 { get; set; } = null!;
        public byte[] Photo2 { get; set; } = null!;

        //tags/preferences

        public virtual ICollection<PlannerMeal>? Planners { get; set; }
    }
}
