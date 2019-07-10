import React from 'react';

class Addquiz extends React.Component{
    render() {
        return(
            <div className="uk-container">
                 <div className="uk-margin">
                    <legend className="uk-legend uk-margin">Добавить медиа-ресурс</legend>
                     <form className="uk-grid-small" data-uk-grid>
                         <div className="uk-width-1-2@s">
                             <input type="text" className="uk-input" name="name" id="name" placeholder="Наименование медиа-ресура"/> 
                         </div>
                         <div className="uk-width-1-4@s">
                             <input type="text" className="uk-input" name="position" id="position" placeholder="Позиция"/>
                         </div>
                         <div className="uk-width-1-4@s">
                             <a href="#a" className="uk-button uk-button-primary">Добавить</a>
                         </div>
                     </form>
                 </div>
             </div>
        );
    }
}

export default Addquiz;