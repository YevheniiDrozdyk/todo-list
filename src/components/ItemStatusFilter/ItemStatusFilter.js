import React, {Component} from 'react';
import './styles.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {
        const {filter, onFiltered} = this.props;

        const elements = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const buttonClass = `btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`;

            return (
                <button
                    type="button"
                    className={buttonClass}
                    key={name}
                    onClick={() => onFiltered(name)}>{label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {elements}
            </div>
        );
    }
}
