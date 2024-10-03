import LineChart from "./LineChart";
function Column3Row1() {
  return (
    <div className="col3row">
      <div style={{ margin: "20px" }}>
        <h2 style={{ marginBottom: "10px" }}>
          Estimated Engineering Cost Saved
        </h2>
        <div style={{ color: "gray", marginBottom: "15px" }}>
          September 20 - 27
        </div>
        <div style={{ fontSize: 44, fontWeight: "bold" }}>$18K</div>
        <div style={{ marginTop: "80px" }}>
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default Column3Row1;
