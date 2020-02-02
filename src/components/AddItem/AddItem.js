import React, {Component} from 'react';
import "./styles.css";

export default class AddItem extends Component {

    render() {
        const { onAdded } = this.props;
        return (
            <div className='item-add-form'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={onAdded}
                >Add Item
                </button>
            </div>
        );
    }

}