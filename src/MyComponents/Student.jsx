import React, { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Pages/list1Data";
import StudentModal from '../MyComponents/StudentModal';
import { modal_data } from "../Pages/list1Data";

const Student = () => {
  const { id } = useParams();
  const [data, setData] = useState(api);
  const arr = data[+id - 1].students;
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (studentData) => {
    setSelectedStudent(studentData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {arr.map((e, idx) => {
        return (
          <div
            className="list1"
            key={idx}
            onClick={() => openModal(e)}
            style={{cursor:'pointer'}}
          >
            <div className="first">
              <div className="name">{e.sname}</div>
              <div className="date">
                Date applied : <span>{e.date}</span>
              </div>
            </div>
            <div className="desc">{e.college}</div>
            <div className="govt">By {e.govt} government</div>
          </div>
        );
      })}
      {selectedStudent && (
        <StudentModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          data={modal_data[0]}
        />
      )}
    </>
  );
};

export default Student;
