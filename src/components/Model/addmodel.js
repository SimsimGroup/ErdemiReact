import React from 'react';
import axios from 'axios';
import {SelectTemplate} from "../Good/selecttemplate";

class Addmodel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            brand_id: 1,
            brand: '',
            brandsData: [],
            image: null,
        };
        if(this.props.match.params.id){
            axios.get(`models/${this.props.match.params.id}`, {}).then(res => {
                let model = res.data.data;
                this.setState({title: model.title});
            })
        }
    };
    componentDidMount() {
        axios.get(`brands`,{
            params: {
                limit: 250
            }
        }).then(res => {
            this.setState({brandsData: res.data.data});
        });
    };
    handleChangeMakeName = (e) => {
        this.setState({brand: e.currentTarget.value})
    };
    handleChangeModelName = (e) => {
        this.setState({title: e.currentTarget.value})
    };

    handleChangeModelImage = (e) => {
        let reader = new FileReader();
        let self = this;
        reader.readAsDataURL(e.currentTarget.files[0]);
        reader.onload = function () {
            self.setState({image: reader.result})
        };
    };

    handleSubmitModel = (e) => {
        e.preventDefault();
        let ModelData = new FormData();
        const {brand, title, image} = this.state;
        ModelData.set ('title', title);
        ModelData.set ('brand', brand);
        ModelData.append ('image', image);
        if(this.props.match.params.id){
            axios.put(`/models/${this.props.match.params.id}`, ModelData).then(res => {
                console.log(res);
                console.log(res.data);
            })
        } else {
            axios.post (`/models`, ModelData).then(res =>{
                console.log(res);
                console.log(res.data);
                alert('Вы успешно добавили');
            })
        }
    };

    render() {
        const {brand, title, brandsData} = this.state;
        return (
            <div className="uk-container">
                <form onSubmit={this.handleSubmitModel}>
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">Добавить модель машины</legend>
                            <div className="uk-margin">
                                <select className="uk-select" value={brand} onChange={this.handleChangeMakeName} >
                                    {
                                        brandsData.map(brandsData => {
                                            return <SelectTemplate key={brandsData.id} {...brandsData} />
                                        })
                                    }
                                </select>
                            </div>
                            <div className="uk-margin">
                                <input onChange={this.handleChangeModelName} value={title} type="text" className="uk-input" name="model" id="model" placeholder="Наименование модели"/>
                            </div>
                            <div className="uk-margin">
                                <div uk-form-custom="target:true">
                                    <input onChange={this.handleChangeModelImage} type="file" id="file"/>
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

export default Addmodel;