using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Model.Requests
{
    public class MealUpsertRequest
    {
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
    }
}
