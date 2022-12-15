import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import LinkBlocks from "./components/LinkBlocks";

import {
  Body,
  Main,
  LanguageList,
  LanguageItem,
  LanguageButton,
} from "./styles";

import useLocalStorage from "use-local-storage";

import DutchText from "./languages/dutch.json";
import PortugueseText from "./languages/portuguese.json";

function App() {
  const languages = ["NL", "PT"];
  const [data, setData] = useLocalStorage("language", DutchText);

  const changeLanguage = (lang) => {
    if (lang === languages[0]) {
      setData(DutchText);
    } else if (lang === languages[1]) {
      setData(PortugueseText);
    }
  };

  return (
    <Body>
      <Header data={data[5]} />
      <LanguageList>
        <LanguageItem>
          <LanguageButton
            language={"NL"}
            onClick={() => changeLanguage(languages[0])}
          ></LanguageButton>
        </LanguageItem>
        <LanguageItem>
          <LanguageButton
            language={"PT"}
            onClick={() => changeLanguage(languages[1])}
          ></LanguageButton>
        </LanguageItem>
      </LanguageList>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Article data={data[0]} background={1} headingColor={1} />
                <Article data={data[1]} background={2} headingColor={1} />

                <LinkBlocks
                  data={[data[2], data[3], data[4]]}
                  background={2}
                  readMore={data[5].readMore}
                />
              </div>
            }
          />
          <Route
            path="/over_mij"
            element={
              <div>
                <Article data={data[2]} background={1} headingColor={1} />
                <Article data={data[3]} background={2} headingColor={1} />
                <LinkBlocks
                  data={[data[0], data[1], data[4]]}
                  background={2}
                  readMore={data[5].readMore}
                />
              </div>
            }
          />
          <Route
            path="/workshops"
            element={
              <div>
                <Article data={data[4]} background={1} headingColor={1} />
                <LinkBlocks
                  data={[data[0], data[1], data[2]]}
                  background={2}
                  readMore={data[5].readMore}
                />
              </div>
            }
          />
        </Routes>
      </Router>

      <Footer data={data[5]} />
    </Body>
  );
}

export default App;
