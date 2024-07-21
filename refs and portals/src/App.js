import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy(5 PushUPS)" targetTime={5} />
        <TimerChallenge title="amateur(10 situps)" targetTime={10} />
        <TimerChallenge title="Intermediate(10 burpees)" targetTime={30} />
        <TimerChallenge title="WorldClass(30 crunches) " targetTime={55} />
      </div>
    </>
  );
}

export default App;
