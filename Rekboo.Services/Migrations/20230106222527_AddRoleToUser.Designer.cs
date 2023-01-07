﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Rekboo.Services.Database;

#nullable disable

namespace Rekboo.Services.Migrations
{
    [DbContext(typeof(RekbooContext))]
    [Migration("20230106222527_AddRoleToUser")]
    partial class AddRoleToUser
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseSerialColumns(modelBuilder);

            modelBuilder.Entity("Rekboo.Services.Database.Meal", b =>
                {
                    b.Property<int>("MealID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseSerialColumn(b.Property<int>("MealID"));

                    b.Property<int>("Calories")
                        .HasColumnType("integer");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("MealID");

                    b.ToTable("Meals");
                });

            modelBuilder.Entity("Rekboo.Services.Database.Planner", b =>
                {
                    b.Property<int>("PlannerID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseSerialColumn(b.Property<int>("PlannerID"));

                    b.Property<int>("NumberOfPeople")
                        .HasColumnType("integer");

                    b.Property<int>("NumberOfRecipes")
                        .HasColumnType("integer");

                    b.Property<int>("UserID")
                        .HasColumnType("integer");

                    b.HasKey("PlannerID");

                    b.HasIndex("UserID");

                    b.ToTable("Planners");
                });

            modelBuilder.Entity("Rekboo.Services.Database.PlannerMeal", b =>
                {
                    b.Property<int>("PlannerMealID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseSerialColumn(b.Property<int>("PlannerMealID"));

                    b.Property<int>("MealID")
                        .HasColumnType("integer");

                    b.Property<int>("PlannerID")
                        .HasColumnType("integer");

                    b.HasKey("PlannerMealID");

                    b.HasIndex("PlannerID");

                    b.ToTable("PlannerMeals");
                });

            modelBuilder.Entity("Rekboo.Services.Database.User", b =>
                {
                    b.Property<int>("UserID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseSerialColumn(b.Property<int>("UserID"));

                    b.Property<string>("Address")
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .HasColumnType("text");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("UserID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Rekboo.Services.Database.Planner", b =>
                {
                    b.HasOne("Rekboo.Services.Database.User", "User")
                        .WithMany("Planners")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Rekboo.Services.Database.PlannerMeal", b =>
                {
                    b.HasOne("Rekboo.Services.Database.Meal", "Meal")
                        .WithMany("Planners")
                        .HasForeignKey("PlannerID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Rekboo.Services.Database.Planner", "Planner")
                        .WithMany("Meals")
                        .HasForeignKey("PlannerID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Meal");

                    b.Navigation("Planner");
                });

            modelBuilder.Entity("Rekboo.Services.Database.Meal", b =>
                {
                    b.Navigation("Planners");
                });

            modelBuilder.Entity("Rekboo.Services.Database.Planner", b =>
                {
                    b.Navigation("Meals");
                });

            modelBuilder.Entity("Rekboo.Services.Database.User", b =>
                {
                    b.Navigation("Planners");
                });
#pragma warning restore 612, 618
        }
    }
}
