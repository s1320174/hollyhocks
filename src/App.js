import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [count1, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/users/s1320174")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <header className="App-header bg-pastel-blue">
        <img
          src="data:image/jpeg;base64,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"
          className="App-logo"
          alt="logo"
        />
        <p className="text-pastel-green text-4xl">
          Welcome to <code>WED</code> youkoso!!
        </p>
        <a
          className="text-pastel-red text-2xl underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          WED について
        </a>
        <a href="/newpage" className="text-pastel-red underline">
          コミュニティページ
        </a>
        <button
          className="text-pastel-purple text-2xl bg-pastel-gray p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            setCount(count1 + 1);
          }}
        >
          👍{count1}
        </button>

        <button
          className="text-pastel-purple text-2xl bg-pastel-gray p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          👎{count2}
        </button>
        {data ? (
          <>
            <img
              className="w-32 rounded-full mt-10"
              alt="icon"
              src={data.avatar_url}
            />
            <p className="text-wed-dark">{data.login}</p>
          </>
        ) : (
          <p>no data</p>
        )}
      </header>
    </div>
  );
}

export default App;
