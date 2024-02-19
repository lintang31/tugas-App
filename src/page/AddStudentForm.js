// AddStudentForm.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import "./css/tambah.css";

const AddStudentForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    address: "",
  });

  const { name, gender, address } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !gender.trim() || !address.trim()) return;
    addStudent(formData);
    setFormData({
      name: "",
      gender: "",
      address: "",
    });
    // Menampilkan SweetAlert setelah berhasil menambahkan siswa
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Siswa berhasil ditambahkan.",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nama siswa"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Jenis kelamin"
        value={gender}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Alamat"
        value={address}
        onChange={handleChange}
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default AddStudentForm;
