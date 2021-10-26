import { useState, useMemo } from "react";

function App() {
  const [randomNumList, setRandomNumList] = useState([]);
  const randomColorList = useMemo(() => {
    const colorList = ["red", "green", "blue", "yellow"];
    return colorList;
  }, []);

  return (
    <div className="App">
      <div>
        <h1>List</h1>
        <div>
          {randomNumList.map((randomNum) => (
            <RandomNumRow
              /*
              If key is commented out, the background color won't move up with the item it was initially assigned to.
            */
              key={randomNum}
              randomColorList={randomColorList}
              randomNum={randomNum}
              setRandomNumList={setRandomNumList}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => setRandomNumList((list) => [Math.random(), ...list])}
      >
        Generate random num
      </button>
    </div>
  );
}

export default App;

function RandomNumRow({ randomColorList, randomNum, setRandomNumList }) {
  const color = useMemo(
    () => randomColorList[Math.floor(Math.random() * 4)],
    []
  );

  return (
    <h5
      key={randomNum}
      style={{
        backgroundColor: color,
      }}
      onClick={() =>
        setRandomNumList((list) => {
          const itemToBeRemoved = randomNum;
          const newList = list.filter(
            (listItem) => listItem !== itemToBeRemoved
          );
          return newList;
        })
      }
    >
      {randomNum}
    </h5>
  );
}
