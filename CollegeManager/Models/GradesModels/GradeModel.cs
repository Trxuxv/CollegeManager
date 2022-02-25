using System;

namespace CollegeManager.Models.GradesModels
{
    public class GradeModel
    {
        public int GradeId { get; set; }
        public int GradeDescription { get; set; }
        public Nullable<int> StudentId { get; set; }
        public string StudentName { get; set; }
        public Nullable<int> SubjectId { get; set; }
        public string SubjectName { get; set; }
        public Nullable<int> CourseId { get; set; }
        public string CourseName { get; set; }
        public string CourseNameTeacher { get; set; }
    }
}