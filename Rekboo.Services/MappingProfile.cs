using AutoMapper;
using Rekboo.Model.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {
            CreateMap<Database.User, Model.User>();
            CreateMap<Database.Meal, Model.Meal>();
            CreateMap<Database.PlannerMeal, Model.PlannerMeal>();
            CreateMap<Database.Planner, Model.Planner>();

            CreateMap<UserInsertRequest, Database.User>();
            CreateMap<UserUpdateRequest, Database.User>();
            CreateMap<MealUpsertRequest, Database.Meal>();
            CreateMap<PlannerMealUpsertRequest, Database.PlannerMeal>();
            CreateMap<PlannerUpsertRequest, Database.Planner>();
        }
    }
}
