using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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

            if (await IsLoginSuccess(loginUser))
            {
                loginUser.Token = "888";
                return Ok(loginUser);
            }
            return NoContent();
        }

        private async Task<bool> IsLoginSuccess(User user)
        {
            user.Password = AddSault(user.Password);

            var result = await _context.Users.FirstOrDefaultAsync(x => x.Password == user.Password && x.Account == user.Account);
            if (result == null)
            {
                return false;
            }
            return true;
        }

        private string AddSault(string password)
        {
            return password;
        }

    }
}
