import React, { useReducer, useEffect } from 'react';
import setAuthToken from '../util/setAuthToken';
import axios from 'axios';
import AppContext from './appContext';
import AppReducer from './appReducer';
import {
    LOGIN,
    LOGOUT,
    GET_ALL_TRAILERS,
    CREATE_TRAILER,
    UPDATE_TRAILER,
    DELETE_TRAILER,
    SET_CURRENT,
} from '../util/types';

const AppState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        user: null,
        isLoged: false,
        trailers: [],
        current: null,
        errors: null,
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    setAuthToken(state.token);

    useEffect(() => {
        setAuthToken(state.token);
    }, [state.token]);

    const login = async (formData) => {
        try {
            const res = await axios.post(
                'https://localhost:5001/api/Auth/login',
                formData
            );
            dispatch({
                type: LOGIN,
                payload: res.data,
            });
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const logout = () => {
        dispatch({ type: LOGOUT });
    };

    const getTrailers = async (trailerName) => {
        try {
            console.log(
                `https://localhost:5001/api/Trailers/getall?filters=${trailerName}`
            );
            const res = await axios.get(
                `https://localhost:5001/api/Trailers/getall?filters=${trailerName}`
            );
            dispatch({
                type: GET_ALL_TRAILERS,
                payload: res.data,
            });
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const setCurrent = (id) => {
        const res = state.trailers.filter((trailer) => trailer.id === id);
        dispatch({
            type: SET_CURRENT,
            payload: res,
        });
    };

    const createTrailer = async (trailer) => {
        try {
            const url = 'https://localhost:5001/api/Trailers';
            const formData = new FormData();
            for (var key in trailer) {
                formData.append(key, trailer[key]);
            }
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };
            const res = await axios.post(url, formData, config);

            dispatch({
                type: CREATE_TRAILER,
                payload: res.data,
            });
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const updateTrailer = async (trailer) => {
        try {
            const url = `https://localhost:5001/api/Trailers/${trailer.id}`;
            const formData = new FormData();
            for (var key in trailer) {
                formData.append(key, trailer[key]);
            }
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };
            const res = await axios.put(url, formData, config);

            dispatch({
                type: UPDATE_TRAILER,
                payload: res.data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTrailer = async (id) => {
        try {
            await axios.delete(`https://localhost:5001/api/Trailers/${id}`);

            dispatch({
                type: DELETE_TRAILER,
                payload: id,
            });
        } catch (err) {
            console.log(err.response.msg);
        }
    };

    return (
        <AppContext.Provider
            value={{
                user: state.user,
                isLoged: state.isLoged,
                trailers: state.trailers,
                current: state.current,
                login,
                logout,
                setCurrent,
                getTrailers,
                createTrailer,
                updateTrailer,
                deleteTrailer,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
