using Microsoft.EntityFrameworkCore;
using PlayGround.Models;
namespace PlayGround.Context
{
    public class PlayGroundContext : DbContext
    {
        public DbSet<Message> messages { get; set; }
        public PlayGroundContext(DbContextOptions<PlayGroundContext> options) :base(options) { }
    }
}
