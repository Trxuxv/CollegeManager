using CollegeManager.Models.StudentsModels;
using CollegeManager.Models;
using System.Web.Mvc;
using System.Linq;

namespace CollegeManager.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetStudents()
        {
            using (var db = new Database())
            {
                var listStudents = db.Students.Select(x => new StudentModel
                {
                    StudentId = x.StudentId,
                    Name = x.Name,
                    CourseName = x.Course.Name,
                    CourseId = x.CourseId,
                    Birthday = x.Birthday,
                    RgNumber = x.RgNumber
                }).ToList();

                return Json(listStudents, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddStudent(Student student)
        {
            if (student != null)
            {
                using (var db = new Database())
                {
                    db.Students.Add(student);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult UpdateStudent(Student student)
        {
            using (var db = new Database())
            {
                var studentUpdated = db.Students.Find(student.StudentId);

                if (studentUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    studentUpdated.Name = student.Name;
                    studentUpdated.Birthday = student.Birthday;
                    studentUpdated.CourseId = student.CourseId;
                    studentUpdated.RgNumber = student.RgNumber;

                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        [HttpPost]
        public JsonResult DeleteStudent(int id)
        {
            using (var db = new Database())
            {
                var student = db.Students.Find(id);
                if (student == null)
                {
                    return Json(new { success = false });
                }

                db.Students.Remove(student);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}