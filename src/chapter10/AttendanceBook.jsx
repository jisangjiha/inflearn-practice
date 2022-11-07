import React from "react";

const students = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Monika" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Elly" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
