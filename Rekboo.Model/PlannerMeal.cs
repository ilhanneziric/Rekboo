using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model
{
    public class PlannerMeal
    {
        public int PlannerMealID { get; set; }
        public int PlannerID { get; set; }
        public Planner? Planner { get; set; }
        public int MealID { get; set; }
        public Meal? Meal { get; set; }
    }
}
