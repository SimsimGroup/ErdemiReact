import React from 'react';
import axios from 'axios';
import {SelectTemplate} from "./selecttemplate";

class Addgood extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collectionsData: [],
            brandsData: [],
            modelData: [],
            title: '',
            collection_id: 1,
            type: '',
            model: '',
            price: '',
            description: '',
            selectedImg: null,
        }
        if (this.props.match.params.id) {
            axios.get(`products/${this.props.match.params.id}`, {}).then(res => {
                let product = res.data.data;
                this.setState({title: product.title});
                this.setState({collection_id: parseInt(product.collection_id)});
                this.setState({type: product.type});
                this.setState({model: product.model});
                this.setState({price: product.price});
                this.setState({description: product.description});
                this.setState({selectedImg: product.image_url});
            });
        }
    }

    componentDidMount() {
        axios.get(`collections`, {
            params: {
                limit: 250
            }
        }).then(res => {
            this.setState({collectionsData: res.data.data})
        });
        axios.get(`brands`, {
            params: {
                limit: 250
            }
        }).then(res => {
            this.setState({brandsData: res.data.data})
        });
        axios.get(`models`, {
            params: {
                limit: 250
            }
        }).then(res => {
            this.setState({modelData: res.data.data})
        });
    };

    handleChangeName = (e) => {
        this.setState({title: e.currentTarget.value})
    };

    handleChangeGroup = (e) => {
        this.setState({collection_id: e.currentTarget.value})
    };

    handleChangeType = (e) => {
        this.setState({type: e.currentTarget.value})
    };

    handleChangeMake = (e) => {
        this.setState({brand: e.currentTarget.value});
        axios.get(`models`, {
            params: {
                limit: 250,
                brand_id:e.currentTarget.value
            }
        }).then(res => {
            this.setState({modelData: res.data.data})
        });
    };

    handleChangeModel = (e) => {
        this.setState({model: e.currentTarget.value})
    };

    handleChangePrice = (e) => {
        this.setState({price: e.currentTarget.value})
    };

    handleDescript = (e) => {
        this.setState({description: e.currentTarget.value})
    };
    handleImg = (e) => {
        let reader = new FileReader();
        let self = this;
        reader.readAsDataURL(e.currentTarget.files[0]);
        reader.onload = function () {
            self.setState({selectedImg: reader.result})
        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let GoodData = new FormData();
        const { title, collection_id, type, model, price, description,selectedImg  } = this.state;
        GoodData.set('title', title);
        GoodData.set('collection_id', collection_id);
        GoodData.set('type', type);
        GoodData.set('model', model);
        GoodData.set('price', price);
        GoodData.set('description', description);
        GoodData.append('image', selectedImg);
        if (this.props.match.params.id) {
            axios.put(`/products/${this.props.match.params.id}`, GoodData).then(res => {
                console.log(res);
                console.log(res.data);
            })
        } else {
            axios.post(`/products`, GoodData).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
    };
    
    render() {
        const { collectionsData, title, brandsData, modelData, collection_id, type, brand, model, price, description } = this.state;
        return(
            <div className="uk-container">
            <form className="uk-form" onSubmit={this.handleSubmit}>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Добавить запчасть</legend>
                    <div className="uk-margin">
                        <input onChange={this.handleChangeName} value={title} type="text" className="uk-input" placeholder="Наименование запчасти"/>
                    </div>
                    <div className="uk-margin">
                        <select onChange={this.handleChangeGroup} value={collection_id} name="category" className="uk-select">
                            {
                                collectionsData.map(data => {
                                    return <SelectTemplate key={data.id} {...data}/>
                                })
                            }
                        </select>
                    </div>
                    <div className="uk-margin">
                        <select onChange={this.handleChangeType} value={type} name="type" className="uk-select">
                            <option value="car">Легковая</option>
                            <option value="truck">Грузовая</option>
                        </select>
                    </div>
                        <div className="uk-grid-small uk-margin" data-uk-grid>
                            <div className="uk-width-1-2@m">
                                <select onChange={this.handleChangeMake} value={brand} className="uk-select">
                                    {
                                        brandsData.map(brandsData => {
                                            return <SelectTemplate key={brandsData.id} {...brandsData}/>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="uk-width-1-2@m">
                                <select onChange={this.handleChangeModel} value={model} className="uk-select">
                                    {
                                        modelData.map(modelData => {
                                            return <SelectTemplate key={modelData.id} {...modelData}/>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    <div className="uk-margin">
                        <input onChange={this.handleChangePrice} value={price} type="text" name="price" id="price" className="uk-input" placeholder="Цена"/>
                    </div>
                    <div className="uk-margin">
                        <textarea onChange={this.handleDescript} value={description} id="descript" name="descript" cols="0" rows="5" className="uk-textarea" placeholder="Описание"/>
                    </div>
                    <div className="uk-margin">
                        <div data-uk-form-custom="target:true">
                            <input type="file" id="file" onChange={this.handleImg}/>
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

export default Addgood;