import React from "react";

const Header = (course)=>{
  return(
    <div>
       <h1>{course.name}</h1>
    </div>
  )
}

const Content = (content)=>{
  return(
    <div>
      <Part name={content.part1} exercises = {content.exercises1}/>
      <Part name={content.part2} exercises = {content.exercises2}/>
      <Part name={content.part3} exercises = {content.exercises3}/>
    </div>
  )
}

const Part = (part)=>{
  return(
    <div>
       <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}


const Total = (total)=>{
  return(
    <div>
       <p>Number of exercises {total.count}</p>
    </div>
  )
}

const App = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return(
    <div>
      <Header name={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total count={exercises1 + exercises2 + exercises3}/>
  </div>
  )
}

export default App;
