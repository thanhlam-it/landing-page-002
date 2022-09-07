import React, { useEffect } from "react";

import WOW from 'wowjs';

const PageNotFound = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);

    return <div>
        <header>
            {/* <NavBar /> */}
            <div class="container">
                <div class="row justify-content-center align-items-center h-100">
                    {/* <img height={300} width={500} src={require('../../assets/img/errors/404_error.jpg')} alt="" /> */}
                </div>
            </div>
        </header>
    </div>
};

export default PageNotFound;
