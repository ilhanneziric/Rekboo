using AutoMapper;
using Microsoft.AspNetCore.Http;
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
            CreateMap<Database.PlannerMeal, Model.Meal>()
                .ForMember(d => d.MealID, opt => opt.MapFrom(s => s.MealID));
            CreateMap<Database.Planner, Model.Planner>();
            CreateMap<Database.Planner, Model.Planner>()
                .ForMember(des => des.Meals, opt => opt.MapFrom(x => x.Meals.Select(x => x.Meal.Name)));

            CreateMap<UserInsertRequest, Database.User>();
            CreateMap<UserUpdateRequest, Database.User>();

            CreateMap<MealUpsertRequest, Database.Meal>()
            .ForMember<string>(desti => desti.Photo1, source => source.Ignore())
            .ForMember<string>(desti => desti.Photo2, source => source.Ignore());

            CreateMap<PlannerMealUpsertRequest, Database.PlannerMeal>();
            CreateMap<PlannerUpsertRequest, Database.Planner>();

        }
    }
}
