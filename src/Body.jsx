
function MainBody() {
    const LectureCount= "5";
    return (
      <div>
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
      </div>
    );
  }

export default MainBody;