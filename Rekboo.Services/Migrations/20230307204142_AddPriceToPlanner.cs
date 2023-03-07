using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rekboo.Services.Migrations
{
    /// <inheritdoc />
    public partial class AddPriceToPlanner : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Price",
                table: "Planners",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price",
                table: "Planners");
        }
    }
}
