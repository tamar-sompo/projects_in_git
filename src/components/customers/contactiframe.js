import React from 'react';
import { useSelector } from 'react-redux';


export default function Contactsiframe(props) {
    const userName = useSelector(state => state.publicReducer.userName);

    return (
        <>
            <iframe title="myFrame" style=
                {{ width: "100%", height: "100%" }} src={`https://contacts.dev.leader.codes/${userName}?iframe=true`}>
            </iframe>‏
        </>
    )
}