using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Data;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentContext _context;
        public StudentController(StudentContext context)
        {
            _context = context;
        }

        [EnableCors("AllowAllHeaders")]
        [HttpGet]
        public async Task<ActionResult<List<Student>>> ReadData()
        {
            return Ok(await _context.students.ToListAsync());
        }

        [EnableCors("AllowAllHeaders")]
        [HttpPost]
        public async Task<ActionResult<List<Student>>> CreateData(Student obj)
        {
            _context.students.Add(obj);
            await _context.SaveChangesAsync();
            return Ok(await _context.students.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Student>>> UpdateData(Student obj)
        {
            var student = await _context.students.FindAsync(obj.Id);
            if (student == null)
                return BadRequest("Data not found");
            student.name = obj.name;
            student.course = obj.course;
            await _context.SaveChangesAsync();
            return Ok(await _context.students.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Student>>> DeleteData(int id)
        {
            var student = await _context.students.FindAsync(id);
            if (student == null)
                return BadRequest("Data not found");
            _context.students.Remove(student);
            await _context.SaveChangesAsync();
            return Ok(await _context.students.ToListAsync());
        }

    }
}
