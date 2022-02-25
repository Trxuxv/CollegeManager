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
            name: "Guide",
            url: "guide/index",
            defaults: new { controller = "Guide", action = "Index" }
            );

            routes.MapRoute(
            name: "Dashboard",
            url: "dashboard/index",
            defaults: new { controller = "Dashboard", action = "Index" }
            );
        }
    }
}
