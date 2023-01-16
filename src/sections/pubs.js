function trucnate(str, n) {
    return str.slice(0, n) + '...'
}

export function Publication(props)  {
    return (
        <div className="card">
            <h3> {props.text} </h3>
            <p className="description">
                {trucnate(props.abstract, 100)}
            </p>
        </div>
    );
}
//<a href={props.link}>
//Read More
//</a>
