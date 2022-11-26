import React, { Suspense, useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
const FeedCard = React.lazy(() => import("../components/FeedCard.js"));

const AnimeFeedPage = (props) => {
  const [feed, setFeed] = useState();

  useEffect(() => {
    const feed_url = "http://localhost:8080/fetchFeed";

    const fetchFeed = async () => {
      try {
        const response = await fetch(feed_url);
        await response.json().then((element) => setFeed(element.feed));
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-ws-background bg-fixed">
      <NavigationBar />
      <div className="flex flex-col min-h-screen">
        <div className="text-4xl text-white align-top pl-2 pt-2 w-fit font-bold font-mono">
          Anime Quote Feed
        </div>
        <div className="flex justify-center py-5 flex-wrap">
          <Suspense fallback={<span className="animate-pulse text-white">Loading...</span>}>
            {feed
              ? feed.map((entry) => {
                  return <FeedCard key={entry.id} data={entry} />;
                })
              : ""}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default AnimeFeedPage;
