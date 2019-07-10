import React,{Component} from 'react';
import axios from 'axios';
import {ModelTemplate} from './modeltemplate';

class ModelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [],
        }
    }

    componentDidMount () {
        let self = this;
        axios.get(`models`).then(res => {
            self.setState({models: res.data.data});
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
                                return <ModelTemplate key={name.id} {...name}/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ModelList;