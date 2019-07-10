import React from 'react';
import Bell from '../image/notification.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navtop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            order: [],
        }
    }

    componentDidMount() {
        axios.get(`orders`).then(res => {
            this.setState({order: res.data.data})
        })
    }

    render() {
        const Orders = this.state.order.map(data => {
            return  <li key={data.id}><Link to='/order'>{data.title}</Link></li>
        })
        return (
            <div className="uk-panel uk-box-shadow-large">
                <nav className="uk-navbar-container uk-light" data-uk-navbar>
                    <div className="uk-navbar-left uk-margin-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><a href="#navtop">ErDemi</a></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right uk-margin-right">
                        <ul className="uk-navbar-nav">
                          <li className="uk-active uk-inline">
                             <div className="uk-position-top-right uk-margin-top uk-light">
                                 <p className="uk-text-warning uk-text-bold">{this.state.order.length}</p>
                             </div>
                              <a href="#alarm" className="uk-icon-link uk-button" type="button"><img src={Bell} alt="bell"/></a>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-dropdown-nav">
                                        {Orders}
                                    </ul>
                                </div>
                           </li>
                            <li className="uk-active">  
                                <a href="#navtop">Admin</a>
                                <div className="uk-navbar-dropdown uk-width-small">
                                    <ul className="uk-nav uk-navbar-dropdown-nav uk-text-center">
                                        <li><a href="#exit" className="uk-active uk-padding-remove uk-text-uppercase">Выйти</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navtop;