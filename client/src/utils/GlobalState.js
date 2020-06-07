import React, { createContext, useReducer, useContext } from 'react';
import { ADD_SAVED, DELETE_SAVED, VIEW_BOOK, VIEW_RESULTS } from './actions';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_SAVED:
			return {
				...state,
				saved: [ action.save, ...state.saved ]
			};

		// case DELETE_SAVED:
		// 	return {
		// 		...state,
		// 		saved: state.saved.filter((save) => {
		// 			return save._id !== action._id;
		// 		})
		// 	};

		case VIEW_BOOK:
			return {
				...state,
				favorites: [ action.post, ...state.favorites ],
				loading: false
			};

		case VIEW_RESULTS:
			return {
				...state,
				results: [ action.result, ...state.results ]
			};

		default:
			return state;
	}
};

const StoreProvider = ({ value = [], ...props }) => {
	const [ state, dispatch ] = useReducer(reducer, {
		results: [],
		saved: []
	});

	return <Provider value={[ state, dispatch ]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
