import React, { useState } from "react";

import StudentList from "./page/StudentList";
import AddStudentForm from "./page/AddStudentForm";
import EditStudentForm from "./page/EditStudentForm";

const App = () => {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false); // Tambahkan state untuk mengontrol visibilitas formulir tambahan
  const initialFormState = { id: null, name: "" };
  const [currentStudent, setCurrentStudent] = useState(initialFormState);

  const addStudent = (student) => {
    const newStudent = { id: students.length + 1, ...student };
    setStudents([...students, newStudent]);
    setAdding(false); // Setelah menambah siswa, sembunyikan formulir tambahan
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    setEditing(false);
  };

  const editStudent = (student) => {
    // Mengubah nama fungsi menjadi editStudent
    setEditing(true);
    setCurrentStudent({ id: student.id, name: student.name });
  };

  const updateStudent = (id, updatedStudent) => {
    setEditing(false);
    setStudents(
      students.map((student) => (student.id === id ? updatedStudent : student))
    );
  };

  return (
    <div>
      <div>
        <br />
        <h2>{editing ? "Edit Siswa" : adding ? "Tambah Siswa" : ""}</h2>
        {editing ? (
          <EditStudentForm
            editing={editing}
            setEditing={setEditing}
            currentStudent={currentStudent}
            updateStudent={updateStudent}
          />
        ) : adding ? (
          <AddStudentForm addStudent={addStudent} />
        ) : null}
      </div>
      {!adding && (
        <div>
          <h2>Data Siswa</h2>
          <button onClick={() => setAdding(true)}>Tambah</button>
          <StudentList
            students={students}
            deleteStudent={deleteStudent}
            editStudent={editStudent} // Menggunakan properti editStudent yang benar
          />
        </div>
      )}
    </div>
  );
};

export default App;
