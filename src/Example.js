import React, {} from 'react';
import {connect} from "react-redux";
import {setFlash} from "./actions/commonActions";

const Example = ({flash, setFlash}) => {
	return (
		<div>
			Example: {flash}
			
			<button onClick={() => setFlash("변경된 메세지")}>메세지 전달</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		flash: state.common.flash
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFlash: (data) => {
			dispatch(setFlash(data))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);