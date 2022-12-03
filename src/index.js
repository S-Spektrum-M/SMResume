//TODO: Add in Projects/Honors

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Publication} from './sections/pubs';
import {Organization} from './sections/orgs';
import {Education} from './sections/schools';
import './index.css';


function Card(props)  {
    if (props.type === 'publication') {
        return <Publication
            link={props.link}
            text={props.text}
            abstract={props.abstract}
        />
    } else if (props.type === 'organization') {
        return <Organization
            text={props.text}
            description={props.description}
            roles={props.roles}
        />
    } else if (props.type === 'education') {
        return <Education
            school={props.school}
            gpa={props.gpa}
            courses={props.courses}
        />
    }
}

class Resume extends React.Component {
    componentDidMount() {
        //document.title = "new title";
    }

    render() {
        return (
            <div className="head">
                <h1> Siddharth Mohanty: Student/Researcher </h1>
                <h2> Publications </h2>
                <section className="container">
                    <Card
                        type={'publication'}
                        link={'https://drive.google.com/file/d/1-ee7568pyCOz5K2uFFOjDBTTfSVYQLBF/view'}
                        text={'Security Price Analysis using Sentiment Analysis, Polynomial Regression, Markov Chains, and CART Trees'}
                        abstract={'Many quantitative funds rely on data collection from buying user trades from brokerages while other funds attempt to make money off of small differences in price over minuscule amounts of time. This paper attempts to architect a python[1] system by which we analyze signals from Markov Chains[2], Polynomial Regression, and Sentiment Analysis latter passed into Decision Trees[3] for a holistic evaluation based solely on publicly available information.'}
                    />
                </section>
                <h2> Experience & Leadership </h2>
                <section className="container">
                    <Card
                        type={'organization'}
                        text={'Jane Street Capital'}
                        roles={[
                            [ '2022', '2022', 'Quantitave Research & Engineering Intern', 'I worked with a research team at JSC an learned how to effectively scale internal predictive models. I also learned how to build APIs that are currently in daily use at JSC with 100% uptime.'],
                        ]}
                    />
                    <Card
                        type={'organization'}
                        text={'Washington High School Computer Science Club'}
                        roles={[
                            [ '2022', '2023', 'Instructor', ''],
                            [ '2021', '2022', 'Member', ''],
                        ]}
                    />
                    <Card
                        type={'organization'}
                        text={'Washington High School Math Society'}
                        roles={[
                            [ '2022', '2023', 'Treasurer', ''],
                            [ '2022', '2023', 'Instructor', ''],
                            [ '2021', '2022', 'Member', ''],
                        ]}
                    />
                    <Card
                        type={'organization'}
                        text={'Washington High School Quiz Bowl'}
                        roles={[
                            [ '2022', '2023', 'Treasurer', 'Managed  club finances and helped to lower price  of  competitions for  students.'],
                            [ '2021', '2022', 'Member', ''],
                        ]}
                    />
                    <Card
                        type={'organization'}
                        text={'Washington High School DECA'}
                        roles={[
                            [ '2020', '2023', 'Member', ''],
                        ]}
                    />
                    <Card
                        type={'organization'}
                        text={'Washington High School Speech and Debate'}
                        roles={[
                            [ '2021', '2023', 'Member', ''],
                        ]}
                    />
                </section>
                <h2> Education </h2>
                <section className="container">
                    <Card
                        type={'education'}
                        school={'UC Santa Cruz'}
                        gpa={5.0}
                        courses={[
                            "MATH101: Mathematical Problem Solving",
                            "MATH100: Intro to Proofs"
                        ]}
                    />
                    <Card
                        type={'education'}
                        school={'UC Scout'}
                        gpa={5.0}
                        courses={[
                            "AP Physics C",
                        ]}
                    />
                    <Card
                        type={'education'}
                        school={'Elite Open School'}
                        gpa={5.0}
                        courses={[
                            "AP United States History",
                        ]}
                    />
                    <Card
                        type={'education'}
                        school={'Washington High School'}
                        gpa={4.04}
                        courses={[
                            'AP Computer Science  A',
                            'AP Calculus BC',
                            'AP Physics 1',
                            'AP European History',
                            'Honors Precalculus',
                            'English 11 Honors',
                            'English 10 Honors',
                            'Spanish 1-3',
                        ]}
                    />
                    <Card
                        type={'education'}
                        school={'Ohlone Community College'}
                        gpa={4.33}
                        courses={[
                            "MATH101C: Calculus with Analytic Geometry 3",
                            "MATH103: Introduction to Linear Algebra",
                            "MATH104: Differential Equations",
                            "CS124: Programming with Discrete Structures",
                            "CS113: Discrete Structures",
                            "CS116: Introduction to Object Oriented Programming With C++",
                            "CS102: Introduction to Programming With C++",
                        ]}
                    />
                </section>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Resume />
);
