import React from 'react';
import axios from 'axios';

class Addbrand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
        };
        if(this.props.match.params.id) {
          axios.get(`brands/${this.props.match.params.id}`, {}).then(res => {
              let brand = res.data.data;
              this.setState({title: brand.title});
              this.setState({image: brand.image_url});
          })
        }
    };

    handleChangeModelName = (e) => {
        this.setState({title: e.currentTarget.value})
    };
    handleChangeBrandImage = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.currentTarget.files[0]);
        reader.onload = () => {
            this.setState({image: reader.result})
        }
    };
    handleSubmitModel = (e) => {
        e.preventDefault();
        let data = new FormData();
        const {title,image} = this.state;
        data.set ('title', title);
        data.append ('image', image);
        if(this.props.match.params.id){
            axios.put(`/brands/${this.props.match.params.id}`, data).then(res => {
                console.log(res);
                console.log(res.data);
            })
        } else {
            axios.post (`/brands`, data ).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
    };

    render() {
        const {title} = this.state;
        return (
            <div className="uk-container">
                <form onSubmit={this.handleSubmitModel}>
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">Добавить марку автопроизводителя</legend>
                            <div className="uk-margin">
                                <input onChange={this.handleChangeModelName} type="text" value={title} className="uk-input" name="model" id="model" placeholder="Наименование модели"/>
                            </div>
                            <div className="uk-margin">
                                <div data-uk-form-custom="target:true">
                                    <input onChange={this.handleChangeBrandImage} type="file" id="file"/>
                                    <input type="text" className="uk-input uk-text-center uk-form-width-medium uk-height-small" placeholder="Добавить фото"/>
                                </div>
                            </div>
                            <button type="submit" className="uk-button uk-button-primary uk-button-small uk-width-1-5@m">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        )
    }   
}

export default Addbrand;