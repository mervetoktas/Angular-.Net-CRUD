using CRUD_API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUD_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userController : ControllerBase
    {
        private readonly DataContext _context;
        public userController(DataContext context) 
        { 
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<User>>> getUsers()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> createUser(User newUser)
        {
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>> updateUser(User updateUser)
        {
            var dbUser = await _context.Users.FindAsync(updateUser.Id);
            if (dbUser == null)
            {
                return BadRequest("User not found.");
            }

            dbUser.UserName = updateUser.UserName;
            dbUser.FirstName = updateUser.FirstName;
            dbUser.LastName = updateUser.LastName;
            dbUser.Level = updateUser.Level;
            dbUser.Experience = updateUser.Experience;

            await _context.SaveChangesAsync(); 

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<User>>> deleteUser(int id)
        {
            var dbUser = await _context.Users.FindAsync(id);
            if (dbUser == null)
            {
                return BadRequest("User not found.");
            }

            _context.Users.Remove(dbUser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
    }
}
