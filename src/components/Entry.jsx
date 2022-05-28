import React from "react";

function Entry(props) {
    return (
        <div>
            <dt>
                <span>{props.name}</span>
            </dt>
            <dd>{props.description}</dd>
        </div>
    );
}

export default Entry;