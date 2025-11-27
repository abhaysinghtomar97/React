import React from 'react'
import Card from './Components/Card'



const App = () => {
  const student = [
    {
      "name": "SHREYA KATIYAR",
      "roll_no": "2401640310113",
      "branch": "ELECTRONICS & COMMUNICATION ENGG.",
      "student_id": "2411085",
      "dp": "std_logo"
    },
    {
      "name": "RISHABH KUMAR",
      "roll_no": "2401640310011",
      "branch": "ELECTRONICS & COMMUNICATION ENGG.",
      "student_id": "2411092",
      "dp": "std_logo"
    },
    {
      "name": "SHREYA SINGH",
      "roll_no": "2401640310025",
      "branch": "COMPUTER SCIENCE ENGINEERING",
      "student_id": "2411103",
      "dp": "std_logo"
    },
    {
      "name": "AMAN TIWARI",
      "roll_no": "2401640310044",
      "branch": "INFORMATION TECHNOLOGY",
      "student_id": "2411121",
      "dp": "std_logo"
    },
    {
      "name": "PRIYA YADAV",
      "roll_no": "2401640310067",
      "branch": "MECHANICAL ENGINEERING",
      "student_id": "2411140",
      "dp": "std_logo"
    },
    {
      "name": "VIKAS SINGH",
      "roll_no": "2401640410009",
      "branch": "ELECTRICAL ENGINEERING",
      "student_id": "2411188",
      "dp": "std_logo"
    },
    {
      "name": "ANJALI SRIVASTAVA",
      "roll_no": "2401640310088",
      "branch": "CIVIL ENGINEERING",
      "student_id": "2411201",
      "dp": "std_logo"
    },
    {
      "name": "HARSH VERMA",
      "roll_no": "2401640310103",
      "branch": "ELECTRONICS & COMMUNICATION ENGG.",
      "student_id": "2411220",
      "dp": "std_logo"
    },
    {
      "name": "NEHA CHAURASIYA",
      "roll_no": "2401640310122",
      "branch": "BIOTECHNOLOGY",
      "student_id": "2411249",
      "dp": "std_logo"
    },
    {
      "name": "ADITYA MISHRA",
      "roll_no": "2401640310135",
      "branch": "AI & DATA SCIENCE",
      "student_id": "2411266",
      "dp": "std_logo"
    }
  ]
  return (
    <div className="cards_parent">
      {student.map(function(elem){
        return(
      <div>
        <Card name={elem.name} roll={elem.roll_no} dp="https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png" std_id={elem.student_id} branch={elem.branch} />
      </div>
      )
      })}


    </div>
  )
}

export default App