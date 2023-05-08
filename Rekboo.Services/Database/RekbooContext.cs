using Microsoft.EntityFrameworkCore;

namespace Rekboo.Services.Database
{
    public partial class RekbooContext : DbContext
    {
        public RekbooContext(DbContextOptions<RekbooContext> options) :base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();

            modelBuilder.Entity<Planner>().HasOne(i => i.User).WithMany(u => u.Planners).HasForeignKey(p => p.UserID);
            modelBuilder.Entity<PlannerMeal>().HasOne(pm => pm.Planner).WithMany(p => p.Meals).HasForeignKey(pm => pm.PlannerID);
            modelBuilder.Entity<PlannerMeal>().HasOne(pm => pm.Meal).WithMany(p => p.Planners).HasForeignKey(pm => pm.MealID);
        }

        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Meal> Meals { get; set; } = null!;
        public DbSet<Planner> Planners { get; set; } = null!;
        public DbSet<PlannerMeal> PlannerMeals{ get; set; } = null!;
    }
}
