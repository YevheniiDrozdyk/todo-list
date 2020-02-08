import React, {Component} from "react";
import "./styles.css";

export default class SearchPanel extends Component {

    onSearchTermChange = (event) => {
        const {onFiltered} = this.props;
        onFiltered(event.target.value);
    };

    render() {
        return (
            <input
                className='search-input'
                placeholder="search"
                onChange={this.onSearchTermChange}
            />
        );
    }
};