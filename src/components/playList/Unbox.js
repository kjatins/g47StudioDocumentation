import React, { useEffect, useState } from 'react'

const API = "AIzaSyDDrTUfdgvybUTlqmbFqRvJ2YhtjCMuCjg"
const channelId = "UCLAv5A84nm6m-jlaGOwdSHA"
const playList = "PL-r3E32jP3_he2o9ecjcfG2roZg2YN6FY"
var fetchUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playList}&part=snippet,id&order=date&maxResults=10`
export default function Unboxing() {
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
            <h1>Unboxing</h1>
            <p>Welcome to our unboxing playlist - the place where you can see the latest products unboxed and explored! We know that the anticipation of getting a new product is half the fun, so we're here to share that excitement with you. In this playlist, we'll take you through unboxing and first impressions of the newest gadgets, tech, and lifestyle products. You'll see us get up close and personal with the products, so you can get a better idea of what you'll be getting when you make your purchase. Whether you're curious about the latest iPhone, the hottest gaming console, or the coolest lifestyle products, we've got you covered. So sit back, relax, and let's dive into the unboxing adventure together!</p>
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
