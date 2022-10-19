import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/cards/Card";
import data from "./rawData/data";
console.log(data);

function App() {
    const cards = data.map((card, i) => {
        return <Card key={i} {...card} />;
    });

    return (
        <div className="App">
            <Navbar />
            <div id="cards_el">{cards}</div>
        </div>
    );
}

export default App;
