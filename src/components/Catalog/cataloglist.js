import React from 'react';
import axios from 'axios';
/*import {CatalogTemplate} from './catalogtemplate';*/
import {Link} from "react-router-dom";

class CatalogList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get(`collections`).then(res => {
            console.log(res.data);
            this.setState({data: res.data.data});
        });
    }

    render() {
        const {data} = this.state;
        const CatalogTemplate = data.map((props) => (
            <tr key={props.id}>
                <td>{props.title}</td>
                <td className="uk-text-center">{props.position}</td>
                <td className="uk-text-center">
                    <Link to={`/addcatalog/${props.id}`}>
                        <button className="uk-button uk-button-primary uk-button-small">Изменить</button>
                    </Link>
                </td>
            </tr>
        ));
        return(
            <div className="uk-container uk-overflow-auto">
               <legend className="uk-legend uk-margin-bottom">Список каталога</legend>
               <hr/>
                <div>
                    <table className="uk-table uk-table-divider uk-table-hover uk-table-middle uk-background-muted">
                        <thead>
                            <tr>
                                <th>Наименование</th>
                                <th className="uk-table-shrink">Позиция</th>
                                <th className="uk-text-center">Редактировать</th>
                            </tr>
                        </thead>
                        <tbody>
                        {CatalogTemplate}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CatalogList;