import TopBox from "@/components/admin/topbox";
import ChartBox from "@/components/admin/chartbox";

async function fetchApi() {
  const response = await fetch("http://localhost:3000/api/users", {
    headers: {
      method: "GET",
    },
  });

  return response.json();
}

async function App() {

  const users = await fetchApi();
  return (
    <div className="home">
      <div className="box box1">
        <TopBox props={users}/>
      </div>
      <div className="box box2"><ChartBox/></div>
      <div className="box box3"><ChartBox/></div>
      <div className="box box4"><ChartBox/></div>
      <div className="box box5"><ChartBox/></div>
      <div className="box box6">Box6</div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
    </div>
  );
}

export default App;
