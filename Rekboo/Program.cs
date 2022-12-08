using Microsoft.EntityFrameworkCore;
using Rekboo.Services;
using Rekboo.Services.Database;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddTransient<IMealService, MealService>();
builder.Services.AddTransient<IPlannerMealService, PlannerMealService>();
builder.Services.AddTransient<IPlannerService, PlannerService>();

builder.Services.AddAutoMapper(typeof(IUserService));

builder.Services.AddDbContext<RekbooContext>(
    o => o.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
