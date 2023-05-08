﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rekboo.Services
{
    public class MealService : BaseCRUDService<Model.Meal, Database.Meal, MealSearchObject, MealUpsertRequest, MealUpsertRequest>, IMealService
    {
        private readonly IMemoryCache _memoryCache;
        private readonly string _imageFolderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/Images");

        public MealService(RekbooContext context, IMapper mapper, IMemoryCache memoryCache) : base(context, mapper)
        {
            _memoryCache = memoryCache;
        }
        public override IQueryable<Meal> AddFilter(IQueryable<Meal> query, MealSearchObject search = null)
        {
            var filteredQuery = base.AddFilter(query, search);

            if (search?.Active != null)
            {
                filteredQuery = filteredQuery.Where(meal => meal.Active == search.Active);
            }

            if (search?.Tags?.Length != null)
            {
                filteredQuery = filteredQuery.Where(meal => meal.Tags.Any(tag => search.Tags.Contains(tag)));
            }

            return filteredQuery;
        }

        public override async void BeforeInsert(MealUpsertRequest insert, Meal entity)
        {
            string fileName1 = await UploadImageAsync(insert.Photo1);
            string fileName2 = await UploadImageAsync(insert.Photo2);

            entity.Photo1 = $"/Images/{fileName1}";
            entity.Photo2 = $"/Images/{fileName2}";
            base.BeforeInsert(insert, entity);
        }

        private async Task<string> UploadImageAsync(IFormFile image)
        {

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(image.FileName);
            var filePath = Path.Combine(_imageFolderPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            return fileName;
        }


        public IEnumerable<string> GetTags()
        {
            var cacheKey = "mealTags";

            if (!_memoryCache.TryGetValue(cacheKey, out IEnumerable<string> mealTags))
            {
                mealTags = new string[] { "MODERNO", "VEGETARIJANSKO", "VEGAN", /*"FITNESS",*/ "ZDRAVO", /*"AZIJSKA KUHINJA",*/ "AZIJSKO", "TRADICIONALNO", "MEDITERANSKO", "ORIJENTALNO" };

                var cacheExpiryOptions = new MemoryCacheEntryOptions
                {
                    AbsoluteExpiration = DateTime.Now.AddSeconds(50),
                    Priority = CacheItemPriority.High,
                    SlidingExpiration = TimeSpan.FromSeconds(20)
                };

                _memoryCache.Set(cacheKey, mealTags, cacheExpiryOptions);
            }
            return mealTags;
        }
    }
}
