using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model.SearchObjects
{
    public class MealSearchObject : BaseSearchObject
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int Calories { get; set; }
        public bool Active { get; set; }
        public string[]? Tags { get; set; }
    }
}
