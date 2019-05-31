using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace cloudAPILander.models
{
    public class dbinitializer
    {
        public static void Initialize(PlaneContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            //Are there already books present ?
            if (!context.Planes.Any())
            {
                var plane = new Planes()
                {
                    manufacturer = "Airbus",
                    type = "A350-900",
                    range = 15000,
                    seats = 350,
                    length = 66.8,
                    height = 17.05,
                    wingspan = 64.75
                };

                var plane2 = new Planes()
                {
                    manufacturer = "Airbus",
                    type = "A330-900",
                    range = 13334,
                    seats = 300,
                    length = 63.66,
                    height = 16.79,
                    wingspan = 64
                };

                context.Planes.Add(plane);
                context.Planes.Add(plane2);
                context.SaveChanges();
            }
        }
    }
}
