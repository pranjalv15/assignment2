import { color } from "chart.js/helpers";

function Column2Row(props) {
  return (
    <div className="col2row" style={{ height: props.height }}>
      <div style={{ margin: "20px" }}>
        <h2>{props.title}</h2>
        <div style={{ color: "gray" }}>{props.details}</div>
        <div
          style={{
            marginTop: props.height == 220 ? "40px" : "30px",
            fontSize: 44,
            fontWeight: "bold",
          }}
        >
          {props.number}
        </div>
      </div>
    </div>
  );
}

export default Column2Row;
