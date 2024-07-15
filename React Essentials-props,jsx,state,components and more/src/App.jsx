import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

import { CORE_CONCEPTS } from "./data.js";
import Coreconcepts from "./components/CoreConcepts";
import TabButtons from "./components/TapButton.jsx";
function App() {
  const [selectedtopic, setselectedtopic] = useState("");

  function handleSelect(selectedButton) {
    setselectedtopic(selectedButton);
    console.log(selectedtopic);
  }
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <Coreconcepts
              Title={CORE_CONCEPTS[0].title}
              Description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <Coreconcepts
              Title={CORE_CONCEPTS[1].title}
              Description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <Coreconcepts
              Title={CORE_CONCEPTS[2].title}
              Description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <Coreconcepts
              Title={CORE_CONCEPTS[3].title}
              Description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons
              isSelected={selectedtopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectedtopic == "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectedtopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectedtopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButtons>
          </menu>
          {!selectedtopic ? (
            <p>Select a Topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedtopic].title}</h3>
              <p>{EXAMPLES[selectedtopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedtopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
