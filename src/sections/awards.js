export function Award(props) {
    return (
        <div className="card">
            <h3> {props.text} </h3>
            <p className="description">
                {props.description}
            </p>
        </div>
    );
}
