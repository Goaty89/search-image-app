import React, { Component } from 'react';

export default class Search extends Component {
    state = { searchValue: '', isFilterByCategory: '' }

    onInputChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    onCheckboxChange = (event) => {
        this.setState({ isFilterByCategory: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onHandleSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label data-testid="search-title">Search:</label>
                <input 
                    type="text" 
                    data-testid="search-input"
                    value={this.state.searchValue} 
                    onChange={this.onInputChange} />
                    <div>
                        <label>Filter by:</label>
                        <input type="checkbox" name="filterByCategory" value="Category" onChange={this.onCheckboxChange} />Category
                    </div>
            </form>
        );
    }
}