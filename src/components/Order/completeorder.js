import React from 'react';
import axios from "axios";
import styles from './orderpagination.css';

class CompleteOrder extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            total: null,
            per_page: null,
            current_page: null
        }
    };

    componentDidMount() {
        this.makeRequestWithPage(1);
    };

    makeRequestWithPage = pageNumber => {
        axios.get(`orders?page=${pageNumber}`).then(res => {
            this.setState({
                orders: res.data.orders,
                total: res.data.total,
                per_page: res.data.per_page,
                current_page: res.data.page,
            });
        })
    };
    render() {
        let completeOrders,renderPageNumbers,OrderItems;
        OrderItems = this.state.orders.map(props => (
            <li key={props.id}>{props.items}</li>
        ));
        if(this.state.orders !== null) {
            completeOrders = this.state.orders.map(props => (
                <tr key={props.id}>
                    <td>{props.customer_name}</td>
                    <td>{props.shipping_address}</td>
                    <td>
                        <ul className="uk-list uk-list-bullet">
                            {OrderItems}
                        </ul>
                    </td>
                </tr>
            ));
        }

        const pageNumbers = [];
        if(this.state.total !== null) {
            for(let i = 1; i < Math.ceil(this.state.total / this.state.per_page); i++) {
                pageNumbers.push(i)
            }
        }

        renderPageNumbers = pageNumbers.map(number => {
            let classes = this.state.current_page === number ? styles.active : '';

            return (
                <span key={number} className={classes} onClick={() => this.makeRequestWithPage(number)}>{number}</span>
            )
        });
        return (
            <div className={styles.app}>
                <legend className="uk-legend uk-margin-bottom">Список завершенных заказов</legend>
                <hr/>
                <div className="uk-panel uk-visible@m">
                    <span className="uk-margin-small-right">От</span>
                    <input type="date" className="uk-input uk-form-width-small uk-form-small"/>
                    <span className="uk-margin-small-right uk-margin-small-left">До</span>
                    <input type="date" className="uk-input uk-form-width-small uk-form-small"/>
                    <a href="#refresh" className="uk-button uk-button-primary uk-button-small uk-margin-small-left uk-visible@m">Обновить</a>
                </div>
                <div className="uk-panel uk-hidden@m">
                    <span className="uk-margin-small-right">От</span>
                    <input type="date" className="uk-input uk-form-width-medium uk-form-small"/>
                    <div className="uk-margin-small-top">
                        <span className="uk-margin-small-right">До</span>
                        <input type="date" className="uk-input uk-form-width-medium uk-form-small"/>
                    </div>
                    <a href="#refresh" className="uk-button uk-button-primary uk-button-small uk-flex uk-flex-center uk-margin uk-hidden@m uk-width-3-4">Обновить</a>
                </div>
                 <table className="uk-table uk-table-divider uk-table-responsive uk-table-hover uk-table-middle uk-background-muted uk-padding-small">
                     <thead>
                         <tr>
                             <th className="uk-table-expand">ФИО</th>
                             <th className="uk-table-expand">Адрес</th>
                             <th className="uk-table-expand">Заказ</th>
                         </tr>
                     </thead>
                     <tbody>
                         {completeOrders}
                     </tbody>
                 </table>
                <ul className="uk-pagination uk-flex-center" data-uk-margin>
                    <li><a href="#previous" onClick={() => this.makeRequestWithPage(1)}>&laquo;</a></li>
                    {renderPageNumbers}
                    <li><a href="#next" onClick={() => this.makeRequestWithPage(1)}>&raquo;</a></li>
                </ul>
            </div>
            );
        }
    };


export default CompleteOrder;
