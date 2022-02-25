using CollegeManager.Models;
using System.Web.Mvc;
using System.Linq;
using CollegeManager.Models.CoursesModels;

namespace CollegeManager.Controllers
{
    public class CourseController : Controller
    {
        public JsonResult GetCourse()
        {
            using (var db = new CollegeEntities())
            {
                var listCourses = db.Courses.Select(x => new CourseModel
                {
                    CourseId = x.CourseId,
                    Name = x.Name,
                    Category = x.Category,
                    Duration = x.Duration,
                    TeacherId = x.TeacherId,
                    TeacherName = x.Teacher.Name
                }).ToList();

                return Json(listCourses, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult AddCourse(Course course)
        {
            if (course != null)
            {
                using (var db = new CollegeEntities())
                {
                    db.Courses.Add(course);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult UpdateCourse(Course funcionario)
        {
            using (var db = new CollegeEntities())
            {
                var funcionarioAtualizado = db.Courses.Find(funcionario.CourseId);

                if (funcionarioAtualizado == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    funcionarioAtualizado.Name = funcionario.Name;
                    //funcionarioAtualizado.Departamento = funcionario.Departamento;
                    //funcionarioAtualizado.Cargo = funcionario.Cargo;
                    //funcionarioAtualizado.Email = funcionario.Email;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }

        [HttpPost]
        public JsonResult DeleCourse(int id)
        {
            using (var db = new CollegeEntities())
            {
                var funcionario = db.Courses.Find(id);
                if (funcionario == null)
                {
                    return Json(new { success = false });
                }

                db.Courses.Remove(funcionario);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}