import React from "react";
import {useSelector} from "react-redux";
import {selectLogin} from "../store/dataSlice";

function Profile() {

    const nameStore = useSelector(selectLogin);

    return(
        <>
            <h1>Holla, {nameStore} !!!</h1>
        </>
    );

}

export default Profile;