import React from 'react';
import axios from 'axios';

class AddCatalog extends React.Component{
    state = {
        title: '',
        position: '',
        imageFile: null,
    };
    handleChangeCatName = (e) => {
        this.setState({title: e.currentTarget.value})
    };

    handleChangePosition = (e) => {
        this.setState({position: e.currentTarget.value})
    };

    handleCatImg = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.currentTarget.files[0]);
        reader.onload = () => {
            this.setState({image: reader.result})
        };

    };
    handleSubmitCatalog = (e) => {
        e.preventDefault();
        let CatalogData = new FormData();
        const {title, position, image} = this.state;
        CatalogData.set ('title', title);
        CatalogData.set ('position', position);
        CatalogData.set('image', image);
        axios.post(`collections`, CatalogData ).then(res => {
            console.log(res);
            console.log(res.data);
        });
    };

    render() {
        return (
            <div className="uk-container">
                <form onSubmit={this.handleSubmitCatalog} >
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">Добавить раздел в категория</legend>
                            <div className="uk-margin">
                                <input onChange={this.handleChangeCatName} type="text" className="uk-input" name="title" id="title" placeholder="Наименование раздела"/>
                            </div>
                            <div className="uk-margin uk-width-1-4@m">
                                <input onChange={this.handleChangePosition} type="text" className="uk-input" name="position" id="position" placeholder="Введите позицию товара"/>
                            </div>
                            <div className="uk-margin">
                                <div uk-form-custom="target:true">
                                    <input type="file" id="file" onChange={this.handleCatImg}/>
                                    <input type="text" className="uk-input uk-text-center uk-form-width-medium uk-height-small" placeholder="Добавить фото"/>
                                </div>
                            </div>
                            <button type="submit" className="uk-button uk-button-primary uk-button-small uk-width-1-5@m">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default AddCatalog;