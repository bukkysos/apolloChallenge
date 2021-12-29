import React, { useEffect, useState } from 'react'
import { NewsStrip } from '../../components';
import { getStoryIds } from '../../components/api';


export const NewView = () => {
  const [news, setNews] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setNews(data.data))
      }, []);

    return (<>
        {news?.map((story, index) => (
            <React.Fragment key={index}>
              <NewsStrip storyId={story} storyNumber={index}/>
            </React.Fragment>
          ))}
          </>
    )
}