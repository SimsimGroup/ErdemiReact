import React from 'react';
import axios from 'axios';
import {BrandTemplate} from './brandtemplate';

class BrandList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [],
        }
    }

    componentDidMount () {
        axios.get(`brands`).then(res => {
            this.setState({models: res.data.data});
        });
    }
    render() {
        const { models } = this.state;
        return(
            <div className="uk-container uk-overflow-auto">
               <legend className="uk-legend uk-margin-bottom">Список моделей</legend>
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
                        {
                            models.map(name => {
                                return <BrandTemplate key={name.id}{...name}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BrandList;