using Dapper;
using ENITY_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ENITY_API.Controllers
{
    [Route("api/Users/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("{myEmail}")]
        public async Task<User> GetUserData(string myEmail)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var  user = await connection.QueryFirstAsync<User>("select * from users where email=@email", new { email = myEmail });
            return user;
        }

        [HttpGet("dailyregister")]
        public async Task<ActionResult> GetDailyRegister()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var st = await connection.QueryAsync("select convert(varchar(10),registerdate, 120) as postdate, count(*) as no from users group by registerdate");
            return Ok(st);
        }

        [HttpPost]
        public async Task<ActionResult> CreateUserData(User req)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var resp = await connection.ExecuteAsync("insert into users (email,password,registerdate) values (@email,@password,@registerdate)", req);
            return Ok(resp);
        }
    }
}
