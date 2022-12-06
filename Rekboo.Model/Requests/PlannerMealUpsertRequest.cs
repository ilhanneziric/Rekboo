using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model.Requests
{
    public class PlannerMealUpsertRequest
    {
        public int PlannerID { get; set; }
        public int MealID { get; set; }
    }
}
