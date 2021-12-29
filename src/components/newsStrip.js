import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ArrowUp } from "../assets/images";
import { baseUrl } from './api';


export const NewsStrip = ({ storyId, storyNumber }) => {
    const [story, setStory] = useState();
    useEffect(() => {
        axios.get(`${baseUrl}item/${storyId}.json?print=pretty`).then((res) => setStory(res.data)).catch((error) => console.log(error))
    }, [storyId])

    return (
        <>
            <a href={story?.url}>  
                <div className="d-flex justify-content-start mt-2 news">
                    <span className="text-muted news_number">{++storyNumber}</span>
                    <img src={ArrowUp} alt="" className="mx-1" />
                    <div>
                        <span className="d-flex">
                            <p className="m-0 pe-2">
                                {story?.title || "No Title"}
                            </p>
                        </span>
                        <small className="text-muted">
                            By: {story?.by}
                        </small>
                    </div>
                </div>
            </a>
        </>
    )
}
