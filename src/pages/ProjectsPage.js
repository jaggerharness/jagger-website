import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Project from "../components/Project.js";

const ProjectsPage = (props) => {
  const [connection, setConnection] = useState("Failed");
  const [projects, setProjects] = useState("");
  const projectList = projects.map(project => <Project data={project}/>);

  useEffect(() => {
    const url = "http://localhost:8080/connection";
    const url2 = "http://localhost:8080/fetchProjects"

    // const checkAPIConnection = async () => {
    //   try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setConnection(data);
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // };

    const fetchProjects = async () => {
      try {
        const response = await fetch(url2);
        const data = await response.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    // checkAPIConnection();
    fetchProjects();
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
          Projects (just for fun)
        </div>
        {/* {projectList} */}
      </div>
    </div>
  );
};
export default ProjectsPage;
