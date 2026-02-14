import DashboardInfo from "../Combonents/DashboardInfo";
import Statuscard from "../Combonents/Statuscard";

function Dashboard({ user }) {
  if (!user) {
    return <h2>Loading...</h2>;
  }

  const statusData = [
    { icon: "📚", name: "Course Enrolled", numb: "1" },
    { icon: "✅", name: "Tasks Finished", numb: "2" },
    { icon: "🔥", name: "Current Streak", numb: "1" },
    { icon: "📆", name: "Upcoming", numb: "0" },
  ];

  return (
    <div>
<DashboardInfo username={user.email.split("@")[0]} />
      <div className="Statusgrid">
        {statusData.map((status, index) => (
          <Statuscard
            key={index}
            icon={status.icon}
            name={status.name}
            numb={status.numb}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
