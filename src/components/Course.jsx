import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

function Course({ course }) {
  return (
    <>
      <Header courseName={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  )
}

export default Course