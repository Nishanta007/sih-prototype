import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../Pages/list1Data';

const Student = () => {
  const {id} = useParams();
  const[data, setData] = useState(api);
  const arr = data[(+id)- 1].students;

  return (
    <>
      {arr.map((e) => {
        return(
          <div className="list1">
            <div className="first">
              <div className="name">{e.sname}</div>
              <div className="date">Date applied : <span>{e.date}</span></div>
            </div>
            <div className="desc">{e.college}</div>
            <div className="govt">By {e.govt} government</div>
          </div>
        );
      })}
    </>
  );
}

export default Student;