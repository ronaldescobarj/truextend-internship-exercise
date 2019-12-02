import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    render() {
        return (
            <div>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Buscar</Form.Label>
                    <Form.Control type="text" placeholder="Filtro" />
                </Form.Group>
                <Button variant="primary">Buscar</Button>
            </div>
        )
    }
}

export default SearchField;