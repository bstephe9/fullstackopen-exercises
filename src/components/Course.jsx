import Content from "./Content"
import Header from "./Header"

function Course({ course }) {
  return (
    <>
      <Header courseName={course.name}></Header>
      <Content parts={course.parts}></Content>
    </>
  )
}

export default Course