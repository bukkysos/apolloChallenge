import React from 'react'
import "../../App.css";
import { Header } from '../../components/header';
import { NewView } from "../newView";

export const Home = () => {

    return (
        <div className="col-sm-12 col-md-12 col-lg-10 mx-auto mt-3 p-0 feed_wrapper">
            <Header />
            <NewView />
        </div>
    )
}