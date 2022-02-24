using CollegeManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class GradeController : Controller
    {
        // GET: Grade
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetGrades()
        {

            using (var db = new CollegeEntities())
            {
                var listGrades = new List<Grade>();

                try
                {
                    listGrades = db.Grades.ToList();

                }
                catch (System.Exception e)
                {

                    throw e;
                }

                return Json(listGrades, JsonRequestBehavior.AllowGet);
            }
        }
    }
}