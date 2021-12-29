import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { AskView } from './views/askView';
import { Home } from './views/home';
import { JobsView } from './views/jobsView';
import { NewView } from './views/newView';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/new" element={<NewView />}></Route>
                <Route path="/ask" element={<AskView />}></Route>
                <Route path="/jobs" element={<JobsView />}></Route>
                <Route path={"*"} element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}

