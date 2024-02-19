import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

class MainBody extends React.Component {
    
    render(){
      const LectureCount= "5";
    return (
      <div style={{ minHeight: "70vh"}}>
        <p>This Project name is taskopedia</p>
        <p> Total Lecture = {LectureCount}</p>
        <ul>
          <li>Call Shivam</li>
          <li>Go to Walmart</li>
        </ul>
        {/* <div>
          Enter Task: {" "}
          <input maxLength={7} readOnly={false} placeholder='Shivam'></input>
        </div> */}
            <div className='col-4 row'>Students Enrolled</div>
    <Student experencie={4} name={"Shivam Kumar"} headshot="https://api.lorem.space/image/face?w=150&h=149" ><StudentReview /> </Student>
    <Student experencie={3} name={"Supriya Sharma"} headshot="https://api.lorem.space/image/face?w=150&h=154"> <StudentReview/> </Student>
    <Student experencie={5} name={"Lisa Kumari"} headshot="https://api.lorem.space/image/face?w=150&h=152"> <StudentReview /> </Student>
      </div>
    );
      }
  }

export default MainBody;