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
          <p>
            As I always like to say:
            <br />
            <br />
            <p className="underline decoration-dotted">
              <Tooltip
                content='In fact, I actually haven&apos;t said this - ever.&#xa; This is just a cool API I was messing around with that generates a somewhat "techy" sounding phrase that may or may not make sense. Enjoy!'
                style="light"
                animation="duration-500"
              >
                {quote}
              </Tooltip>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMePage;
