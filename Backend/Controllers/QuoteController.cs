using Dapper;
using ENITY_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ENITY_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuoteController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public QuoteController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<List<Quote>>> GetAllQuoteData()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var st = await connection.QueryAsync<Quote>("select * from quote order by  postdate desc,posttime desc");
            return Ok(st);
        }

        [HttpGet("dailycount")]
        public async Task<ActionResult> GetDailycount()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var st = await connection.QueryAsync("select convert(varchar(10),postdate, 120) as postdate, count(*) as no from quote group by postdate");
            return Ok(st);
        }

        [HttpGet("dailyactive")]
        public async Task<ActionResult> GetDailyActive()
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var st = await connection.QueryAsync("select convert(varchar(10),postdate, 120) as postdate, count(distinct(email)) as no from quote group by postdate");
            return Ok(st);
        }


        [HttpGet("{date}")]
        public async Task<ActionResult<List<Quote>>> GetDateDate(string date)
        {
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var st = await connection.QueryAsync<Quote>("select * from quote where postdate="+date);
            return Ok(st);
        }

        [HttpPost]
        public async Task<ActionResult> CreateQuoteData(Quote req)
        {   
            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var st = await connection.ExecuteAsync("insert into quote (email,textd,postdate,posttime) values (@email,@textd,@postdate,@posttime)", req);
            return Ok(st);
        }
    }
}
