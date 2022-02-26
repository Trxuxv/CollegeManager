using System.Web.Mvc;
using System.Web.Routing;

namespace CollegeManager
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
            name: "Teacher",
            url: "teacher/index",
            defaults: new { controller = "Teacher", action = "Index" }
            );

            routes.MapRoute(
            name: "Grade",
            url: "grade/index",
            defaults: new { controller = "Grade", action = "Index" }
           );

            routes.MapRoute(
            name: "Student",
            url: "student/index",
            defaults: new { controller = "Student", action = "Index" }
            );

            routes.MapRoute(
            name: "Subject",
            url: "subject/index",
            defaults: new { controller = "Subject", action = "Index" }
            );


            routes.MapRoute(
            name: "Course",
            url: "course/index",
            defaults: new { controller = "Course", action = "Index" }
            );

            routes.MapRoute(
            name: "Guide",
            url: "guide/index",
            defaults: new { controller = "Guide", action = "Index" }
            );

        }
    }
}