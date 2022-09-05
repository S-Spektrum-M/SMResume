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
                    <Card
                        type={'publication'}
                        link={'https://drive.google.com/file/d/1BXW6yoT6RMRltHnM5Np2e_WoLu3jFb1r/view?usp=sharing'}
                        text={'Asset Allocation: From Markowitz to Deep Reinforcement Learning'}
                        abstract={'Asset allocation is an investment strategy that aims to balance risk and reward by constantly redistributing the portfolio’s assets according to certain goals, risk tolerance, and investment horizon. Unfortunately, there is no simple formula that can find the right allocation for every individual. As a result, investors may use different asset allocations’ strategy to try to fulfil their financial objectives. In this work, we conduct an extensive benchmark study to determine the efficacy and reliability of a number of optimization techniques. In ...'}
                    />
                </section>
                <h2> Experience & Leadership </h2>
                <section className="container">
                    <Card
                        type={'organization'}
                        text={'Washington High School Computer Science Club'}
                        roles={[
                            [ '2022', '2023', 'Instructor', ''],
                            [ '2022', '2023', 'Secretary', ''],
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
                        school={'Washington High School'}
                        gpa={4.04}
                        courses={[
                            'AP Computer Science  A',
                            'AP Calculus BC',
                            'Honors Precalculus',
                            'AP Physics 1',
                            'AP European History',
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
                            'Linear Algebra',
                            'Calculus with Analytic Geometry 3',
                            'Introduction to C++',
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
