function App() {
  const currDate = new Date();


  return (
    <div>
      <h1>Hello World</h1>
      <p>It is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</p>
    </div>
  );
}

export default App;