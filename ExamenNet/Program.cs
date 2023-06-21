using Microsoft.EntityFrameworkCore;
using Data;
using Buisness.TiendaServices;
using Buisness.ArticuloServices;
using Buisness.CienteServices;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
// Add services to the container.
// Add services to the container.
builder.Services.AddDbContext<ShopContext>((
        options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("ProductDB"))
            )
);

builder.Services.AddTransient<IArticuloServices, ArticuloServices>();
builder.Services.AddTransient<IClienteServices, ClienteServices>();
builder.Services.AddTransient<ITiendaServices, TiendaServices>();

const string corsAllowAll = "AllowAll";

// Add CORS



builder.Services.AddCors(p => p.AddPolicy(corsAllowAll, builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));




var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();



app.MapControllers();

app.UseCors(corsAllowAll);

app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
    RequestPath = new PathString("/Resources")
});

app.UseAuthorization();

app.Run();


