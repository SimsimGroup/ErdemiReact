import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Goodlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    deleteRow = (index, id) => {
        const conf = window.confirm('Удалить данный продукт?');
        if (conf) {
            const newRows = this.state.data.slice(0, index).concat(this.state.data.slice(index + 1 ));
            this.setState({data: newRows});
            axios.delete(`products/` + id, newRows).then(res => {
                console.log(res);
                console.log(res.data);
            });
        }
    };

    componentDidMount() {
        axios.get(`products`).then(res => {
            this.setState({data: res.data.data});
        })
    }
    handleChangeFilter = (e) => {
        let self = this;
        axios.get(`products`, {
            params: {
                filter: e.currentTarget.value
            }
        }).then(res => {
            self.setState({data: res.data.data});
        })
    };
    render() {
        const { data } = this.state;

        const rows = data.map((props,index) => (
            <tr key={props.id}>
                <td>
                    {props.title}
                </td>
                <td>
                    {props.description}
                </td>
                <td>
                    <Link to={`/editgood/${props.id}`}>
                        <button className="uk-button uk-button-primary uk-button-small">Изменить</button>
                    </Link>
                </td>
                <td>
                    <Link to={`/addpromo/${props.id}`}>
                        <button className="uk-button uk-button-default uk-button-small">Промо</button>
                    </Link>
                </td>
                <td>
                    <button onClick={() => {this.deleteRow(index, props.id);}}  className="uk-button uk-button-danger uk-button-small">Удалить</button>
                </td>
            </tr>
        ));
        return(
            <div className="uk-container uk-overflow-auto">
            <div className="uk-panel uk-margin">
               <form className="uk-search uk-search-default uk-width-medium uk-background-muted">
                   <a href="#icon" data-uk-search-icon className="uk-search-icon-flip">{}</a>
                   <input type="search" className="uk-search-input" placeholder="Начните поиск" onChange={this.handleChangeFilter}/>
               </form>
           </div>
            <table className="uk-table uk-table-hover uk-table-middle uk-table-divider uk-background-muted">
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Цена</th>
                        <th>Редактировать</th>
                        <th>Добавить акцию</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                     {rows}
                </tbody>
                </table>
            </div>
        );
    }
}

export default Goodlist;

