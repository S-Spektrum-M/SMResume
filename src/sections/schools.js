//import React from "react";

/*
 *export class Education extends React.component {
 *    render() {
 *        var props = this.props;
 *        var courses = props.courses;
 *        return (
 *            <div className="card">
 *                <h3> {props.school} </h3>
 *                <hr />
 *                <p> Cumulative Gpa: {props.gpa} </p>
 *                <hr />
 *                <ul>
 *                    {courses.map((course) => {
 *                        return (
 *                            <li> {course} </li>
 *                        )
 *                    })}
 *                </ul>
 *            </div>
 *        );
 *    }
 *}
 */

export function Education(props) {
    //var props = this.props;
    var courses = props.courses;
    return (
        <div className="card">
            <h3> {props.school} </h3>
            <hr />
            <p> Cumulative Gpa: {props.gpa} </p>
            <hr />
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
