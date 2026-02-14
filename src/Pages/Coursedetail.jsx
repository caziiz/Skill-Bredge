
function Coursedetail({ course, setpage }) {
  return (
    <div className="course-page">

      {/* Back button */}
      <button className="back-btn" onClick={() => setpage("courses")}>
        ← Back to Courses
      </button>

      {/* Banner */}
      <div className="banner">
        <img src={course.image} alt={course.title} />
      </div>

      <div className="course-layout">

        {/* LEFT SIDE */}
        <div className="course-main">
          <h1>{course.title}</h1>

          <div className="meta">
            <span>🧑‍🏫{course.instractor}</span>
            <span>⭐{course.rating} </span>
            <span>👨‍🎓 {course.students}</span>
            <span>⏳{course.duration}</span>
          </div>

          <p className="desc">{course.description}</p>

          <h2>What you'll learn</h2>
<ul className="learn-list">
  {course.learn.map((item, index) => (
    <li key={index}> - {item}</li>
  ))}
</ul>

         {/* Modules */}
<h2>Course Modules</h2>

<div className="modules">
  {course.modules.map((mod, index) => (
    <div className="module" key={index}>
      <span>{index + 1}</span>
      <div>
        <strong>{mod.title}</strong>
        <p>{mod.lessons} lessons</p>
      </div>
    </div>
  ))}
</div>

</div> {/* ← THIS WAS MISSING (closes course-main) */}

{/* RIGHT SIDE */}
<div className="course-sidebar">
  <h2>{course.price}</h2>
  <button className="enroll">Enroll Now</button>
  <button className="wishlist">Add to Wishlist</button>

 <div className="includes">
  <h3>This course includes:</h3>

  {course.includes.map((item, index) => (
    <p key={index}>✔ {item}</p>
  ))}

</div>

</div>


      </div>
    </div>
  );
}

export default Coursedetail;
