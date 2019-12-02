import React from 'react';
import Card from 'react-bootstrap/Card'

const Album = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageUrl} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.artist}
                    </Card.Text>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Album;