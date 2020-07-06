import React from "react";

const Scroll = (props) =>{
	return (
        <div style={{overflowY:"scroll", height:"430px"}}>
         {props.children}
        </div>
		)
};

export default Scroll;