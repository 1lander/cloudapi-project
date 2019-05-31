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
        public List<Planes> GetPlanes()
        {
            return _context.Planes.ToList();
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
        public ActionResult<Planes> UpdatePlane([FromBody]Planes Author)
        {
            _context.Planes.Update(Author);
            _context.SaveChanges();
            return Created("", Author);
        }

        //een resource kan worden aangemaakt
        [HttpPost]
        public ActionResult<Planes> AddPlane([FromBody]Planes planes)
        {
            _context.Planes.Add(planes);
            _context.SaveChanges();
            return Created("", planes);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}