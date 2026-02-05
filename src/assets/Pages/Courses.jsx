import { useState } from "react";


function Courses() {
  const courses = [
    {
      id: 1,
      title: "React.js Fundamentals",
      category: "web",
      image: "/react-course.png",
      description:
        "Master the basics of React with hands-on projects and real-world examples.",
    },
    {
      id: 2,
      title: "Advanced TypeScript",
      category: "web",
      image: "/typescript-course.jpg",
      description:
        "Deep dive into TypeScript advanced features and best practices.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "mobile",
      image: "/mobile-app-development.png",
      description:
        "Build native mobile apps with React Native from scratch.",
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      category: "ai",
      image: "/ai-machine-learning.jpg",
      description:
        "Introduction to AI and ML algorithms with practical implementations.",
    },
    {
      id: 5,
      title: "Data Science 101",
      category: "data",
      image: "/data-science-concept.png",
      description:
        "Learn data analysis and visualization with Python and popular libraries.",
    },
    {
      id: 6,
      title: "Web Design Mastery",
      category: "web",
      image: "/web-design.jpg",
      description:
        "Create beautiful and functional websites with modern design principles.",
    },
  ];

  const categories = ["all", "web", "mobile", "ai", "data"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="courses-container">
      <div className="page-info">
        <h2>Explore Courses</h2>
        <p>Learn new skills from industry experts</p>
      </div>

      <div className="cate-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn-cat ${selectedCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="card-img">
                <img src={course.image} alt={course.title} />
                <span className="badge">
                  {course.category}
                </span>
              </div>

              <div className="card-body">
                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <div className="card-footer">
                  <span className="rating">⭐ 4.8</span>
                  <button className="btn-enroll">Enroll</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="empty">No courses found 🚫</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
