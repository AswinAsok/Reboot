import "./App.css";

const App = () => {
  const name = null;
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Lets Go and Get It, {isNameShowing ? name : "someone"} !!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>Name Not Found 404</h1>
        </>
      )}
    </div>
  );
};

export default App;
