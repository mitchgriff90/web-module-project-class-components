import React from 'react';

const ToDo = (props) => {
    const handleClick = () => {
        props.toggleItem(props.item.id);
    };

    return (
        <div onClick = {handleClick}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default ToDo;