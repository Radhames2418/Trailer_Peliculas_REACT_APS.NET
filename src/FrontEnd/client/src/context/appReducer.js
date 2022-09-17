import {
    LOGIN,
    LOGOUT,
    GET_ALL_TRAILERS,
    CREATE_TRAILER,
    UPDATE_TRAILER,
    DELETE_TRAILER,
    SET_CURRENT,
} from '../util/types';

export default (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoged: true,
                token: action.payload.item1,
                user: action.payload.item2,
            };

        case LOGOUT:
            return {
                ...state,
                isLoged: false,
                token: null,
                user: null,
            };

        case GET_ALL_TRAILERS:
            return {
                ...state,
                trailers: action.payload,
            };

        case CREATE_TRAILER:
            return {
                ...state,
                trailers: [action.payload, ...state.trailers],
            };

        case UPDATE_TRAILER:
            return {
                ...state,
                trailers: state.trailers.map((trailer) =>
                    trailer.id === action.payload.id ? action.payload : trailer
                ),
            };

        case DELETE_TRAILER:
            return {
                ...state,
                trailers: state.trailers.filter(
                    (trailer) => trailer.id !== action.payload
                ),
            };

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};
