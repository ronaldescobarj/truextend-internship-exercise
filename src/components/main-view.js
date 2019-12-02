import React from 'react';
import AlbumsList from './albums-list';
import SearchField from './search-field';

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            firstTime: true
        }
        this.updateResults = this.updateResults.bind(this);
    }

    updateResults(albums) {
        this.setState({ firstTime: false, albums });
    }

    render() {
        const { firstTime, albums } = this.state;
        return (
            <div>
                <div>Vista principal</div>
                <SearchField updateResults={this.updateResults}></SearchField>
                {firstTime ? <p>Aquí se mostrarán los resultados de búsqueda</p> :
                    <AlbumsList albums={albums}></AlbumsList>}
            </div>
        )
    }
}

export default MainView;