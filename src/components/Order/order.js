import React from 'react';
import axios from 'axios';

class Order extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        }
    }

    deleteOrder = (index) => {
        let self = this;
        self.state.orders[index].status = "completed";
        axios.put(`orders`, this.state.orders[index] ).then(res => {
            const newRows = this.state.orders.slice(0,index).concat(this.state.orders.slice(index + 1));
            this.setState({orders: newRows});
        })
    }

    componentDidMount() {
        axios.get(`orders`).then(res => {
            this.setState({orders: res.data.data})
        });
    }

    render() {
        const OrderItems = this.state.orders.map((props) => (
            <li key={props.id}>{props.items}</li>
        ));
        const OrderTemplate = this.state.orders.map((props,index) => (
            <tr key={props.id}>
                <td>{props.customer_name}</td>
                <td>
                    <ul className="uk-list uk-list-bullet">
                        {OrderItems}
                    </ul>
                </td>
                <td>{props.shipping_address}</td>
                <td>{props.phone}</td>
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
                             <th className="uk-table-expand">Заказ</th>
                             <th className="uk-table-expand">Адрес</th>
                             <th className="uk-table-expand">Телефон</th>
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