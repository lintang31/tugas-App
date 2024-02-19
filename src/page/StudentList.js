import React from "react";
import swal from "sweetalert"; // Import SweetAlert
import "./css/data.css"; // Import file CSS

const StudentList = ({ students, deleteStudent, editStudent }) => {
  const handleDelete = (id) => {
    // Tampilkan pesan konfirmasi dengan SweetAlert
    swal({
      title: "Anda yakin?",
      text: "Setelah dihapus, Anda tidak akan dapat memulihkan data mahasiswa ini!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // Jika pengguna mengonfirmasi penghapusan, panggil fungsi deleteStudent
        deleteStudent(id);
        swal("Data Siswa telah dihapus!", {
          icon: "success",
        });
      } else {
        // Jika pengguna membatalkan penghapusan, tampilkan pesan informasi
        swal("Data Siswa aman.");
      }
    });
  };

  return (
    <ul className="student-list">
      <li className="header">
        <div>
          <strong>Nama</strong>
          <strong>Jenis Kelamin</strong>
          <strong>Alamat</strong>
          <strong>Aksi</strong>
        </div>
      </li>
      {students.map((student) => (
        <li key={student.id} className="item">
          <div>
            <span>
              <strong>{student.name}</strong>
              <strong>{student.gender}</strong>
              <strong>{student.address}</strong>
            </span>
          </div>
          <div className="actions">
            <button
              onClick={() => editStudent(student)}
              style={{ backgroundColor: "green" }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(student.id)}>Hapus</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
