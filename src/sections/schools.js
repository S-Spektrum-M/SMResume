export function Education(props)  {
    var courses = props.courses;
    return (
        <div className="card">
            <h3> {props.school} </h3>
            <p> Cumulative Gpa: {props.gpa} </p>
            <ul>
                {courses.map((course) => {
                    return (
                        <li> {course} </li>
                    )
                })}
            </ul>
        </div>
    );
}
