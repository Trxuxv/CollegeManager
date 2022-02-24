using CollegeManager.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class SubjectController : Controller
    {
        // GET: Subject
        public ActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public JsonResult GetSubjects()
        {

            using (var db = new CollegeEntities())
            {
                var listSubjects = new List<Subject>();

                try
                {
                    listSubjects = db.Subjects.ToList();

                }
                catch (System.Exception e)
                {

                    throw e;
                }

                return Json(listSubjects, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddTeacher(Teacher teacher)
        {
            if (teacher != null)
            {
                using (var db = new CollegeEntities())
                {
                    db.Teachers.Add(teacher);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

    }
}