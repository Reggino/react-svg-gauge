import React, { Component } from 'react';

export default class JustGage extends Component {
	static defaultProps = {
		label: "React SVG Gauge",
		min: 0,
		max: 100,
		value: 40,
		width: 400,
		height: 320
	};

	_getPath(value) {
		var dx = 0;
		var dy = 0;
		var gws = 1;

		var alpha = (1 - (value - this.props.min) / (this.props.max - this.props.min)) * Math.PI;
		var Ro = this.props.width / 2 - this.props.width / 10;
		var Ri = Ro - this.props.width / 6.666666666666667;

		var Cx = this.props.width / 2 + dx;
		var Cy = this.props.height / 1.25 + dy;

		var Xo = this.props.width / 2 + dx + Ro * Math.cos(alpha);
		var Yo = this.props.height - (this.props.height - Cy) - Ro * Math.sin(alpha);
		var Xi = this.props.width / 2 + dx + Ri * Math.cos(alpha);
		var Yi = this.props.height - (this.props.height - Cy) - Ri * Math.sin(alpha);

		var path = "M" + (Cx - Ri) + "," + Cy + " ";
		path += "L" + (Cx - Ro) + "," + Cy + " ";
		path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
		path += "L" + Xi + "," + Yi + " ";
		path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
		path += "Z ";

		return path;
	}

	render() {
		return (
				<svg height="100%" version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" style={{width: this.props.width, height: this.props.height, overflow: 'hidden', position: 'relative', left: 0, top: 0}}>
					<defs style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>
						<filter id="g3-inner-shadow">
							<feOffset dx="0" dy="3" />
							<feGaussianBlur result="offset-blur" stdDeviation="5" />
							<feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
							<feFlood flood-color="black" flood-opacity="0.2" result="color" />
							<feComposite operator="in" in="color" in2="inverse" result="shadow" />
							<feComposite operator="over" in="shadow" in2="SourceGraphic" />
						</filter>
					</defs>
					<path fill="#edebeb" stroke="none" d={this._getPath(this.props.max)} style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} filter="url(#g3-inner-shadow)" />
					<path fill="#fe0400" stroke="none" d={this._getPath(this.props.value)} style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} filter="url(#g3-inner-shadow)" />
					<text x= {this.props.width / 2} y="49.23076923076923" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#999999" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", textAnchor: "middle", fontStyle: "normal",fontVariant: "normal", fontWeight: 'bold', fontStretch: 'normal', fontSize: 32, lineHeight: 'normal', fontFamily: "Arial", fillOpacity: 1}}>
						<tspan dy="11.012019230769234" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>{ this.props.label }</tspan>
					</text>
					<text x= {this.props.width / 2} y="228.57142857142858" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#010101" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", textAnchor: "middle", fontStyle: "normal", fontVariant: "normal", fontWeight: 'bold', fontStretch: 'normal', fontSize: 50, lineHeight: 'normal', fontFamily: "Arial", fillOpacity: 1}} font-size="50px" font-weight="bold" font-family="Arial" fill-opacity="1">
						<tspan dy="17.008928571428584" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>{ this.props.value }</tspan>
					</text>
					<text x= {this.props.width / 2} y="259.57142857142856" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#b3b3b3" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", textAnchor: "middle", fontStyle: "normal",fontVariant: "normal", fontWeight: 'normal', fontStretch: 'normal', fontSize: 20, lineHeight: 'normal', fontFamily: "Arial", fillOpacity: 1}} font-size="20px" font-weight="normal" font-family="Arial" fill-opacity="1">
						<tspan dy="259.57142857142856" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} />
					</text>
					<text x="70" y="283.99999999999994" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#b3b3b3" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", textAnchor: "middle", fontStyle: "normal",fontVariant: "normal", fontWeight: 'normal', fontStretch: 'normal', fontSize: 20, lineHeight: 'normal', fontFamily: "Arial", fillOpacity: 1}} font-size="20px" font-weight="normal" font-family="Arial" fill-opacity="1">
						<tspan dy="6.999999999999943" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>0</tspan>
					</text>
					<text x="330" y="283.99999999999994" text-anchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#b3b3b3" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", textAnchor: "middle", fontStyle: "normal",fontVariant: "normal", fontWeight: 'normal', fontStretch: 'normal', fontSize: 20, lineHeight: 'normal', fontFamily: "Arial", fillOpacity: 1}} font-size="20px" font-weight="normal" font-family="Arial" fill-opacity="1">
						<tspan dy="6.999999999999943" style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>100</tspan>
					</text>
				</svg>
		);
	}
}