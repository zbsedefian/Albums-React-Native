import React, { Component } from "react";
import { View } from "react-native";
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  constructor(props) {
    super(props)
    this.state = { albums: [] }

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => { this.setState({ albums: data }) })
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    )
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
