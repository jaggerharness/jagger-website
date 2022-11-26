import React, { useEffect, useState } from "react";
import LoadingProject from "../components/LoadingProject.js";
import Project from "../components/Project.js";
import NavigationBar from "../components/NavigationBar";

const ProjectsPage = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const project_url = "http://localhost:8080/fetchProjects"

    const fetchProjects = async () => {
      try {
        const response = await fetch(project_url);
        await response.json().then(element => setProjects(element.projects));
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-ws-background bg-fixed">
      <NavigationBar />
      <div className="flex flex-col min-h-screen">
        <div className="text-4xl text-white align-top pl-2 pt-2 w-fit font-bold font-mono">
          Projects Playground
        </div>
        {projects ? projects.map(project => {
          return <Project data={project} />
        }) : <LoadingProject />}
      </div>
    </div>
  );
};
export default ProjectsPage;
