import React from 'react';

class PromoList extends React.Component{

    render() {
        return(
            <div className="uk-container uk-overflow-auto">
               <legend className="uk-legend uk-margin-bottom">Список Баннеров</legend>
               <hr/>
                <table className="uk-table uk-table-hover uk-table-middle uk-table-divider uk-background-muted">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Включить/Отключить</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Морковка
                            </td>
                            <td>
                                <div className="uk-button-group">
                                    <a href="#switch" className="uk-button uk-button-small uk-button-primary">Включить</a>
                                    <a href="#switch" className="uk-button uk-button-small uk-button-secondary">Выключить</a>
                                </div>
                            </td>
                            <td>
                                <a href="#edit" className="uk-button uk-button-danger uk-button-small">Удалить</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
} 

export default PromoList;