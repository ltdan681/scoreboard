import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  // const names = data.map(n => {
  //   return(
  //     <ul>
  //       <li>{n}</li>
  //     </ul>
  //   )
  // })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {!data ? "Loading..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
