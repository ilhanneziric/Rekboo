﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services.Database
{
    public partial class PlannerMeal
    {
        public int PlannerMealID { get; set; }
        public int PlannerID { get; set; }
        public virtual Planner Planner { get; set; } = null!;
        public int MealID { get; set; }
        public virtual Meal Meal { get; set; } = null!;
    }
}
