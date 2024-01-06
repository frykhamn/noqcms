import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ProfileGallery from "./components/ProfileGallery";

const LandingComponent = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Main></Main>
      <FooterComponent></FooterComponent>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <main>
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">
                NoQ - en IT-lösning för att boka sovplats för de som inte har
                boende
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-gray-600">
                    Vi tror att en digital lösning för akut hemlösa, härbärgen
                    och handläggare kommer att Erbjuda ett humant och enkelt
                    sätt att hitta en säng för ikväll för brukarna, Skapa
                    enkelhet i administrationen av denna idag manuella process,
                    Öppna upp fler möjligheter att erbjuda sängar och andra
                    tjänster för värdar.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
                  >
                    Learn more
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Utvecklingområden
                  </h3>
                  <p className="text-gray-600">
                    Vi överväger att utveckla ett slags regelverk som gör att
                    några procent av brukarna kan godkännas direkt med
                    automatik. Tanken är att förenkla för härbärgen. Kan vi
                    förenkla för handläggare på härbärgen och administratörer i
                    arbetet med fakturor och betalningar? Vi ska förstås följa
                    lagar och regelverk kring hantering av personuppgifter.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">
                    Jobbar du med bostadslösa idag?
                  </h3>
                  <p className="text-gray-600">
                    Vi söker kontakt med er som på nått sätt idag har kontakt
                    med hemlösa. För att kunna skapa en produkt osm går att
                    använta av samtliga led, behöver vi er hjälp med att förstå
                    de som skulle kunna använda den. För att nå målet behöver
                    vi: Utveckla vårt nätverk av brukare och handläggare. Hitta
                    intervjupersoner Kan du bidra med förslag?
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
                  >
                    Learn more
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Jobbar du innom IT?
                  </h3>
                  <p className="text-gray-600">
                    Som både ett probono och startup bolag behöver vi all
                    kompetence inom ett IT-projekt. Scrum master, Projektledare,
                    UX-designer, backend- fontend- fullsatck utvecklare? Hör av
                    dig och hör hur du kan bidra. Allt är open source och de
                    flesta kan alltid göra nått.
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <iframe
              src="https://drive.google.com/file/d/1DcezvhiJ3QRuydUTvxG8zZlm9EsrS-Zk/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>

            <div className="md:ml-12">
              <h3 className="text-2xl font-semibold mb-3">
                Demo inspelning 15/12 - 2023
              </h3>
              <p className="text-gray-600">
                Häng med på vår första demo från den 15e december. Vi
                presenterar NoQ-gänget och går igenom varför vi gör det här samt
                vad våra förhoppningar är. Vi söker flera som jobbar med denna
                målgrupp att vara med i framtiden. Så att vi kan fånga upp
                värdefull och nödvändig feedback kring produkten, dess syfte,
                användningsområde samt vilka problem den kan lösa.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: "#889892" }}>
          <div className="grid grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-row-1 md:grid-row-2 gap-8 items-center">
              <p className="text-gray-900 mb-6 text-2xl">
                Här hittar du oss och projektets gång
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-md mr-4 hover:bg-blue-600 transition-colors">
                  Join Today
                </button>
                <button className="bg-transparent text-gray-600 px-6 py-2 border border-gray-600 rounded-md hover:bg-gray-900 hover:text-white transition-colors">
                  Contact us
                </button>
              </div>
            </div>
            <div>
              <p>Figma</p>
              <p>Google Drive</p>
              <p>Jira</p>
              <p>Slack</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">
                Vi som engagerat oss i NoQ
              </h2>
              <p className="text-gray-600">
                Gemensamt är villjan att bidra med vår kunskap till att skapa en
                digtal lösning för att underlätta processen för brukare,
                härbärgen och handläggare.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center justify-center gap-4 flex-wrap">
             <ProfileGallery></ProfileGallery>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default LandingComponent;
