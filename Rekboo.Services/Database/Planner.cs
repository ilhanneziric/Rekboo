using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services.Database
{
    public partial class Planner
    {
        public int PlannerID { get; set; }
        public int NumberOfPeople{ get; set; }
        public int NumberOfRecipes{ get; set; }
        public string[] Tags { get; set; } = null!;
        public int UserID { get; set; }
        public virtual User User { get; set; } = null!;

        public virtual ICollection<PlannerMeal>? Meals { get; set; }


    }
}
