import React from 'react';
import {Link} from 'react-router-dom';

export const BrandTemplate = (props) => {
    return (
        <tr key={props.id}>
            <td>{props.title}</td>
            <td className="uk-text-center">{props.id}</td>
            <td className="uk-text-center">
                <Link to={`/editbrand/${props.id}`}>
                 <button className="uk-button uk-button-primary uk-button-small">Изменить</button>
                </Link>
            </td>
        </tr>
    )
};

