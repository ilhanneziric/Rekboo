﻿using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services
{
    public interface IPlannerMealService : ICRUDService<PlannerMeal, PlannerMealSearchObject, PlannerMealUpsertRequest, PlannerMealUpsertRequest>
    {
    }
}
