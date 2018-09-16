using Microsoft.EntityFrameworkCore;
using PlayGround.Models;
namespace PlayGround.Context
{
    public class PlayGroundContext : DbContext
    {
        public PlayGroundContext(DbContextOptions<PlayGroundContext> options) : base(options) { }
        public DbSet<Message> Messages { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
