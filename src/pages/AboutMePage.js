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
        <div className="text-4xl hidden md:block text-white align-top pl-2 pt-2 w-fit font-bold font-mono">
          About Me
        </div>
        <div className="bg-gradient-to-br from-ws-dark-green via-ws-green to-ws-lime-green rounded-xl w-11/12 mx-auto p-2 mt-5">
          <div className="flex flex-col justify-between h-full border-ws-dark-gray border-2 bg-ws-light-gray text-gray-100 rounded-xl p-4">
            <p className="text-2xl underline underline-offset-4">About</p>
            <p className="mt-1">
              My name is Jagger Harness. I'm a full stack web and mobile
              software developer based out of Jonesboro, Arkansas. I'm a little
              bit interested in, well, everything. I have worked on a wide-range
              of web, mobile, and desktop applications and am always looking for
              a cool project to contribute to. Currently, I'm focusing on
              enhancing my front end skills which as you can probably tell,
              could use a little bit of work. Nothing that a little bit of
              practice can't fix!
            </p>
            <p className="mt-4">
              As I always like to say:
              <p className="mt-4">
                <Tooltip
                  content={
                    quote
                      ? "I actually haven't said this - ever. This is just a cool API I was messing around with that generates a somewhat 'techy' sounding phrase that may or may not make sense. Enjoy!"
                      : "Guess I'm still trying to figure out what to say. I'm probably fixing this now."
                  }
                  style="light"
                  animation="duration-500"
                >
                  <p
                    className={`${
                      quote
                        ? "underline decoration-dotted underline-offset-4"
                        : "animate-pulse bg-gray-300 text-gray-300"
                    }`}
                  >
                    {quote ? quote : "Loading..."}.
                  </p>
                </Tooltip>
              </p>
            </p>
            <div className="mt-4">
              <div className="text-2xl underline underline-offset-4">
                Interests
              </div>
              <ul className="list-disc ml-4 mt-1">
                <li>React</li>
                <li>Node</li>
                <li>Flutter</li>
                <li>Tailwind</li>
              </ul>
              <p className="mt-2">
                While increasing my knowledge of these frameworks, I'll be
                focusing on developing / following best practices as well as
                learning more about writing clean, testable code.
              </p>
            </div>
            <div className="mt-4">
              <div className="text-2xl underline underline-offset-4">
                Contact Me
              </div>
              <div className="mt-1">
                <a href="mailto:jaggerharness5@gmail.com">
                  I can be contacted via email at: jaggerharness5@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMePage;
