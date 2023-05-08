import React, { useEffect, useState } from 'react'

const API = "AIzaSyDDrTUfdgvybUTlqmbFqRvJ2YhtjCMuCjg"
const channelId = "UCLAv5A84nm6m-jlaGOwdSHA"
const playList = "PL-r3E32jP3_jWCMrAu3LrKYCKK6phOIT9"
// var fetchUrl= `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
var fetchUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playList}&part=snippet,id&order=date&maxResults=30`
export default function Tech() {
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
            <h1>Tech</h1>
            <p>Welcome to our tech playlist! We've curated a collection of videos that highlight the latest trends and innovations in the tech world, so you can stay up-to-date on all things technology. From product releases to tutorials, interviews with industry experts, and deep dives into cutting-edge technologies, this playlist has it all. Whether you're a tech enthusiast, a professional in the industry, or just someone who wants to stay informed about the latest developments, this playlist is for you. So sit back, relax, and let's dive into the exciting world of tech together.</p>
            </div>
            {allvideos.map((items) => {
                return (

                    <a href={item.Videolink}>
                        <div className='card'>
                            <img src={items.snippet.thumbnails.high.url} width="200px" alt="" />
                            <div className="cardTitle">
                            <p>{items.snippet.title}</p>
                            <p>{items.snippet.description}</p>
                            </div>
                        </div>
                    </a>
                )
            })}



        </div>
    )
}
