using Microsoft.EntityFrameworkCore;

namespace cloudAPILander.models
{
    public class PlaneContext: DbContext
    {
        public PlaneContext(DbContextOptions<PlaneContext> options)
                                    : base(options)
        {

        }
        public DbSet<Planes> Planes { get; set; }
    }
}