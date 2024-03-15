// JobbaMedOssPage.js
import "tailwindcss/tailwind.css";
import FooterComponent from "./FooterComponent";
import useGetImage from "../../CMSComponents/customHooks/useGetImage";

const JobbaMedOssPage = () => {
  const image = useGetImage("3pwolvay.bmp");

  return (
    <>
    <div className="max-w-4xl mx-auto px-4">
        <img className="h-96 mx-auto" src={image} alt="Header Image" />
      </div>
        <div className="bg-bkg-light py-10">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          noQ söker dig som vill jobba för utsatta
        </h1>
        <p className="mb-4">
          Vi söker dig som vill jobba ideellt med utsatta människor i ett
          mjukvaruutvecklingsprojekt. Vi behöver alla möjliga roller. Här några:
          Systemutvecklare, projektledare, art director, copywriter, data
          engineer, designer, UX, scrum master, lobbyist, kravspecialist,
          produktägare, arkitekt, idéspruta, alltiallo, marknadsförare,
          administratör, visionär etc.
        </p>
        <h2 className="text-2xl font-bold mb-2">Kvalifikationer</h2>
        <p className="mb-4">
          Här listar vi våra önskemål på önskvärda skills/erfarenheter:
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Krav/must have</h3>
          <ul className="list-disc list-inside font-list text-list">
            <li>Minst konversationskunskaper i både engelska och svenska.</li>
            <li>
              Stor självdisciplin då vi jobbar i ett team men ändå självständigt
              på distans.
            </li>
            <li>
              Engagemang med minst 5 timmar i veckan. Vi ligger på ca snitt i 7
              timmar.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Önskemål/nice to have</h3>
          <ul className="list-disc list-inside font-list text-list">
            <li>Erfarenhet av systemutveckling och programmeringsspråk.</li>
            <li>Kunskap om molnbaserade plattformar som AWS eller Azure.</li>
            <li>
              Förståelse för AI/maskininlärningsramverk, algoritmer och
              modeller.
            </li>
            <li>
              Bra kommunikations- och samarbetsförmåga, särskilt när du arbetar
              med olika team med olika bakgrund och färdigheter.
            </li>
            <li>
              Kunskap om, eller en vilja att, lära dig våra
              verktyg/miljöer/språk: Figma, Slack, MS Teams, GitHub, GitHub
              Copilot, AWS, Discord, Google Suite, Confluence, Jira, Java 17+21,
              Python, Spring Boot, Azure Cloud, NeXTs, Docker, Postgres DB.
              Givetvis beroende på den roll du vill ha i teamet.
            </li>
            <li>
              Passionerad för att använda dina kunskaper för att göra en positiv
              skillnad i samhället.
            </li>
            <li>
              Erfarenhet av humanitärt arbete eller engagemang i initiativ för
              att hjälpa hemlösa eller socialt utsatta samhällen.
            </li>
            <li>Agilt arbetssätt med scum, lean och holocracy.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Plats</h3>
          <p>
            Vi jobbar alla på distans hemifrån eller där det passar dig, men
            ibland träffas vi i Stockholm.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Arbetstid</h3>
          <p>
            Du disponerar själv din tid och när du vill jobba. När vi
            sprintplanerar så anger du hur mycket du kan bidra den kommande
            perioden (sprinten). Detta är viktigt att vi håller varandra
            ansvariga för detta. Men ofta händer oförutsedda saker som ändrar på
            det.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Arbetsform</h3>
          <p>
            Det här är en oavlönad och distansbaserat roll på noQ, precis som
            alla andra i noQ. I den här rollen kommer du att jobba med vårt team
            på 20 personer för att skapa lösningar som stödjer de utsatta. Du
            får möjlighet att använda dina kunskaper för att göra en verklig
            skillnad i de utsattas liv och jobba tillsammans med ett engagerat
            och passionerat team och samtidigt lära dig något nytt.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Avslut/paus</h3>
          <p>
            Tid kommer och tid går. Kan du inte bidra med något den kommande
            perioden/sprinten säger du bara det, så lägger vi dig på väntelistan
            tills du har tid igen. Vill du hoppa av så har vi en process för det
            utan problem.
          </p>
        </div>
        <h3 className="text-lg font-bold mb-2">Verktyg</h3>
        <p className="mb-2">
          Vi tillhandahåller all mjukvara i form av licenser och behörigheter,
          du ansvarar för din egen arbetsmiljö inklusive hårdvara (dator mm).
        </p>
        <h3 className="text-lg font-bold mb-2">Notera!</h3>
        <p className="mb-2">
          Det här är inte en betald tjänst. Alla VI jobbar för att hjälpa
          utsatta människor, bredda våra nätverk och kanske lära sig något
          användbart. Vi kommer under 2024 samarbeta med arbetsförmedlingen som
          en möjlighet till praktikplats.
        </p>
        <h3 className="text-lg font-bold mb-2">Ansök!</h3>
        <p className="mb-2">
        Skicka in din{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZosC-Zfuc1LRRfrKDVVHryYUdfhUoJXjslC0i1bxhqRukaA/viewform"
            className="text-blue-500 underline"
          >
            intresseanmälan här 
          </a>{" "}
          så hör vi av oss inom ett par veckor.{" "}
        </p>
        <h3 className="text-lg font-bold mb-2">Vi är noQ</h3>
        <p className="mb-2">
          noQ är ett team som primärt vill hjälpa hemlösa i Stockholm men på
          sikt alla utsatta i Sverige. Vårt mål är noll akut hemlösa i Stockholm
          2024. Vi jobbar med teknik som drivs av artificiell intelligens men vi
          söker även andra kompetenser och engagerade som vill vara med i vår
          vision mot noll utsatta i samhället.
        </p>
        <p className="text-gray-500">
          ps. Vi söker även partners och sponsorer
        </p>
      </div>
      <FooterComponent />
    </div>
    </>
  );
};

export default JobbaMedOssPage;
