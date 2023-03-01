using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rekboo.Services.Migrations
{
    /// <inheritdoc />
    public partial class AddedTimeToMeal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Time",
                table: "Meals",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Time",
                table: "Meals");
        }
    }
}
