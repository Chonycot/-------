import React from "react";
import { Route, Routes} from "react-router";

const RouterMenu = () => {
    return (
        <Routes>
            <Route path="/home" component={null}/>
            <Route path="/tasks" component={<TaskManager/>}/>
        </Routes>
    );
};

export default RouterMenu;