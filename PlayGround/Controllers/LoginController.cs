using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlayGround.Context;
using PlayGround.Models;

namespace PlayGround.Controllers
{
    [Produces("application/json")]
    [Route("api/Login")]
    public class LoginController : Controller
    {
        private readonly PlayGroundContext _context;

        public LoginController(PlayGroundContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] User loginUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.users.SingleOrDefaultAsync(m => m.Account == loginUser.Account);

            if (!PasswordCorrect(user.Account, user.Password))
            {
                return Ok("Your Password Is Not Valid");
            }

            if (user == null)
            {
                return NotFound();
            }

            

            return Ok(user.Token);

        }

        private bool PasswordCorrect(string account, string password)
        {
            var result = _context.users.FirstOrDefaultAsync(x => x.Password == password && x.Account == account);
            if(result == null)
            {
                return false;
            }
            return true;
        }

    }
}
