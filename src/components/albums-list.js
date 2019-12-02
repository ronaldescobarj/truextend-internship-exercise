import React from 'react';
import Album from './album';

const AlbumsList = ({ albums }) => {
    return (
        <div>
            {albums.map((album) => {
                return (
                    <Album
                        name={album.collectionCensoredName}
                        artist={album.artistName}
                        price={album.collectionPrice}
                        imageUrl={album.artworkUrl100}>

                    </Album>
                )
            })}
        </div>
    );
}

export default AlbumsList;