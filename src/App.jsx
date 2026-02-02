import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [eps] = useState(episodeList);
  const [selectedEp, setSelectedEp] = useState();

  function EpList() {
    return (
      <section className="roster">
        <h2>Episodes</h2>
        <ul className="epList">
          {eps.map((ep) => (
            <li key={ep.id} onClick={() => setSelectedEp(ep)}>
              {ep.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  function EpDetails() {
    if (!selectedEp) {
      return (
        <section className="details">
          <h2>Select an episode to the left.</h2>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEp.id}</h2>
        <h3>{selectedEp.title}</h3>
        <p>{selectedEp.description}</p>
        <button>Watch now</button>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpList />
        <EpDetails />
      </main>
    </>
  );
}
