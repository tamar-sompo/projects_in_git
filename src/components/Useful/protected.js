import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
// import configData from '../config.json'
import { useSelector } from 'react-redux';
import keys from '../../config/env/keys';


function redirectToLogin(routes) {
    window.location.href = routes ?
        `${keys.LOGIN_URL}?routes=${routes}` :
        `${keys.LOGIN_URL}`;
    return null
}
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let routes = rest.computedMatch.params.nameVideo;
    // let userName = rest.computedMatch.params.userName;
    const userName = useSelector(state => state.publicReducer.userName);
    useEffect(() => {
        const isLocal = window.location.hostname === "localhost"
        const url = `https://finance.leader.codes/${userName}/isPermission?isLocal=${isLocal}`;
        const isPermission = async () => {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: user,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            if (response.status === 401) {
                setIsLoading(false)
                setIsLoggedIn(true)
            }
            else {
                setIsLoading(false)
            }
        }
        isPermission()
    }, [])

    return isLoading ? null : isLoggedIn ?
        redirectToLogin(routes)
        : <Route {...rest} render={props => { return <Component {...rest} {...props} /> }} />
}
export default ProtectedRoute