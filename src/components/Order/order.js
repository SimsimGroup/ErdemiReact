import React from 'react';
import axios from 'axios';

class Order extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userdata: [],
        }
    }

    deleteOrder = (index) => {
        let self = this;
        self.state.userdata[index].status = "completed";
        axios.put(`orders`, this.state.userdata[index] ).then(res => {
            const newRows = this.state.userdata.slice(0,index).concat(this.state.userdata.slice(index + 1));
            this.setState({userdata: newRows});
        })
    }

    componentDidMount() {
        axios.get(`orders`).then(res => {
            this.setState({userdata: res.data.data})
        })
    }

    render() {
        const OrderTemplate = this.state.userdata.map((props,index) => (
            <tr key={props.id}>
                <td>{props.name}</td>
                <td>{props.name}</td>
                <td>
                    <ul className="uk-list uk-list-bullet">
                        <li>{props.name}</li>
                        <li>{props.name}</li>
                        <li>{props.name}</li>
                    </ul>
                </td>
                <td><button onClick={() => {this.deleteOrder(index)}} className="uk-button uk-button-primary uk-button-small">Завершить</button></td>
            </tr>
        ));
        return (
            <div className="uk-container uk-margin">
                <legend className="uk-legend uk-margin-bottom">Список незавершенных заказов</legend>
                <hr/>
                 <table className="uk-table uk-table-divider uk-table-responsive uk-table-hover uk-table-middle uk-background-muted uk-padding-small">
                     <thead>
                         <tr>
                             <th className="uk-width-small">ФИО</th>
                             <th className="uk-table-expand">Адрес</th>
                             <th className="uk-table-expand">Заказ</th>
                             <th></th>
                         </tr>
                     </thead>
                     <tbody>
                         {OrderTemplate}
                     </tbody>
                 </table>
             </div>
        );
    }
}

export default Order;