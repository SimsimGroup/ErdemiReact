import React from 'react';
import { Link } from 'react-router-dom';

export const CatalogTemplate = props => {
    return (
        <tr key={props.id}>
            <td>{props.title}</td>
            <td className="uk-text-center">{props.position}</td>
            <td className="uk-text-center">
                <Link to={'/addcatalog'}>
                    <button className="uk-button uk-button-primary uk-button-small">Изменить</button>
                </Link>
            </td>
        </tr>
    )
}