using CollegeManager.Models;
using CollegeManager.Models.SubjectsModels;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace CollegeManager.Controllers
{
    public class SubjectController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetSubjects()
        {
            using (var db = new Database())
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
        public JsonResult AddSubject(Subject subject)
        {
            if (subject != null)
            {
                using (var db = new Database())
                {
                    db.Subjects.Add(subject);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public JsonResult UpdateSubject(Subject subject)
        {
            using (var db = new Database())
            {
                var subjectUpdated = db.Subjects.Find(subject.SubjectId);

                if (subjectUpdated == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    subjectUpdated.Name = subject.Name;
                    subjectUpdated.CourseId = subject.CourseId;

                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }
        }

        [HttpPost]
        public JsonResult DeleteSubject(int id)
        {
            using (var db = new Database())
            {
                var subject = db.Subjects.Find(id);
                if (subject == null)
                {
                    return Json(new { success = false });
                }

                db.Subjects.Remove(subject);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
    }
}