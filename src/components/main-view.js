import React from 'react';
import AlbumsList from './albums-list';
import SearchField from './search-field';

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [
                {
                    trackName: 'Sgt peppers',
                    artistName: 'The Beatles',
                    trackPrice: '20$'
                },
                {
                    trackName: 'Unknown Pleasures',
                    artistName: 'Joy Division',
                    trackPrice: '15$'
                },
            ]
        }
        this.updateResults = this.updateResults.bind(this);
    }

    updateResults(albums) {
        console.log(albums);
        this.setState({ albums });
    }

    render() {
        return (
            <div>
                <div>Vista principal</div>
                <SearchField updateResults={this.updateResults}></SearchField>
                <AlbumsList albums={this.state.albums}></AlbumsList>
            </div>   
        )
    }
}

export default MainView;