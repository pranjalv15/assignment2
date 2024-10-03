// Assessment.js
import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const Assessment = ({
  status,
  date,
  studentsAssigned,
  attended,
  shortlisted,
  isEditable,
  isRemovable,
}) => {
  return (
    <div className="assessment">
      <div className="assessment1" style={{ height: "10px" }}>
        <h4>ReactJS Assessment SDE 1</h4>
        <div className="assess">
          <FcViewDetails size={28} color="blue" />
          {isEditable ? (
            <FaRegEdit size={24} color="blue" style={{ marginLeft: "10px" }} />
          ) : null}
          {isRemovable ? (
            <RiDeleteBinLine
              size={28}
              color="red"
              style={{ marginLeft: "10px" }}
            />
          ) : null}
        </div>
      </div>
      <div
        className="assessment1"
        style={{ fontSize: "14px", height: "10px", marginTop: "25px" }}
      >
        <div className="assessment1" style={{ gap: "10px" }}>
          <p style={{ color: status === "Published" ? "green" : "black" }}>
            {status}
          </p>
          <p style={{ color: "grey" }}>{date}</p>
        </div>
        <div className="assessment1" style={{ gap: "10px" }}>
          <p>{studentsAssigned} Students Assigned</p>
          {attended !== null ? <p>{attended} attended</p> : null}
          {shortlisted !== null ? <p>{shortlisted} Shortlisted</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
