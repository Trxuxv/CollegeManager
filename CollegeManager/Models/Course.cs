namespace CollegeManager.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    public partial class Course
    {
        public Course()
        {
            this.Students = new HashSet<Student>();
        }
    
        public int CourseId { get; set; }
        public string Name { get; set; }
        public int Duration { get; set; }
        public string Category { get; set; }

        [ForeignKey("TeacherId")]
        public int TeacherId { get; set; }
        public virtual Teacher Teacher { get; set; }
        public virtual ICollection<Student> Students { get; set; }
    }
}
