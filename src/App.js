import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import LinkBlocks from "./components/LinkBlocks";

import { Body, Main, LanguageWrapper, LanguageButton } from "./styles";

function App() {
  const languages = ["NL", "PT"];

  const articlesNL = [
    {
      header: "WAT IS VIDA?",
      text: [
        "VIDA betekent LEVEN. VIDA, vrouwen voor creatie. VIDA is een creatief christelijke coachpraktijk voor vrouwen die Nederlandstalig of Portugeestalig zijn.",
        "God is de bron van VIDA. Van U komt het leven, van U komt het licht. VIDA is de plaats waar je Gods liefde ervaart en waar je jezelf kan zijn. Hier gaan we samen creëren en kan je tot je hart komen. Bij VIDA ga je bloeien, groeien en zijn hoe God het heeft bedoeld: geliefd, waardig en kostbaar.",
      ],
      hasList: false,
      hasQuotes: true,
      quotes: [
        {
          quote:
            "“Want God is de bron van al het LEVEN: als wij in Uw licht staan, zien wij de dingen duidelijk.”",
          source: "Psalm 36:10",
        },
      ],
      link: "/",
    },

    {
      header: "CREATIEF CHRISTEN COACHING",
      text: [
        "God is de Schepper, Hij heeft jou gemaakt en Zijn creatieve vaardigheden ook aan jou gegeven. Creativiteit is een werkvorm dat jou kan helpen met het genezen van oude pijn, blokkades en emoties op een veilig manier.",
        "De missie van VIDA is stap voor stap, jouw verleden een plek geven en los te laten, om op weg te gaan naar de toekomst die God heeft voor jou. Dit doen wij met behulp van het creëren van kunst, zodat je gaat bloeien. Je gaat ontdekken dat je waardig bent, met je eigen unieke capaciteiten en talenten.",
      ],
      hasList: true,
      lists: [
        {
          text: [
            "Wij zullen dan gaan werken met verschillende technieken, zoals:",
          ],
          items: [
            "Schilderen",
            "Tekenen",
            "Collages maken",
            "Mixed media",
            "Werken met materialen uit de natuur",
          ],
        },
        {
          text: [
            "Denk jij wel eens:",
            "Laat deze gedachten je niet tegenhouden. Iedereen kan creëren, jij ook.",
            " Wil je een afspraak maken? Neem dan contact op via email (naam@gmail.com) of telefoon (777-7777777).",
          ],
          items: [
            "Ik kan niet tekenen",
            "Ik ben niet creatief",
            "Ik heb geen ervaring",
            "Waarom zou ik hieraan beginnen?",
          ],
        },
      ],
      hasQuotes: false,
      link: "/",
    },
    {
      header: "OVER MIJ",
      text: [
        "Mijn naam is Ingrid Pereira de Lacerda-Eltink, geboren in Brazilië in 1967 en dochter van Nederlanders ouders. Ik ben getrouwd en moeder van 2 volwassen zonen.",
        "In Brazilië ben ik afgestudeerd als “occupational therapy” aan de universiteit. Daar heb ik in verschillende klinieken gewerkt. In Nederland werk ik sinds 2003 als activiteitenbegeleidster in een verzorgingshuis, waar ik begeleidster ben o.a. bij de klassieke muziekclub, teken- en schilderclub en bloemschikclub.",
        "Ik heb altijd een hart voor mensen gehad. Ben actief geweest bij kinderwerk, Healing Room, Prayer Post en momenteel bij de vrouwengroep “Mulheres Conectadas com Deus”.",
        "In 2021 heb ik het halfjaar programma “Powerlife” van Powervrouwen van Total Balance gevolgd. Sinds 2022 volg ik de training “Coachen met Zijn creativiteit” van Atelier Agape en de opleiding “Pastorale Coach” van Total Balance.",
      ],
      hasList: false,
      hasQuotes: false,
      link: "/over_mij",
    },
    {
      header: "WAAROM DOE IK DIT",
      text: [
        "Al van kinds af aan ben ik creatief bezig door te tekenen en knutselen.  Doordat ik midden in de natuur woonde, werd ik geïnspireerd door mijn omgeving om te creëren.",
        "Naarmate ik ouder werd ging mijn focus steeds meer naar mijn studie en schoof ik mijn creativiteit steeds meer naar de achtergrond. Ik was eenzaam, angstig, verlegen, perfectionistisch en probeerde iedereen te “pleasen”.",
        "Toen ik volwassen werd was ik op zoek naar de waarheid, totdat ik Jezus heb leren kennen. Ik had daardoor een doel in mijn leven, maar ik moest nog veel veranderen in mijn hart. Samen met God en de Christenen die ik door de jaren heen heb ontmoet, werden mijn gedachten en mijn hart genezen. Nu weet ik dat ik geliefd, waardig en kostbaar ben. Verder geniet ik weer van de creativiteit die God mij heeft gegeven, net als toen ik kind was.",
        "Door wat ik heb meegemaakt in mijn leven, wil ik andere vrouwen helpen. Door middel van creativiteit wil ik jouw waarheid tot leven brengen, gebaseerd op het woord van God en geleid door de Heilige Geest.",
      ],
      hasList: false,
      hasQuotes: false,
      link: "/over_mij",
    },

    {
      header: "WORKSHOPS",
      text: [
        "Ben je op zoek naar ontspanning, rust en tijd voor jezelf. Vind je het fijn om samen met andere vrouwen lekker creatief bezig te zijn of alleen met mij. Dan ben je op de goede plaats bij VIDA.",
      ],
      hasList: true,
      lists: [
        {
          text: ["Welke workshop past bij jou?"],
          items: [
            "Schilderen - op canvas doek met acrylverf door het gebruiken van verschillende technieken.",
            "Mixed media – door allerlei verschillende materialen en technieken door elkaar heen wordt een schilderij of een notitieboek gecreëerd.",
            "Bloemschikken – je creëert een mooi bloemstuk met verschillende bloemen en groen door het gebruiken van verschillende technieken.",
            "Moodboard– met plaatjes creëer je een eigen collage gebaseerd op een thema.",
            "Bijbelse creatie – je maakt een schilderij gebaseerd op een Bijbeltekst.",
          ],
        },
        {
          text: [
            "De workshop wordt gehouden voor vrouwengroepen (max. 6 personen) of individueel.",
          ],
          items: [
            "Prijs is ?, inclusief materiaal en koffie/thee",
            "Datum is nog niet bekent",
            "Tijd is nog niet bekent",
          ],
        },
      ],
      hasQuotes: false,
      link: "/workshops",
    },
  ];

  const articlesBR = [
    {
      header: "O QUE É VIDA?",
      text: [
        "VIDA significa VIDA. VIDA, vrouwen voor creatie. VIDA is een creatief christelijke coachpraktijk voor vrouwen die Nederlandstalig of Portugeestalig zijn. God is de bron van VIDA.",
        "VIDA is de plaats waar je Gods liefde ervaart en waar je jezelf kan zijn. Hier gaan we samen creëren en kan je tot je hart komen. Bij VIDA ga je bloeien, groeien en zijn hoe God het heeft bedoeld: geliefd, waardig en kostbaar.",
      ],
      hasList: false,
      hasQuotes: true,
      quotes: [
        {
          quote: "“Want God is de bron van al het LEVEN.”",
          source: "Psalm 36:10",
        },
      ],
      link: "/",
    },

    {
      header: "CREATIEF CHRISTEN COACHING",
      text: [
        "God is de Schepper, Hij heeft jou gemaakt en Zijn creatieve vaardigheden ook aan jou gegeven. Creativiteit is een werkvorm dat jou kan helpen met het genezen van oude pijn, blokkades en emoties op een veilig manier.",
        "De missie van VIDA is stap voor stap, jouw verleden een plek geven en los te laten, om op weg te gaan naar de toekomst die God heeft voor jou. Dit doen wij met behulp van het creëren van kunst, zodat je gaat bloeien. Je gaat ontdekken dat je waardig bent, met je eigen unieke capaciteiten en talenten.",
      ],
      hasList: true,
      lists: [
        {
          text: [
            "Wij zullen dan gaan werken met verschillende technieken, zoals:",
          ],
          items: [
            "Schilderen",
            "Tekenen",
            "Collages maken",
            "Mixed media",
            "Werken met materialen uit de natuur",
          ],
        },
        {
          text: [
            "Denk jij wel eens:",
            "Laat deze gedachten je niet tegenhouden. Iedereen kan creëren, jij ook.",
            " Wil je een afspraak maken? Neem dan contact op via email (naam@gmail.com) of telefoon (777-7777777).",
          ],
          items: [
            "Ik kan niet tekenen",
            "Ik ben niet creatief",
            "Ik heb geen ervaring",
            "Waarom zou ik hieraan beginnen?",
          ],
        },
      ],
      hasQuotes: false,
      link: "/",
    },
    {
      header: "OVER MIJ",
      text: [
        "Mijn naam is Ingrid Pereira de Lacerda-Eltink, geboren in Brazilië in 1967 en dochter van Nederlanders ouders. Ik ben getrouwd en moeder van 2 volwassen zonen.",
        "In Brazilië ben ik afgestudeerd als “occupational therapy” aan de universiteit. Daar heb ik in verschillende klinieken gewerkt. In Nederland werk ik sinds 2003 als activiteitenbegeleidster in een verzorgingshuis, waar ik begeleidster ben o.a. bij de klassieke muziekclub, teken- en schilderclub en bloemschikclub.",
        "Ik heb altijd een hart voor mensen gehad. Ben actief geweest bij kinderwerk, Healing Room, Prayer Post en momenteel bij de vrouwengroep “Mulheres Conectadas com Deus”.",
        "In 2021 heb ik het halfjaar programma “Powerlife” van Powervrouwen van Total Balance gevolgd. Sinds 2022 volg ik de training “Coachen met Zijn creativiteit” van Atelier Agape en de opleiding “Pastorale Coach” van Total Balance.",
      ],
      hasList: false,
      hasQuotes: false,
      link: "/over_mij",
    },
    {
      header: "WAAROM DOE IK DIT",
      text: [
        "Al van kinds af aan ben ik creatief bezig door te tekenen en knutselen.  Doordat ik midden in de natuur woonde, werd ik geïnspireerd door mijn omgeving om te creëren.",
        "Naarmate ik ouder werd ging mijn focus steeds meer naar mijn studie en schoof ik mijn creativiteit steeds meer naar de achtergrond. Ik was eenzaam, angstig, verlegen, perfectionistisch en probeerde iedereen te “pleasen”.",
        "Toen ik volwassen werd was ik op zoek naar de waarheid, totdat ik Jezus heb leren kennen. Ik had daardoor een doel in mijn leven, maar ik moest nog veel veranderen in mijn hart. Samen met God en de Christenen die ik door de jaren heen heb ontmoet, werden mijn gedachten en mijn hart genezen. Nu weet ik dat ik geliefd, waardig en kostbaar ben. Verder geniet ik weer van de creativiteit die God mij heeft gegeven, net als toen ik kind was.",
        "Door wat ik heb meegemaakt in mijn leven, wil ik andere vrouwen helpen. Door middel van creativiteit wil ik jouw waarheid tot leven brengen, gebaseerd op het woord van God en geleid door de Heilige Geest.",
      ],
      hasList: false,
      hasQuotes: false,
      link: "/over_mij",
    },

    {
      header: "WORKSHOPS",
      text: [
        "Ben je op zoek naar ontspanning, rust en tijd voor jezelf. Vind je het fijn om samen met andere vrouwen lekker creatief bezig te zijn of alleen met mij. Dan ben je op de goede plaats bij VIDA.",
      ],
      hasList: true,
      lists: [
        {
          text: ["Welke workshop past bij jou?"],
          items: [
            "Schilderen - op canvas doek met acrylverf door het gebruiken van verschillende technieken.",
            "Mixed media – door allerlei verschillende materialen en technieken door elkaar heen wordt een schilderij of een notitieboek gecreëerd.",
            "Bloemschikken – je creëert een mooi bloemstuk met verschillende bloemen en groen door het gebruiken van verschillende technieken.",
            "Moodboard– met plaatjes creëer je een eigen collage gebaseerd op een thema.",
            "Bijbelse creatie – je maakt een schilderij gebaseerd op een Bijbeltekst.",
          ],
        },
        {
          text: [
            "De workshop wordt gehouden voor vrouwengroepen (max. 6 personen) of individueel.",
          ],
          items: [
            "Prijs is ?, inclusief materiaal en koffie/thee",
            "Datum is nog niet bekent",
            "Tijd is nog niet bekent",
          ],
        },
      ],
      hasQuotes: false,
      link: "/workshops",
    },
  ];

  const [articles, setArticles] = useState(articlesNL);

  const changeLanguage = (lang) => {
    if (lang === languages[0]) {
      setArticles(articlesNL);
    } else if (lang === languages[1]) {
      setArticles(articlesBR);
    }
  };

  return (
    <div className="App">
      <Body>
        <Main>
          <Header />
          <LanguageWrapper>
            <LanguageButton
              language={"NL"}
              onClick={() => changeLanguage(languages[0])}
            ></LanguageButton>
            <LanguageButton
              language={"PT"}
              onClick={() => changeLanguage(languages[1])}
            ></LanguageButton>
          </LanguageWrapper>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <Article
                      article={articles[0]}
                      background={1}
                      headingColor={1}
                    />
                    <Article
                      article={articles[1]}
                      background={2}
                      headingColor={1}
                    />

                    <LinkBlocks
                      articles={[articles[2], articles[3], articles[4]]}
                      background={2}
                    />
                  </div>
                }
              />
              <Route
                path="/over_mij"
                element={
                  <div>
                    <Article
                      article={articles[2]}
                      background={1}
                      headingColor={1}
                    />
                    <Article
                      article={articles[3]}
                      background={2}
                      headingColor={1}
                    />
                    <LinkBlocks
                      articles={[articles[0], articles[1], articles[4]]}
                      background={2}
                    />
                  </div>
                }
              />
              <Route
                path="/workshops"
                element={
                  <div>
                    <Article
                      article={articles[4]}
                      background={1}
                      headingColor={1}
                    />
                    <LinkBlocks
                      articles={[articles[0], articles[1], articles[2]]}
                      background={2}
                    />
                  </div>
                }
              />
            </Routes>
          </Router>
        </Main>
        <Footer />
      </Body>
    </div>
  );
}

export default App;
