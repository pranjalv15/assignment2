import BarChart from "./BarChart";
function Column3Row2() {
  return (
    <div className="col3row">
      <div style={{ margin: "20px" }}>
        <h2 style={{ marginBottom: "10px" }}>Assessment Performance</h2>

        <div style={{ marginTop: "60px" }}>
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Column3Row2;
