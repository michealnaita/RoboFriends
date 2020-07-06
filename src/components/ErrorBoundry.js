import React, {Compontent} from "react";

class ErrorBoundary extends Compontent {
	constructor(props){
		super(props);
		this.state{
			hasError:false

		}
	}

	 compontentDidCatch(error, info){
	 	this. setState({hasError:true})
	 }
	render(){
		if (this.state.hasError) {
			return <h1 className="tc">Ooops. that is not good</h1>
		}else{
			return this.props.children
		}
	}
}

export default ErrorBoundary;