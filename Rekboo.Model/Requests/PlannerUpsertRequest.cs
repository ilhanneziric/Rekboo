using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model.Requests
{
    public class PlannerUpsertRequest
    {
        public int NumberOfPeople { get; set; }
        public int NumberOfRecipes { get; set; }
        public int UserID { get; set; }
        public string[] Tags { get; set; } = null!;
        public int[] MealIDs { get; set; } = null!;
    }
}
