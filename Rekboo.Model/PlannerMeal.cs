﻿
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
