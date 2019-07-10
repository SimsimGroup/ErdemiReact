import React from 'react';
import { Link } from 'react-router-dom';

class NavPanel extends React.Component {
    render() {
        return (
           <div className="uk-panel uk-padding leftpanel uk-light">
                <ul className="uk-tab-left" data-uk-accordion>
                    <li>
                        <a href="#nav" className="uk-accordion-title">Запчасти</a>
                        <div className="uk-accordion-content uk-panel uk-padding-small">
                            <div className="uk-margin-remove">
                                <Link to='/goodform' className="uk-button uk-button-text">Добавить запчасть</Link>
                            </div>
                            <div className="uk-margin-small-top">
                                <Link to='/addtolist' className="uk-button uk-button-text">Список запчастей</Link> 
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#nav" className="uk-accordion-title">Категории</a>
                        <div className="uk-accordion-content uk-panel uk-padding-small">
                            <div className="uk-margin-remove">
                                <Link to='/addcatalog' className="uk-button uk-button-text">Добавить категорию</Link>
                            </div>
                            <div className="uk-margin-small-top">
                                <Link to='/cataloglist' className="uk-button uk-button-text">Посмотреть список</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#nav" className="uk-accordion-title">Марки Авто</a>
                        <div className="uk-accordion-content uk-panel uk-padding-small">
                            <div className="uk-margin-remove">
                                <Link to='/addbrand' className="uk-button uk-button-text">Добавить марку</Link>
                            </div>
                            <div className="uk-margin-small-top">
                                <Link to='/brandlist' className="uk-button uk-button-text">Посмотреть список</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#nav" className="uk-accordion-title">Модели Авто</a>
                        <div className="uk-accordion-content uk-panel uk-padding-small">
                            <div className="uk-margin-remove">
                                <Link to='/addmodel' className="uk-button uk-button-text">Добавить модель</Link>
                            </div>
                            <div className="uk-margin-small-top">
                                <Link to='/modellist' className="uk-button uk-button-text">Посмотреть список</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#nav" className="uk-accordion-title">Заказы <span id="numberCircle">5</span></a>
                        <div className="uk-accordion-content uk-panel uk-padding-small">
                            <div className="uk-margin-remove">
                                <Link to='/order' className="uk-button uk-button-text">Незавершенные заказы</Link>
                            </div>
                            <div className="uk-margin-small-top">
                                <Link to='/completeorder' className="uk-button uk-button-text">Завершенные заказы</Link>
                            </div>
                        </div>
                    </li>
                    {/*<li>
                        <a href="#nav" className="uk-accordion-title">Опрос</a>
                        <div className="uk-accordion-content uk-panel uk-padding-small">
                            <div className="uk-margin-remove">
                                <Link to='/quiz' className="uk-button uk-button-text">Посмотреть список</Link>
                            </div>
                            <div className="uk-margin-small-top">
                                <Link to='/addquiz' className="uk-button uk-button-text">Добавить ресурс</Link>
                            </div>
                        </div>
                    </li>*/}
                    <li>
                        <a href="#nav" className="uk-accordion-title">Акции</a>
                        <div className="uk-accordion-content uk-panel uk-padding-small">
                            <div className="uk-margin-remove">
                                <Link to='/addpromo' className="uk-button uk-button-text">Создать акции</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div> 
        );
    }
}

export default NavPanel;