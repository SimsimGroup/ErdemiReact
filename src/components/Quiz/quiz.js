import React from 'react';
import axios from 'axios';

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: [],
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({name: res.data})
        })
    }


    render() {
        const { name } = this.state
        return (
            <div className="uk-container uk-margin uk-overflow-auto">
                <div className="uk-panel">
                    <legend className="uk-legend uk-margin">История</legend>
                    <hr/>
                    <span className="uk-margin-small-right">От</span>
                    <input type="date" className="uk-input uk-form-width-small uk-form-small"/>
                    <span className="uk-margin-small-right uk-margin-small-left">До</span>
                    <input type="date" className="uk-input uk-form-width-small uk-form-small"/>
                    <a href="#refresh" className="uk-button uk-button-primary uk-button-small uk-margin-small-left uk-visible@m">Обновить</a>
                    <a href="#refresh" className="uk-button uk-button-primary uk-button-small uk-flex uk-flex-center uk-margin uk-hidden@m">Обновить</a>
                </div>
                <hr className="uk-margin-medium-top uk-margin-bottom-remove"/>
                <table className="uk-table uk-table-divider uk-table-middle uk-table-hover uk-background-muted">
                    <thead>
                        <tr>
                            <th>{name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Quiz;