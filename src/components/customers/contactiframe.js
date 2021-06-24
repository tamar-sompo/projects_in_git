import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Contactsiframe(props) {
    const userName = useSelector(state => state.publicReducer.userName);

    return (
        <>
            <iframe style=
                {{ width: "100%", height: "100%" }} src={`https://contacts.dev.leader.codes/${userName}?iframe=true`}></iframe>
‏
        </>
    )
}