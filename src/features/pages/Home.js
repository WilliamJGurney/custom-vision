import React, { Component } from 'react';
import logo from '../Assets/images/logo.svg'
// import { div, Image, Text, StyleSheet } from "react-native"
import { Grid, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { strings } from "./../Locales/i18n"

export default class Home extends Component {
    render() {
        return (
			<div>
				<header>
					<img src={logo} />
					<h1>Customs Vision</h1>
				</header>
			</div>
        )
    }
}