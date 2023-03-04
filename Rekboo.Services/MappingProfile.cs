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
            CreateMap<Database.Meal, Model.Meal>()
                .ForMember<string>(desti => desti.Photo1, source => source.MapFrom(m => Convert.ToBase64String(m.Photo1)))
                .ForMember<string>(desti => desti.Photo2, source => source.MapFrom(m => Convert.ToBase64String(m.Photo2)));
            CreateMap<Database.PlannerMeal, Model.PlannerMeal>();
            CreateMap<Database.PlannerMeal, Model.Meal>()
                .ForMember(d => d.MealID, opt => opt.MapFrom(s => s.MealID));
            CreateMap<Database.Planner, Model.Planner>()
                .ForMember(des => des.Meals, opt => opt.MapFrom(x => x.Meals.Select(x => x.Meal.Name)));

            CreateMap<UserInsertRequest, Database.User>();
            CreateMap<UserUpdateRequest, Database.User>();
            CreateMap<MealUpsertRequest, Database.Meal>()
                .ForMember<byte[]>(desti => desti.Photo1, source => source.MapFrom(m => Convert.FromBase64String(m.Photo1)))
                .ForMember<byte[]>(desti => desti.Photo2, source => source.MapFrom(m => Convert.FromBase64String(m.Photo2)));
            CreateMap<PlannerMealUpsertRequest, Database.PlannerMeal>();
            CreateMap<PlannerUpsertRequest, Database.Planner>();

            //CreateMap<MealUpsertRequest, Database.Meal>()
            //.ConvertUsing((source, existing, context) =>
            //{
            //    // If existing is not null, the user called .Map() with an existing
            //    // destination instance, which should be filled.
            //    var dest = existing ?? new Database.Meal();

            //    // Call special method to fill dest instance.
            //    dest.Photo1 = Convert.ToBase64String(source.Photo1);
            //    //dest.photo2(System.Convert.ToBase64String(source.Photo2));

            //    // if mapper is needed for other (nested) mappings, it can be used
            //    var id = context.Mapper.Map<string>(source.Id);
            //    dest.UpdateId(id);
            
            //    return dest;
            //});


            CreateMap<byte[], string>().ConvertUsing<ByteArrayToStringTypeConverter>();
            CreateMap<string, byte[]>().ConvertUsing<StringToByteArrayTypeConverter>();
        }
    }

    public class ByteArrayToStringTypeConverter : ITypeConverter<byte[], string>
    {
        public string Convert(byte[] source, string destination, ResolutionContext context)
        {
            return System.Convert.ToBase64String(source);
        }
    }

    public class StringToByteArrayTypeConverter : ITypeConverter<string, byte[]>
    {
        public byte[] Convert(string source, byte[] destination, ResolutionContext context)
        {
            return System.Convert.FromBase64String(source);
        }
    }
}
