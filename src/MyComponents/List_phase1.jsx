import React from 'react';
import '../Pages/Dashboard.css';

const List_phase1 = (props) => {
  return (
    <>
      <div className="list1">
          <div className="first">
            <div className="name">{props.name}</div>
            <div className="count">Pending : <span>{props.no}</span></div>
          </div>
          <div className="desc">{props.description}</div>
          <div className="govt">By {props.state} government</div>
      </div>
    </>
  );
}

export default List_phase1;