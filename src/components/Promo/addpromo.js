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
            product_id: '',
        }
        if(this.props.match.params.id) {
            axios.get(`products/${this.props.match.params.id}`, {}).then(res => {
                let product = res.data.data;
                this.setState({product_title: product.title})
            });
        }
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
        PromoData.append('image', image);
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
/*    handleChangeProductTitle = (e) => {
        this.setState({product_title: e.currentTarget.value})
    };*/
    render() {
        const { name, title, product_title } = this.state;
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
                            <input type="text" defaultValue={product_title} name="title" className="uk-input"/>
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