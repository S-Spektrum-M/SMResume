export function Organization(props) {
    //var props = this.props;
    var roles = props.roles;
    return (
        <div className="card">
            <h3> {props.text} </h3>
            <hr/>
            {roles.map((role) => {
                return (
                    <div className="role">
                        <p className="header">
                            <strong> {role[2]} <em> {role[0]}-{role[1]} </em> </strong>
                        </p>
                        <p  className="description">
                            {role[3]}
                        </p>
                    </div>
                )
            })}
        </div>
    );
}
