import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import {store} from "./redux/store";
import ConnectedApp from "./app";

const ReduxApp = () => {
    return <Provider store={store}>
        <ConnectedApp/>
   

    </Provider>
}


createRoot( document.getElementById('root')).render(<ReduxApp/>);