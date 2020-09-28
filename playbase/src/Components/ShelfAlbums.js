import React, { Component } from 'react'


class ShelfAlbums extends Component {

    spotify_id = this.props.album.spotify_id
    albumURI = `spotify:album:${this.spotify_id}`

    handleClick = () => {
        this.props.setDisplayPlayer(this.albumURI)
    }
    render() {
        let album = this.props.album
        return (
            <div className="album">
                <h3>{album.name}</h3>
                <h4>{album.artist}</h4>
                <img src={album.image_url} />
                <button onClick={this.handleClick}>Play Album</button> 
            </div>
        )
    }
}

export default ShelfAlbums