import React from 'react';
import Message from './message'
import '../App.css';

class AddItem extends React.Component {

    state = {
        valueInput: '',
        message: {
            show: false,
            tekst: '',
            alert: ''
        }      
    }

    setInputValue = (e) =>  this.setState({valueInput: e.target.value})

    add = () => {
        const text = this.state.valueInput;
        let alert;

        if(text !== '' && text.length > 5)
        {
            this.props.addItem(text);
            this.setState({valueInput: ''})
            alert = this.alert('Pomyślnie dodano element', 'success');
            this.setState({message: alert})
            this.alertHidden()
        }else{
            alert = this.alert('Nie można dodać zadania', 'danger');
            this.setState({message: alert})
            this.alertHidden()
        }

    }

    alert = (tekst, alert) => {
        const message = this.state.message;
        message.show = !message.show;
        message.tekst = tekst;
        message.alert = alert;
        return message;
    }

    alertHidden = () => {
        const message = this.state.message;
        if(message.show)
            setTimeout(() => {
                message.show = !message.show;
                this.setState({message: alert})
        }, 1000)    
    }

    render(){

        return(
            <div className="container">
                <div className="form">
                    <input className="form__input" value={this.state.valueInput} onChange={this.setInputValue} />
                    <button className="btn btn__addItem btn--primary" onClick={this.add}><i className="fas fa-plus"></i></button>
                </div>
                <Message message={this.state.message}/>
            </div>
        )
    }
}

export default AddItem;