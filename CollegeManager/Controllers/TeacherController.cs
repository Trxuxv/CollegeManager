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

            using ( var db = new Database())
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
                using (var db = new Database())
                {
                    db.Teachers.Add(teacher);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult UpdateTeacher(Teacher teacher)
        {
            using (var db = new Database()) 
            {
                var teacherUpdated = db.Teachers.Find(teacher.TeacherId);

                if (teacherUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    teacherUpdated.Name = teacher.Name;
                    teacherUpdated.Birthday = teacher.Birthday;
                    teacherUpdated.Salary = teacher.Salary;

                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        [HttpPost]
        public JsonResult DeleteTeacher(int id)
        {
            using (var db = new Database())
            {
                var teacher = db.Teachers.Find(id);
                if (teacher == null)
                {
                    return Json(new { success = false });
                }

                db.Teachers.Remove(teacher);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}