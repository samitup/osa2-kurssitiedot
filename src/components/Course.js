import React from 'react'
const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total total={props.course.parts} />
        </div>
    )
}
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
const Content = ({ parts }) => {
    const rows = () =>
        parts.map(part =>
            <Part
                key={part.id}
                list={part}
            />
        )

    return (
        <div>
            <ul>
                {rows()}
            </ul>
        </div>
    )
}
const Part = ({ list }) => {
    return (
        <li>{list.name} {list.exercises}</li>
    )
}
const Total = (props) => {
        const sum = props.total.map(summaa => summaa.exercises)
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        const totalSum = sum.reduce(reducer)
    return (
        <div>
            <p>Total number of exercises: {totalSum} </p>
        </div>
    )
}
export default Course