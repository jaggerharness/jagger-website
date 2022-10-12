import './App.css';

function App() {

  return (
    <div>
      <header className="flex flex-col min-h-screen align-middle justify-center items-center bg-ws-background bg-fixed">
        <h1 className="text-4xl text-center font-bold text-ws-green font-mono">
          Hello world!
        </h1>
        <p className="text-5xl text-white align-middle w-fit font-bold font-mono hover:animate-pulse">
          Welcome to my website
        </p>
        <p className="text-xl text-ws-light-gray hover:text-ws-lime-green text-center font-bold font-mono mt-3">
          // I'm Jagger
        </p>
        <p className="text-xl text-ws-light-gray hover:text-ws-lime-green text-center font-bold font-mono">
          // Software Engineer
        </p>
        <p className="text-xl text-ws-light-gray hover:text-ws-lime-green text-center font-bold font-mono">
          // Gamer
        </p>
      </header>
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1 className="text-3xl font-bold underline">
  //         Hello world!
  //       </h1>
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
