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
        public List<Planes> GetPlanes(string manu, string type, int? page , string sort, int length = 2, string dir = "asc")
        {
            IQueryable<Planes> query = _context.Planes;
            if (!string.IsNullOrWhiteSpace(manu))
                query = query.Where(m => m.manufacturer == manu);
            if (!string.IsNullOrWhiteSpace(type))
                query = query.Where(l => l.type == type);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "seats":
                        if (dir == "asc")
                            query = query.OrderBy(m => m.seats);
                        else if (dir == "desc")
                            query = query.OrderByDescending(m => m.seats);
                        break;
                    case "wingspan":
                        if (dir == "asc")
                            query = query.OrderBy(o => o.wingspan);
                        else if (dir == "desc")
                            query = query.OrderByDescending(o => o.wingspan);
                        break;
                }
            }

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);


            return query.ToList();



        }

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