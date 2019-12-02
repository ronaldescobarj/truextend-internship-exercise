import React from 'react';
import Album from './album';

const AlbumsList = ({ albums }) => {
    return (
        <div>
            {albums.map((album) => {
                return (
                    <Album
                        name={album.trackName}
                        artist={album.artistName}
                        price={album.trackPrice}
                        imageUrl={album.artworkUrl100}>

                    </Album>
                )
            })}
        </div>
    );
}

export default AlbumsList;