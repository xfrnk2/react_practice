const initialsState = { // 초기값
	flash: null,
	loading: false
};

export default (state = initialsState, action) => {
	switch (action.type) {
		default:
			return state;
		
		{/*
        	action.type이 "SET_POP"이라면:oi
            action에 담겨온 data(payload)값을 pop이라는 state에 담겠다는 얘기
        */}
		case "SET_FLASH":
			return {
				...state,
				flash: action.payload
			};
	}
}