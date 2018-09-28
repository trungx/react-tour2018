/** this type is - function component
const Button = function(props) {
	return (
  	<button>GO</button>
  );
}**/
//this type is - class component
class Button extends React.Component {
	/*constructor(props) {
	    super(props);
	    this.state = {
		counter: 0,
	    };
	};*/
	state = {counter:0};
	handleClick = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	} 
	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.counter}
			</button>
		);
	}
}

ReactDOM.render(<Button label="Do" />,mountNode)
