import React from 'react';
import Album from './album';

const AlbumsList = ({ albums }) => {
    return (
        <div>
            {albums.map((album) => {
                return (
                    <Album name={album.name} artist={album.artist} price={album.price}></Album>
                )
            })}
        </div>
    );
}

export default AlbumsList;