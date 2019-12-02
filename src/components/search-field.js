import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

const BASE_URL = 'https://itunes.apple.com/search?term='

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFilter: '',
            results: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.createSearchQuery = this.createSearchQuery.bind(this);
        this.search = this.search.bind(this);
    }

    handleChange(event) {
        this.setState({ searchFilter: event.target.value });
    }

    createSearchQuery() {
        let rawSearchFilter = this.state.searchFilter;
        let lowercaseSearchFilter = rawSearchFilter.toLowerCase();
        let searchFilterForUrl = lowercaseSearchFilter.replace(' ', '+');
        let searchQuery = BASE_URL + searchFilterForUrl;
        return searchQuery;
    }

    async search() {
        let url = this.createSearchQuery();
        let results = await axios.get(url);
        let albums = results.data.results;
        this.props.updateResults(albums);
        this.setState({ results: albums });
    }

    render() {
        return (
            <div>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Buscar</Form.Label>
                    <Form.Control value={this.state.searchFilter} onChange={this.handleChange} type="text" placeholder="Filtro" />
                </Form.Group>
                <Button variant="primary" onClick={this.search}>Buscar</Button>
            </div>
        )
    }
}

export default SearchField;