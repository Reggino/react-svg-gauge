import React, { Component } from 'react';
import Gauge from '../src/Gauge';

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
				<Gauge value={this.state.value} width={400} height={320} label="This is a big one" />
				<div>
					<input style={{ width: 400 }}type="range" min="0" max="100" value={this.state.value} onChange={this.onChange} />
				</div>
				<Gauge value={this.state.value} width={200} height={160} label="This is a smaller one" color="#123456" />
			</div>
		);
	}
}
