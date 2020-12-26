import React, {} from 'react';
import {connect} from "react-redux";
import {setFlash} from "./actions/commonActions";

const Other = ({flash, setFlash}) => {
	return (
		<div>
			Other : {flash}
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

export default connect(mapStateToProps, mapDispatchToProps)(Other);