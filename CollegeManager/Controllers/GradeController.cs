using CollegeManager.Models.GradesModels;
using CollegeManager.Models;
using System.Web.Mvc;
using System.Linq;

namespace CollegeManager.Controllers
{
    public class GradeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetGrades()
        {
            using (var db = new Database())
            {
                var listGrades = db.Grades.Select(x => new GradeModel
                {
                    GradeId = x.GradeId,
                    GradeDescription = x.GradeDescription,
                    StudentId = x.StudentId,
                    StudentName = x.Student.Name,
                    CourseId = x.CourseId,
                    CourseName = x.Course.Name,
                    CourseNameTeacher = x.Course.Teacher.Name,
                    SubjectId = x.SubjectId,
                    SubjectName = x.Subject.Name
                }).ToList();

                return Json(listGrades, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddGrade(Grade grade)
        {
            if (grade != null)
            {
                using (var db = new Database())
                {
                    db.Grades.Add(grade);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult UpdateGrade(Grade grade)
        {
            using (var db = new Database())
            {
                var gradeUpdated = db.Grades.Find(grade.GradeId);

                if (gradeUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    gradeUpdated.GradeDescription = grade.GradeDescription;
                    gradeUpdated.StudentId = grade.StudentId;
                    gradeUpdated.SubjectId = grade.SubjectId;

                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        [HttpPost]
        public JsonResult DeleteGrade(int id)
        {
            using (var db = new Database())
            {
                var grade = db.Grades.Find(id);
                if (grade == null)
                {
                    return Json(new { success = false });
                }

                db.Grades.Remove(grade);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}