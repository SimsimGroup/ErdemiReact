import React from 'react';
import axios from 'axios';

class Addpromo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            name: '',
            title: '',
            image: [],
            product_title: '',
            product_id: 0,
        };
    }
    handleImg = (e) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.currentTarget.files[0]);
      reader.onload = () => {
          this.setState({image: reader.result})
      }
    };
    handleSubmitPromo = (e) => {
        e.preventDefault();
        let PromoData = new FormData();
        const {name, title, image, product_id} = this.state;
        PromoData.set('name', name);
        PromoData.set('title', title);
        PromoData.set('enabled', 1);
        PromoData.set('image', image);
        PromoData.set('product_id', product_id);
        axios.post(`promos`, PromoData).then(res => {
            alert('Успешно добавлено');
            console.log(res);
            console.log(res.data);
        })
    };
    handleChangeName = (e) => {
        this.setState({name: e.currentTarget.value})
    };
    handleChangeTitle = (e) => {
        this.setState({title: e.currentTarget.value})
    };
    handleChangeFilter = (e) => {
        let self = this;
        axios.get(`products`, {
            params: {
                filter: e.currentTarget.value,
                limit: 10
            }
        }).then(res => {
            self.setState({products: res.data.data});
        })
    };
    selectProduct = (e) => {
        this.setState({product_id: e.currentTarget.dataset.id});
    };
    render() {
        const { name, title, products, product_title, product_id } = this.state;
        const rows = products.map((props,index) => (
            <tr key={props.id}>
                <td onClick={this.selectProduct} data-id={props.id}>{props.title}</td>
            </tr>
        ));
        return(
            <div className="uk-container">
                <form onSubmit={this.handleSubmitPromo}>
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">Добавить акционный товар</legend>
                        <div className="uk-margin">
                            <input onChange={this.handleChangeName} value={name} type="text" className="uk-input" placeholder="Название акции (для админа)"/>
                        </div>
                        <div className="uk-margin">
                            <input onChange={this.handleChangeTitle} value={title} type="text" className="uk-input" placeholder="Название акции (для клиентов)"/>
                        </div>
                        <div className="uk-margin">
                            <input type="hidden" value={product_id}/>
                            <input  onChange={this.handleChangeFilter} type="text" className="uk-input" placeholder="Выберите продукт"/>
                            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                                <table className="uk-table">
                                    <tbody>
                                    {rows}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div data-uk-form-custom="target:true">
                                <input type="file" onChange={this.handleImg}/>
                                <input type="text" className="uk-input uk-text-center uk-form-width-large uk-height-small" placeholder="Добавить фото"/>
                            </div>
                        </div>
                        <button type="submit" className="uk-button uk-button-primary uk-button-small uk-width-1-5@m">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Addpromo;