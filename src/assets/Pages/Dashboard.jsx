import { useState } from "react";
import Navbar from "../../Combonents/Navbar";
import DashboardInfo from "../../Combonents/DashboardInfo";
import Statuscard from "../../Combonents/Statuscard";


function Dashboard() {
    const [username , setusername] = useState({user:"Abdiasis"});

  const statusData = [
  { icon: "📚", name: "Course Enrolled", numb: "1" },
  { icon: "✅", name: "Tasks Finished", numb: "2" },
  { icon: "🔥", name: "Current Streak", numb: "1" },
  { icon: "📆", name: "Upcoming", numb: "0" },
];
  return (
    <div>
    <Navbar username={username.user}/>
   <DashboardInfo  username = {username.user}/>
   <div className='Statusgrid'>
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
  )
}

export default Dashboard;
