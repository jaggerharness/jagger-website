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
          // Jagger Harness
        </p>
        <p className="text-xl text-ws-light-gray hover:text-ws-lime-green text-center font-bold font-mono">
          // Software Engineer
        </p>
        <button class="text-xl text-center font-bold font-mono text-ws-light-gray hover:text-ws-lime-green hover:line-through transition duration-150 ease-in-out"
          data-bs-toggle="tooltip" title="I wish">// Professional Gamer</button>
      </header>
    </div>
  );
}

export default App;
