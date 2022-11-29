import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Tooltip } from "flowbite-react";

const AboutMePage = (props) => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const quote_url = "http://localhost:8080/fetchQuote";

    const fetchQuotes = async () => {
      try {
        const response = await fetch(quote_url);
        const res_data = await response.json();
        setQuote(res_data.quote.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-ws-background bg-fixed">
      <NavigationBar />
      <div className="flex flex-col min-h-screen">
        <div className="text-4xl text-white align-top pl-2 pt-2 w-fit font-bold font-mono">
          About Me
        </div>
        <div className="bg-ws-light-gray text-gray-100 mx-auto rounded-lg w-4/5 p-2 mt-5 border-ws-dark-gray border-2">
        <div className="text-xl underline">About</div>
          <p>
            My name is Jagger Harness. I'm a full stack web and mobile software
            developer based out of Jonesboro, Arkansas. I'm a little bit
            interested in, well, everything. I have worked on a wide-range of
            web, mobile, and desktop applications and am always looking for a
            cool project to contribute to. Currently, I'm focusing on enhancing
            my front end skills which as you can probably tell, could use a
            little bit of work. Nothing that a little bit of practice can't fix!
          </p>
          <p className="mt-4">
            As I always like to say:
            <p className="mt-4 underline decoration-dotted">
              <Tooltip
                content={
                  quote
                    ? "I actually haven't said this - ever. This is just a cool API I was messing around with that generates a somewhat 'techy' sounding phrase that may or may not make sense. Enjoy!"
                    : "Looks like the API data was fetched incorrectly - I'm probably trying to fix it now"
                }
                style="light"
                animation="duration-500"
              >
                {quote ? quote : "Man, I sure wish this API was working."}
              </Tooltip>
            </p>
          </p>
          <div className="mt-4">
            <div className="text-xl underline">Interests</div>
            <ul className="list-disc ml-4">
              <li>React</li>
              <li>Node</li>
              <li>Flutter</li>
              <li>Tailwind</li>
            </ul>
            <p className="mt-2">
            While increasing my knowledge of these frameworks, I'll be focusing
            on developing / following best practices as well as learning more about building clean, scalable architecture.
            </p>
          </div>
          <div className="text-xl underline mt-4">Contact</div>
          <p>You can contact me via email at jaggerharness5@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default AboutMePage;
