import Column1Row1 from "./components/Column1Row1";
import Column2Row2 from "./components/Column1Row2";
import Column2Row from "./components/Column2Row";
import Column3Row1 from "./components/Column3Row1";
import Column3Row2 from "./components/Column3Row2";
function App() {
  const details = [
    {
      height: 205,
      title: "Total Candidates",
      details:
        "The total number of candidates that have been in the hiring pipeline",
      number: "1666",
    },
    {
      height: 205,
      title: "Average Score",
      details:
        "The Average of all the students that have taken the assessment thus far",
      number: "66",
    },
    {
      height: 220,
      title: "Engineering Hours Saved",
      details:
        "The total number of candidates that have been in the hiring pipeline",
      number: "600 Hours",
    },
    {
      height: 220,
      title: "Average Time Taken Per Assessment",
      details:
        "The total number of candidates that have been in the hiring pipeline",
      number: "6 Hours",
    },
  ];
  return (
    <div className="App">
      <div className="column">
        <Column1Row1 />
        <Column2Row2 />
      </div>
      <div className="column">
        {details.map((detail, index) => {
          return (
            <Column2Row
              height={detail.height}
              title={detail.title}
              details={detail.details}
              number={detail.number}
            />
          );
        })}
      </div>
      <div className="column">
        <Column3Row1 />
        <Column3Row2 />
      </div>
    </div>
  );
}

export default App;
