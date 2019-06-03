using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cloudAPILander.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cloudAPILander.Controllers
{
    [Route("api/planes")]
    [ApiController]
    public class PlanesController : Controller
    {
        public PlaneContext _context { get; set; }
        public PlanesController(PlaneContext c)
        {
            _context = c;
        }

        //een resource lijst kan worden opgevraagd
        [HttpGet]
        public List<Planes> GetPlanes(string manu, string type, int? page, int length = 2)
        {
            IQueryable<Planes> query = _context.Planes;
            if (!string.IsNullOrWhiteSpace(manu))
                query = query.Where(m => m.manufacturer == manu);
            if (!string.IsNullOrWhiteSpace(type))
                query = query.Where(l => l.type == type);

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);


            return query.ToList();



        }

        /*[HttpGet]
        public List<Planes> GetPlanes()
        {
            return _context.Planes.ToList();
        }*/

        //1 specifieke resource (adhv. de ID) kan worden opgevraagd
        [Route("{id}")]
        [HttpGet]
        public ActionResult<Planes> GetPlane(int id)
        {
            var plane = _context.Planes.Find(id);
            if (plane == null)
                return NotFound();

            return plane;
        }

        //1 specifieke resource kan worden verwijderd id
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeletePlane(int id)
        {
            var plane = _context.Planes.Find(id);
            if (plane == null)
                return NotFound();

            _context.Planes.Remove(plane);
            _context.SaveChanges();
            return NoContent();
        }

        //een resource kan worden aangepast
        [HttpPut]
        public ActionResult<Planes> UpdatePlane([FromBody]Planes planes)
        {
            _context.Planes.Update(planes);
            _context.SaveChanges();
            return Created("", planes);
        }

        //een resource kan worden aangemaakt
        [HttpPost]
        public ActionResult<Planes> AddPlane([FromBody]Planes planes)
        {
            _context.Planes.Add(planes);
            _context.SaveChanges();
            return Created("", planes);
        }

        //Implementeer dat er kan worden gewerkt met een 'sort' (op minstens 1 attribuut)

        //implementeer dat er kan gefilterd worden (op minstens 1 attribuut)

        /*public IActionResult Index()
        {
            return View();
        }*/

        public async Task<IActionResult> Index(string sortOrder)
        {
            ViewData["TypeSortParm"] = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewData["ManufacturerSortParm"] = sortOrder == "Date" ? "date_desc" : "Date";
            var planes = from s in _context.Planes
                           select s;
            switch (sortOrder)
            {
                case "name_desc":
                    planes = planes.OrderByDescending(s => s.type);
                    break;
                case "Date":
                    planes = planes.OrderBy(s => s.manufacturer);
                    break;
                case "date_desc":
                    planes = planes.OrderByDescending(s => s.seats);
                    break;
                default:
                    planes = planes.OrderBy(s => s.range);
                    break;
            }
            return View(await planes.AsNoTracking().ToListAsync());
        }
    }
}