using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cloudAPILander.models
{
    public class Planes
    {
        public int id { get; set; }
        public string manufacturer { get; set; }
        public string type { get; set; }
        public int range { get; set; }
        public int seats { get; set; }
        public double length { get; set; }
        public double height { get; set; }
        public double wingspan { get; set; }
    }
}
