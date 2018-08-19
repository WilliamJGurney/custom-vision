import React, { Component } from 'react';
import logo from '../Assets/images/logo.svg';
import '../../App.css';

import { Grid, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let defaultStyle = {
	color: '#hhh'
};
let fakeServerData = {
	user: {
		name: 'Will',
	    playlists: [
	     {
		name: 'tezos',
		songs: 
			[{name:'altcoin', duration: 1345}, 
			{name:'treecoin', duration: 1236}, 	
			{name:'circlecoin', duration: 7000}] 
	},
	{
		name: 'iota',
		songs: 
			[{name:'altcoin', duration: 1345}, 
			{name:'treecoin', duration: 1236}, 	
			{name:'circlecoin', duration: 7000}] 
	},
	{
		name: 'ripple',
		songs: 
			[{name:'altcoin', duration: 1345}, 
			{name:'treecoin', duration: 1236}, 	
			{name:'circlecoin', duration: 7000}]
	    }
       ]
	}
};

class PlaylistCounter extends Component {
	render() {
		return (
			<div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
				<h2>{this.props.playlists.length} playlists</h2>
			</div>
		);
	}
}
// class HoursCounter extends Component {
// 	render() {
// 		let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
// 			return songs.concat(eachPlaylist.songs)
// 		}, [])
// 		let totalDuration = allSongs.reduce((sum, eachSong) => {
// 			return sum + eachSong.duration
// 		  }, 0)
// 		return (
// 			<div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
// 			<h2>{Math.round(totalDuration/60)} hours</h2>
// 			</div>
// 		);
// 	}
// }

class Filter extends Component {
	render () {
		return (
		<div style={{defaultStyle}}>
			<img/>
			<input type="text" onKeyUp={event => 
				this.props.onTextChange(event.target.value)}/>
		</div>
		);
	}
}

class Playlist extends Component {
	render() {
	  let playlist = this.props.playlist
	  return (
		<div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
		  <img />
		  <h3>{playlist.name}</h3>
		  <ul>
			{playlist.songs.map(song => 
			  <li>{song.name}</li>
			)}
		  </ul>
		</div>
	  );
	}
  }
  

export default class Home extends Component {
	constructor() {
		super();
		this.state = {serverData: {},
		filterString: ''
	}
}
	componentDidMount() {
		setTimeout(() => {
		this.setState({serverData: fakeServerData});
	}, 1000);
	}
    render() {	
		.filter(playlist =>
			playlist.name.toLowerCase().includes(
        return (
			<div className="App">
				{this.state.serverData.user ?
				<div>
			    <h1 style={{...defaultStyle, 'fontSize': '54px'}}>	
				 {this.state.serverData.user.name}'s Customs Vision
				</h1>
				<PlaylistCounter playlists={playlistToRender}/>
				{/* <HoursCounter playlists={this.state.serverData.user.playlists}/> */}
				<Filter onTextChange={text => {
					this.setState({filterString: text})}
					}/>
				{playlistToRender.map(playlist => 
					<Playlist playlist={playlist} />
				)}
				</div> : <h1 style={defaultStyle}>Loading...</h1>
				}
			</div>
        );
    }
}