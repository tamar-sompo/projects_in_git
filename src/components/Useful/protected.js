

import React, { useState, useEffect, useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom';
// import configData from '../config.json'
import { useDispatch, useSelector } from 'react-redux';


function redirectToLogin(routes) {
    window.location.href = routes ?
        `https://dev.accounts.codes/finance/login?routes=${routes}` :
        `https://dev.accounts.codes/finance/login`;
    return null
}
const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let routes = rest.computedMatch.params.nameVideo;
    // let userName = rest.computedMatch.params.userName;
    const userName = useSelector(state => state.publicReducer.userName);
    console.log("uuuuuuuuuuuuusername", userName)
    useEffect(() => {
        console.log("useEffectProtected")
        const isLocal = window.location.hostname == "localhost"
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
            if (response.status == 401) {
                console.log("useEffectProtected2")
                setIsLoading(false)
                setIsLoggedIn(true)
            }
            else {
                console.log("useEffectProtected1")
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