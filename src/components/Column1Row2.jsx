import React from "react";
import Assessment from "./Assessment";

const Column1Row2 = () => {
  const assessments = [
    {
      status: "InProgress",
      date: "2 Apr 2024",
      studentsAssigned: 210,
      attended: 10,
      shortlisted: null,
      isEditable: true,
      isRemovable: false,
    },
    {
      status: "InProgress",
      date: "2 Apr 2024",
      studentsAssigned: 210,
      attended: 0,
      shortlisted: null,
      isEditable: true,
      isRemovable: false,
    },
    {
      status: "Incomplete",
      date: "2 Apr 2024",
      studentsAssigned: "No",
      attended: null,
      shortlisted: null,
      isEditable: true,
      isRemovable: true,
    },
    {
      status: "Published",
      date: "2 Apr 2024",
      studentsAssigned: 210,
      attended: null,
      shortlisted: 20,
      isEditable: false,
      isRemovable: false,
    },
    {
      status: "Published",
      date: "2 Apr 2024",
      studentsAssigned: 210,
      attended: null,
      shortlisted: 20,
      isEditable: false,
      isRemovable: false,
    },
  ];

  return (
    <div className="col1row">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ marginTop: "5px" }}>Recent Assessments</h2>
        <h3 style={{ marginTop: "8px", color: "blue" }}>View All</h3>
      </div>

      {assessments.map((assessment, index) => (
        <Assessment
          key={index}
          status={assessment.status}
          date={assessment.date}
          studentsAssigned={assessment.studentsAssigned}
          attended={assessment.attended}
          shortlisted={assessment.shortlisted}
          isEditable={assessment.isEditable}
          isRemovable={assessment.isRemovable}
        />
      ))}
    </div>
  );
};

export default Column1Row2;
