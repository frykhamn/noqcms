import React from "react";
import SmallButtonComponent from "./SmallButtonComponent";

const dummyData = [
  {
    id: 1,
    title: "Vision",
    text: "Vi tror att en digital lösning för akut hemlösa, härbärgen och handläggare kommer att Erbjuda ett humant och enkelt sätt att hitta en säng för ikväll för brukarna, Skapa enkelhet i administrationen av denna idag manuella process, Öppna upp fler möjligheter att erbjuda sängar och andra tjänster för värdar.",
  },
  {
    id: 2,
    title: "Utvecklingområden",
    text: "Vi överväger att utveckla ett slags regelverk som gör att några procent av brukarna kan godkännas direkt med automatik. Tanken är att förenkla för härbärgen. Kan vi förenkla för handläggare på härbärgen och administratörer i arbetet med fakturor och betalningar? Vi ska förstås följa lagar och regelverk kring hantering av personuppgifter.",
  },
  {
    id: 3,
    title: "Jobbar du med bostadslösa idag?",
    text: "Vi söker kontakt med er som på nått sätt idag har kontakt med hemlösa. För att kunna skapa en produkt osm går att använta av samtliga led, behöver vi er hjälp med att förstå de som skulle kunna använda den. För att nå målet behöver vi: Utveckla vårt nätverk av brukare och handläggare. Hitta intervjupersoner Kan du bidra med förslag?",
  },
  {
    id: 4,
    title: "Jobbar du innom IT?",
    text: "Som både ett probono och startup bolag behöver vi all kompetence inom ett IT-projekt. Scrum master, Projektledare, UX-designer, backend- fontend- fullsatck utvecklare? Hör av dig och hör hur du kan bidra. Allt är open source och de flesta kan alltid göra nått.",
  },
];

export default function InformationComponent() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">
            NoQ - en IT-lösning för att boka sovplats för de som inte har boende
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard info={dummyData}></InfoCard>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ info }) {
  return (
    <>
      {info.map((item) => (
        <div key={item.id} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.text}</p>
          <SmallButtonComponent title={"Läs mer här"}></SmallButtonComponent>
        </div>
      ))}
    </>
  );
}
