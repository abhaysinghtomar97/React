import React from 'react'
import Card from './components/card'
import User from './components/user'

function App() {
  const job = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      NameofCompany: "Meta",
      DatePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$120,000 / year",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      NameofCompany: "Apple",
      DatePosted: "2 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150,000 / year",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      NameofCompany: "Netflix",
      DatePosted: "1 day ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$135,000 / year",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      NameofCompany: "Amazon",
      DatePosted: "7 days ago",
      post: "Cloud Support Associate",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$110,000 / year",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      NameofCompany: "Google",
      DatePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$160,000 / year",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      NameofCompany: "Microsoft",
      DatePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$130,000 / year",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      NameofCompany: "OpenAI",
      DatePosted: "6 days ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$70,000 / year",
      location: "Remote"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      NameofCompany: "Tesla",
      DatePosted: "8 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$145,000 / year",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      NameofCompany: "NVIDIA",
      DatePosted: "9 days ago",
      post: "Robotics Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$155,000 / year",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/ibm.com",
      NameofCompany: "IBM",
      DatePosted: "10 days ago",
      post: "Cybersecurity Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$115,000 / year",
      location: "Delhi, India"
    }
  ];


  return (
    <div className="parent">
      {job.map(function (elem, idx) {
        return <div key={idx}>
          <Card logo={elem.brandLogo} company={elem.NameofCompany} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} date={elem.DatePosted} pay={elem.pay} location={elem.location} />
        </div>

      })}

    </div>


  )
}

export default App