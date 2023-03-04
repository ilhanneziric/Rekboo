using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rekboo.Services.Migrations
{
    /// <inheritdoc />
    public partial class ChangedFKPlannerMeal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PlannerMeals_Meals_PlannerID",
                table: "PlannerMeals");

            migrationBuilder.CreateIndex(
                name: "IX_PlannerMeals_MealID",
                table: "PlannerMeals",
                column: "MealID");

            migrationBuilder.AddForeignKey(
                name: "FK_PlannerMeals_Meals_MealID",
                table: "PlannerMeals",
                column: "MealID",
                principalTable: "Meals",
                principalColumn: "MealID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PlannerMeals_Meals_MealID",
                table: "PlannerMeals");

            migrationBuilder.DropIndex(
                name: "IX_PlannerMeals_MealID",
                table: "PlannerMeals");

            migrationBuilder.AddForeignKey(
                name: "FK_PlannerMeals_Meals_PlannerID",
                table: "PlannerMeals",
                column: "PlannerID",
                principalTable: "Meals",
                principalColumn: "MealID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
