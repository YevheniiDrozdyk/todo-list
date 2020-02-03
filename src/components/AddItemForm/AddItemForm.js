import React, {Component} from 'react';
import "./styles.css";

export default class AddItemForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    };

    onSubmit = (event) => {
        const {onAdded} = this.props;
        event.preventDefault();
        onAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className='item-add-form'
                  onSubmit={this.onSubmit}>
                <input type='text'
                       className='form-container'
                       onChange={this.onLabelChange}
                       placeholder='What should be done?'
                       value={this.state.label}/>
                <button
                    className='btn btn-outline-secondary'
                >Add Item
                </button>
            </form>
        );
    }

}