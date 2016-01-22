var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
	render: function() {
		return (
			<div className="App">
			Hello, world! I am a Tewy.
			</div>
		)
	}
}) 

ReactDOM.render(<App />, document.getElementById('app'));