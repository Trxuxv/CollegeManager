namespace CollegeManager.Models.CoursesModels
{
    public class CourseModel
    {
        public int CourseId { get; set; }
        public string Name { get; set; }
        public int Duration { get; set; }
        public string Category { get; set; }
        public string TeacherName { get; set; }
        public int TeacherId { get; set; }
        public int TeachersCount { get; set; }
        public int StudentsCount { get; set; }
    }
}