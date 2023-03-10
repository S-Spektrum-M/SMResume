//TODO: Add in Projects/Honors

import "./index.css";
import { Publication } from "./sections/pubs";
import { Organization } from "./sections/orgs";
import { Education } from "./sections/schools";
import { Award } from "./sections/awards";
import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
    if (props.type === "publication") {
        return (
            <Publication
                link={props.link}
                text={props.text}
                abstract={props.abstract}
            />
        );
    } else if (props.type === "organization") {
        return (
            <Organization
                text={props.text}
                description={props.description}
                roles={props.roles}
            />
        );
    } else if (props.type === "education") {
        return (
            <Education
                school={props.school}
                gpa={props.gpa}
                courses={props.courses}
            />
        );
    } else if (props.type === "award") {
        return <Award text={props.text} description={props.description} />;
    } else if (props.type === "project") {
        return (
            <Publication
                link={props.link}
                text={props.text}
                abstract={props.abstract}
            />
        );
    }
}

class Resume extends React.Component {
    componentDidMount() {
        document.title = "Siddharth Mohanty Resume";
    }

    render() {
        return (
            <div className="head">
                <h2> Publications </h2>
                <section className="container">
                    <Card
                        type={"publication"}
                        link={
                            "https://www.authorea.com/users/464986/articles/616273-security-price-analysis-using-sentiment-analysis-polynomial-regression-markov-chains-and-cart-trees"
                        }
                        text={
                            "Price Analysis with Stochastic Calculus and Machine Learning"
                        }
                        abstract={
                            "Many quantitative funds rely on data collection from buying user trades from brokerages while other funds attempt to make money off of small differences in price over minuscule amounts of time. This paper attempts to architect a python[1] system by which we analyze signals from Markov Chains[2], Polynomial Regression, and Sentiment Analysis latter passed into Decision Trees[3] for a holistic evaluation based solely on publicly available information."
                        }
                    />
                    <Card
                        type={"publication"}
                        text={
                            "Applying Stochastic Calculus to Find Stable Minima of Dynamic Systems"
                        }
                        link={
                            "https://drive.google.com/file/d/1-ee7568pyCOz5K2uFFOjDBTTfSVYQLBF/view"
                        }
                        abstract={
                            "This paper archtitects a novel algorithm for finding the minima of a dynamic state machine defined by a markov chain without evaluating the gradient of the generated function."
                        }
                    />
                    <Card
                        type={"publication"}
                        text={
                            "Applying Networks of Stochastic Analyzers to construct Security Price Predictions"
                        }
                        link={
                            "https://drive.google.com/file/d/1-ee7568pyCOz5K2uFFOjDBTTfSVYQLBF/view"
                        }
                        abstract={
                            "This paper prvcides a system of analyzing the Stock Market and the movement of its constituent by treating the market as a graph of connected individuals. This system of aggregated prediction constructes a GNN which is parsed and provides predictive capacity to a series of stochastic analyzers."
                        }
                    />
                </section>
                <h2> Experience & Leadership </h2>
                <section className="container">
                    <Card
                        type={"organization"}
                        text={"J.P. Morgan Chase"}
                        roles={[
                            [
                                "2022",
                                "2023",
                                "2nd Year Associate Quantitative Analysis Intern",
                                "I helped develop 2 novel algorithms, Parameter Search Reduction and Decision Boundary Optimization, which have high penetration within JPMC.",
                            ],
                        ]}
                    />
                    <Card
                        type={"organization"}
                        text={"Jane Street Capital"}
                        roles={[
                            [
                                "2022",
                                "2022",
                                "Quantitative Research & Engineering Intern",
                                "I worked with a research team at JSC an learned how to effectively scale internal predictive models. I also learned how to build APIs that are currently in daily use at JSC with 100% uptime.",
                            ],
                        ]}
                    />
                    <br />
                </section>
                <section className="container">
                    <Card
                        type={"organization"}
                        text={"Washington High School Computer Science Club"}
                        roles={[
                            [
                                "2022",
                                "2023",
                                "Instructor",
                                "I crafted an engaging interactive curriculum for students about Data Science and Machine Learning covering a variety of topics and technologies such as sklearn and numpy.",
                            ],
                            ["2021", "2022", "Member", ""],
                        ]}
                    />
                    <Card
                        type={"organization"}
                        text={"Washington High School Math Society"}
                        roles={[
                            ["2022", "2023", "Treasurer", "Dealt with School organizations and constructed a way of collecting funds for WHS' first AMC ever."],
                            ["2022", "2023", "Instructor", "Provided instruction in the topics covered in AMC 10 to members."],
                            ["2021", "2022", "Member", ""],
                        ]}
                    />
                    <Card
                        type={"organization"}
                        text={"Washington High School Quiz Bowl"}
                        roles={[
                            [
                                "2022",
                                "2023",
                                "Treasurer",
                                "Managed  club finances and helped to lower price  of  competitions for  students.",
                            ],
                            ["2021", "2024", "Competitor", "Participated in the CalCup Quizbowl tournaments as part of our varsity competitive team."],
                            ["2021", "2022", "Member", ""],
                        ]}
                    />
                    <Card
                        type={"organization"}
                        text={"Washington High School DECA"}
                        roles={[["2020", "2023", "Member", ""]]}
                    />
                    <Card
                        type={"organization"}
                        text={"Washington High School Speech and Debate"}
                        roles={[["2021", "2023", "Member", ""]]}
                    />
                </section>
                <h2> Education </h2>
                <section className="container">
                    <Card
                        type={"education"}
                        school={"UC Santa Cruz"}
                        gpa={5.0}
                        courses={[
                            "MATH101: Mathematical Problem Solving",
                            "MATH100: Intro to Proofs",
                        ]}
                    />
                    <Card
                        type={"education"}
                        school={"UC Scout"}
                        gpa={5.0}
                        courses={[
                            "AP Physics C: Mechanics",
                            "AP Physics C: Electricity and Magnetism",
                            "AP Environmental Science",
                        ]}
                    />
                    <Card
                        type={"education"}
                        school={"Elite Open School"}
                        gpa={5.0}
                        courses={["AP United States History"]}
                    />
                    <Card
                        type={"education"}
                        school={"Washington High School"}
                        gpa={4.04}
                        courses={[
                            "AP Computer Science  A",
                            "AP Calculus BC",
                            "AP Physics 1",
                            "AP European History",
                            "Honors Precalculus",
                            "English 11 Honors",
                            "English 10 Honors",
                            "Spanish 1-3",
                        ]}
                    />
                    <Card
                        type={"education"}
                        school={"Ohlone Community College"}
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
                <h2> Accolades </h2>
                <section className="container">
                    <Card type={"award"} text={"USAPhO Qualifier 1x"} description={""} />
                </section>
            </div>
        );
    }
}

function App() {
    return <Resume />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
