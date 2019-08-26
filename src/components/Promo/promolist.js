import React from 'react';
import axios from 'axios';

class PromoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            promos: [],
            title: '',
        }
    }
    componentDidMount() {
        axios.get(`promos`).then(res => {
            this.setState({promos: res.data.data})
        })
    };
    deleteRow = (index,id) => {
        const conf = window.confirm('Удалить данную акцию?');
        if(conf) {
            const newRows = this.state.promos.slice(0, index).concat(this.state.promos.slice(index + 1));
            this.setState({promos: newRows});
            axios.delete(`promos/` + id, newRows).then(res => {
                console.log(res);
                console.log(res.data.data);
            })
        }
    }
    render() {
        const {promos} = this.state;
        const PromoRows = promos.map((props,index) => (
            <tr key={props.id}>
                <td>
                    {props.title}
                </td>
                <td>
                    <button onClick={() => {this.deleteRow(index,props.id);}} className="uk-button uk-button-danger uk-button-small">Удалить</button>
                </td>
            </tr>
        ))
        return(
            <div className="uk-container uk-overflow-auto">
               <legend className="uk-legend uk-margin-bottom">Список Акций</legend>
               <hr/>
                <table className="uk-table uk-table-hover uk-table-middle uk-table-divider uk-background-muted">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                    {PromoRows}
                    </tbody>
                </table>
            </div>
        );
    }
} 

export default PromoList;