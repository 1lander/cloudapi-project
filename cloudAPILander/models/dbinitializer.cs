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

                var plane3 = new Planes()
                {
                    manufacturer = "Boeing",
                    type = "737 MAX 10",
                    range = 6110,
                    seats = 230,
                    length = 43.8,
                    height = 12.3,
                    wingspan = 35.9
                };

                var plane4 = new Planes()
                {
                    manufacturer = "Boeing",
                    type = "747-8",
                    range = 14816,
                    seats = 410,
                    length = 76.3,
                    height = 19.4,
                    wingspan = 68.4
                };

                var plane5 = new Planes()
                {
                    manufacturer = "Boeing",
                    type = "787-10",
                    range = 11910,
                    seats = 330,
                    length = 68,
                    height = 17,
                    wingspan = 68.4
                };

                var plane6 = new Planes()
                {
                    manufacturer = "Boeing",
                    type = "777-300ER",
                    range = 11910,
                    seats = 396,
                    length = 73.9,
                    height = 18.5,
                    wingspan = 64.8
                };

                context.Planes.Add(plane);
                context.Planes.Add(plane2);
                context.Planes.Add(plane3);
                context.Planes.Add(plane4);
                context.Planes.Add(plane5);
                context.Planes.Add(plane6);
                context.SaveChanges();
            }
        }
    }
}
