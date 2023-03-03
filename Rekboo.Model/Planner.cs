using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model
{
    public class Planner
    {
        public int PlannerID { get; set; }
        public int NumberOfPeople { get; set; }
        public int NumberOfRecipes { get; set; }
        public int UserID { get; set; }
        public string[] Tags { get; set; } = null!;
    }
}
