using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rekboo.Services.Migrations
{
    /// <inheritdoc />
    public partial class AddTagsToPlanner : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string[]>(
                name: "Tags",
                table: "Planners",
                type: "text[]",
                nullable: false,
                defaultValue: new string[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tags",
                table: "Planners");
        }
    }
}
