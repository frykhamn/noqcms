import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import InformationComponent from "./components/InformationComponent";
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
     <InformationComponent></InformationComponent>

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
