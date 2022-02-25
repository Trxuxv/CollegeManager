using CollegeManager.Models;
using CollegeManager.Models.SubjectsModels;
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
            using (var db = new Entities())
            {
                var listSubjects = db.Subjects.Select(x => new SubjectModel
                {
                    SubjectId = x.SubjectId,
                    Name = x.Name,
                    CourseName = x.Course.Name,
                    CourseId = x.CourseId,
                    Approved = x.Approved
                }).ToList();

                return Json(listSubjects, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddTeacher(Teacher teacher)
        {
            if (teacher != null)
            {
                using (var db = new Entities())
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