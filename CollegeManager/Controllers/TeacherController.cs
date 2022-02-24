using System.Collections.Generic;
using CollegeManager.Models;
using System.Web.Mvc;
using System.Linq;

namespace CollegeManager.Controllers
{
    public class TeacherController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetTeachers()
        {

            using ( var db = new CollegeManagerEntities())
            {
                var listTeachers = new List<Teacher>();

                try
                {
                    listTeachers = db.Teachers.ToList();

                }
                catch (System.Exception e)
                {

                    throw e;
                }

                return Json(listTeachers, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddTeacher(Teacher teacher)
        {
            if (teacher != null)
            {
                using (var db = new CollegeManagerEntities())
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