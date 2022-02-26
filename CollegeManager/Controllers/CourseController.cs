using CollegeManager.Models;
using System.Web.Mvc;
using System.Linq;
using CollegeManager.Models.CoursesModels;

namespace CollegeManager.Controllers
{
    public class CourseController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetCourse()
        {
            using (var db = new Database())
            {
                var teachers = db.Teachers.ToList();
                var studens = db.Students.ToList();

                var listCourses = db.Courses.Select(x => new CourseModel
                {
                    CourseId = x.CourseId,
                    Name = x.Name,
                    Category = x.Category,
                    Duration = x.Duration,
                    TeacherId = x.TeacherId,
                    TeacherName = x.Teacher.Name,
                    StudentsCount = x.Students.Count()
                }).ToList();

                return Json(listCourses, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddCourse(Course course)
        {
            if (course != null)
            {
                using (var db = new Database())
                {
                    db.Courses.Add(course);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult UpdateCourse(Course course)
        {
            using (var db = new Database())
            {
                var courseUpdated = db.Courses.Find(course.CourseId);

                if (courseUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    courseUpdated.Name = course.Name;
                    courseUpdated.Duration = course.Duration;
                    courseUpdated.Category = course.Category;
                    courseUpdated.TeacherId = course.TeacherId;

                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        [HttpPost]
        public JsonResult DeleCourse(int id)
        {
            using (var db = new Database())
            {
                var course = db.Courses.Find(id);
                if (course == null)
                {
                    return Json(new { success = false });
                }

                db.Courses.Remove(course);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}