using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model.SearchObjects
{
    public class PlannerSearchObject : BaseSearchObject
    {
        public int NumberOfPeople { get; set; }
        public int NumberOfRecipes { get; set; }
        public int UserID { get; set; }
    }
}
