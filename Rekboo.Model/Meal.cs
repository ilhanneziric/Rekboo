﻿
namespace Rekboo.Model
{
    public class Meal
    {
        public int MealID { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int Calories { get; set; }
        public int Time { get; set; }
        public bool Active { get; set; }
        public string Photo1 { get; set; } = null!;
        public string Photo2 { get; set; } = null!;
        public string[] Tags { get; set; } = null!;

    }
}
