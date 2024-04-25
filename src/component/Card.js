import "./Card.css";

function Card(props) {
    // Ensure that there is a space before appending the className from props
    const classes = "card " + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;