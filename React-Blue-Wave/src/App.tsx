import { Buttons } from "./sections/Buttons";
import { Titles } from "./sections/Titles";
import { Texts } from "./sections/Texts";
import { Inputs } from "./sections/Inputs";
import { Images } from "./sections/Images";
import { Spacers } from "./sections/Spacers";
import { Molecules } from "./sections/Molecules";

function App() {
  return (
    <div className="App">
      <Titles />
      <Buttons />
      <Texts />
      <Inputs />
      <Images />
      <Spacers />
      <Molecules />
    </div>
  );
}

export default App;
