using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Subjects()
        {
            ViewBag.Message = "Your Subjects.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Course()
        {
            ViewBag.Message = "Your course page.";

            return View();
        }

        public ActionResult Grades()
        {
            ViewBag.Message = "Your Grades page.";

            return View();
        }

        public ActionResult Student()
        {
            ViewBag.Message = "Your Students page.";

            return View();
        }


    }
}