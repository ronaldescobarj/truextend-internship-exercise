import React from 'react';
import Album from './album';
import CardGroup from 'react-bootstrap/CardGroup'

const AlbumsList = ({ albums }) => {
    return (
        <div>
            <CardGroup>
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
            </CardGroup>
        </div>
    );
}

export default AlbumsList;