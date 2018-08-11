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
		name: 'David'
	},
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
};

class PlaylistCounter extends Component {
	render() {
		return (
			<div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
				<h2>{this.props.playlists.length} playlists</h2>
			</div>
		);
	}
}
class HoursCounter extends Component {
	render() {
		let allSongs = this.props.playlist.reduce((songs, eachPlaylist) => {
			return songs.concat(eachPlaylist.songs)
		}, [])
		
		return (
			<div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
				<h2>{allSongs.length} hours</h2>
			</div>
		);
	}
}

class Filter extends Component {
	render () {
		return (
		<div style={{defaultStyle}}>
			<img/>
			<input type="text"/>
		</div>
		);
	}
}

class Playlist extends Component {
	render () {
		return (
			<div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
				<img />
				<h3>Playlist</h3>
				<ul><li>song</li><li>song</li><li>song</li></ul>
			</div>
		);
	}
}

export default class Home extends Component {
	constructor() {
		super();
		this.state = {serverData: {}}
	}
	componentDidMount() {
		setTimeout(() => {
		this.setState({serverData: fakeServerData});
	}, 1000);
	}
    render() {
        return (
			<div className="App">
				{this.state.serverData.user ?
				<div>
			    <h1 style={{...defaultStyle, 'fontSize': '54px'}}>	
				 {this.state.serverData.user.name}'s Customs Vision
				</h1>
					<PlaylistCounter playlists={this.state.serverData.user.playlists}/>
					<HoursCounter/>
				<Filter/>
				<Playlist/>
				<Playlist/>
				<Playlist/>
				<Playlist/>
			</div> : <h1 style={defaultStyle}>Loading Logo</h1>
			// <img src={logo}/>
			}
			</div>
        );
    }
}