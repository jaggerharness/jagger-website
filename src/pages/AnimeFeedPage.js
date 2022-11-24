import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingProject from "../components/LoadingProject.js";
import Project from "../components/Project.js";

const AnimeFeedPage = (props) => {
  const [connection, setConnection] = useState("Failed");
  const [feed, setFeed] = useState();

  useEffect(() => {
    const url = "http://localhost:8080/connection";
    const feed_url = "http://localhost:8080/fetchFeed"

    const checkAPIConnection = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setConnection(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchFeed = async () => {
      try {
        const response = await fetch(feed_url);
        await response.json().then(element => setFeed(element.feed));
      } catch (error) {
        console.log("error", error);
      }
    };

    checkAPIConnection();
    fetchFeed();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-ws-background bg-fixed">
      <div className="flex flex-row bg-ws-light-gray p-2">
        <Link to="/" className="text-xl font-bold text-white font-mono pl-2">
          Home
        </Link>
        <div className="text-xl font-bold text-white ml-auto font-mono pr-2">
          {`Connection to API: `}
          <span
            className={
              connection === "Success" ? "text-ws-lime-green" : "text-red-600"
            }
          >
            {connection}
          </span>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="text-4xl text-white align-top pl-2 pt-2 w-fit font-bold font-mono">
          Anime Quote Feed
        </div>
        {feed ? feed.map(entry => {
          return <Project data={entry} />
        }) : <LoadingProject />}
      </div>
    </div>
  );
};
export default AnimeFeedPage;
