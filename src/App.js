import React, { Component } from 'react';
import JustGage from './JustGage';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			value: 50
		}
	}

	onChange = (e) => {
		this.setState({ value: parseInt(e.target.value, 10) });
	};

	render() {
		return (
			<div>
				<JustGage value={this.state.value}  width={400} height={320} />
				<div>
					<input style={{ width: 400 }}type="range" min="0" max="100" value={this.state.value} onChange={this.onChange} />
				</div>
			</div>
		);
	}
}
