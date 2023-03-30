import React, { useEffect, useState } from 'react'

const API = "AIzaSyDDrTUfdgvybUTlqmbFqRvJ2YhtjCMuCjg"
const channelId = "UCLAv5A84nm6m-jlaGOwdSHA"
const playList = "PL-r3E32jP3_gKOOqWlC48E2rfr3YZIM2-"
var fetchUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playList}&part=snippet,id&order=date&maxResults=30`

export default function Auto() {
    const [allvideos, setAllvideos] = useState([]);
    useEffect(() => {
        fetch(fetchUrl).then((response) => response.json()).then((resJson) => {
            const result = resJson.items.map(doc => ({
                ...doc,
                Videolink: "https://www.youtube.com/embed/" + doc.snippet.resourceId.videoId//.videoId
            }));
            setAllvideos(result)
        })
    }, [])
    return (
        <div className='techpage'>
            <div className="headcon">
            <h1>Auto</h1>
            <p>Get ready to hit the road with our awesome auto playlist! We've got a sweet collection of videos that'll take you on a ride through the world of cars. From jaw-dropping reviews and test drives to crazy DIY hacks and maintenance tips, we've got everything you need to become a true gearhead. And that's not all - we'll bring you the hottest highlights from the biggest car shows and expos, and give you the lowdown on all the races and events that matter. Plus, our in-depth interviews with industry experts and car enthusiasts will take you behind the scenes and give you an exclusive look at the latest trends and innovations in the industry. So buckle up, grab your popcorn, and get ready for an adrenaline-fueled journey into the world of cars!</p>
            </div>
            {allvideos.map((item) => {
                return (
                    <a href={item.Videolink}>
                        <div className='card'>
                            <img src={item.snippet.thumbnails.high.url} width="200px" alt="" />
                            <div className="cardTitle">
                            <p>{item.snippet.title}</p>
                            <p>{item.snippet.description}</p>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}
