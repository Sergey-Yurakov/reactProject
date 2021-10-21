import React, {createRef} from "react";
import {useSelector} from "react-redux";
import {selectLogin, selectPass} from "../store/dataSlice";

function Main() {

    //This refs
    let login = createRef(),
        password = createRef(),
        butt = createRef();

    //This data in store
    const nameStore = useSelector(selectLogin),
        passwordStore = useSelector(selectPass);



    function inputHandler() {
        let name = login.current.value.trim(),
            pass = +password.current.value.trim();

        if (name === nameStore && pass === passwordStore) {
             butt.current.removeAttribute("disabled");
        } else {
            butt.current.setAttribute("disabled", "disabled");
        }
    }


    return (
        <>
            <h1>Тестовое задание</h1>
            <div className='row'>
                <div className='input-field col s6'>
                    <form action="/profile">
                        <input id='name' type="text" ref={login} onChange={inputHandler}/>
                        <input type="text" ref={password} onChange={inputHandler}/>
                        <button ref={butt} disabled>Войти</button>
                    </form>
                </div>
            </div>

        </>
    );

}

export default Main;