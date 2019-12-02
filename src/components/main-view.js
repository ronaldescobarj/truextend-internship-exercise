import React from 'react';
import AlbumsList from './albums-list';

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [
                {
                    name: 'Sgt peppers',
                    artist: 'The Beatles',
                    price: '20$'
                },
                {
                    name: 'Unknown Pleasures',
                    artist: 'Joy Division',
                    price: '15$'
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <div>Vista principal</div>
                <AlbumsList albums={this.state.albums}></AlbumsList>
            </div>   
        )
    }
}

export default MainView;