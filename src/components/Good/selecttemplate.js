import React from 'react';

export const SelectTemplate = props => {
    return (
        <option value={props.id}>{props.title}</option>
    );
}