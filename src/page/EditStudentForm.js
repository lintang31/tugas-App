import React, { useState, useEffect } from "react";
import swal from "sweetalert"; // Impor SweetAlert

const EditStudentForm = ({
  editing,
  setEditing,
  currentStudent,
  updateStudent,
}) => {
  const [student, setStudent] = useState(currentStudent);

  useEffect(() => {
    setStudent(currentStudent);
  }, [currentStudent]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStudent(student.id, student);
    // Tampilkan SweetAlert ketika pembaruan berhasil
    swal("Berhasil!", "Data siswa telah berhasil diperbarui!", "success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama</label>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleInputChange}
      />
      <label>Jenis Kelamin</label>
      <input
        type="text"
        name="gender"
        value={student.gender}
        onChange={handleInputChange}
      />
      <label>Alamat</label>
      <input
        type="text"
        name="address"
        value={student.address}
        onChange={handleInputChange}
      />
      <button type="submit">Perbarui</button>{" "}
      <button type="button" onClick={() => setEditing(false)}>
        Batal
      </button>{" "}
    </form>
  );
};

export default EditStudentForm;
