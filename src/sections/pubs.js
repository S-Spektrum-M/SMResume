export function Publication(props)  {
    return (
        <div className="card">
            <h3> {props.text} </h3>
            <p className="description">
                {props.abstract}
            </p>
            <a href={props.link}>
                Read More
            </a>
        </div>
    );
}
