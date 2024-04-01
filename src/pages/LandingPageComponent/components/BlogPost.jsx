
function BlogPost() {
    return (
        <section className="bg-bkg-dark text-white p-14 m">
            <h2 className="font-light">Senaste nytt</h2>
            {/* // Ove's blogpost */}
            {/* //https://tvivla.se/noq-soker-dig-som-vill-jobba-for-utsatta/ */}
            <div className="flex mt-10 justify-between">
                <h3>noQ söker dig som vill jobba för utsatta</h3>
                <h3>17-01-2024</h3>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6">
                    <p className="mt-8">Vi söker dig som vill jobba ideellt med utsatta människor i ett mjukvaruutvecklingsprojekt. Vi behöver alla möjliga roller. Här några: Systemutvecklare, projektledare, art director, copywriter, data engineer, designer, UX, scrum master, lobbyist, kravspecialist, produktägare, arkitekt, idéspruta, alltiallo, marknadsförare, administratör, visionär etc.
                    </p>
                    <h3 className="mt-8">Kvalifikationer
                    </h3>
                    <ul>
                        <li>Minst konversationskunskaper i både Engelska och Svenska.</li>
                        <li>Stor självdisciplin då vi jobbar i ett team men ändå självständigt på distans.</li>
                        <li>Engagemang med minst 5 timmar i veckan. Vi ligger på ca snitt i 7 timmar.</li>
                    </ul>
                    <h3 className="mt-8">Önskemål/nice to have
                    </h3>
                    <ul>
                        <li>Erfarenhet av systemutveckling och programmeringsspråk.</li>
                        <li>Kunskap om molnbaserade plattformar som AWS eller Azure.</li>
                        <li>Förståelse för AI/maskininlärningsramverk, algoritmer och modeller.</li>
                        <li>Bra kommunikations- och samarbetsförmåga, särskilt när du arbetar med olika team med olika bakgrund och färdigheter.</li>
                        <li>Kunskap om, eller en vilja att, lära dig våra verktyg/miljöer/språk: Figma, Slack, MS Teams, GitHub, GitHub Copilot, AWS, Discord, Google Suite, Confluence, Jira, Java 17+21, Python, Spring Boot, Azure Cloud, NeXTs, Docker, Postgres DB. Givetvis beroende på den roll du vill ha i teamet.</li>
                        <li>Passionerad för att använda dina kunskaper för att göra en positiv skillnad i samhället.</li>
                        <li>Erfarenhet av humanitärt arbete eller engagemang i initiativ för att hjälpa hemlösa eller socialt utsatta samhällen.</li>
                        <li>Agilt arbetssätt med scrum, lean och holocracy.</li>
                    </ul>
                    <h3 className="mt-8">Plats
                    </h3>

                    <p className="mt-8">Vi jobbar alla på distans hemifrån eller där det passar dig, men ibland träffas vi i Stockholm.
                    </p>
                    <h3 className="mt-8">Arbetstid
                    </h3>
                    <p className="mt-8">Du disponerar själv din tid och när du vill jobba. När vi sprintplanerar så anger du hur mycket du kan bidra den kommande perioden (sprinten). Detta är viktigt att vi håller varandra ansvariga för detta. Men ofta händer oförutsedda saker som ändrar på det.</p>
                    <h3 className="mt-8">Arbetsform
                    </h3>
                    <p className="mt-8">Det här är en oavlönad och distansbaserat roll på noQ, precis som alla andra i noQ. I den här rollen kommer du att jobba med vårt team på 20 personer för att skapa lösningar som stödjer de utsatta. Du får möjlighet att använda dina kunskaper för att göra en verklig skillnad i de utsattas liv och jobba tillsammans med ett engagerat och passionerat team och samtidigt lära dig något nytt.
                    </p>
                    <h3 className="mt-8">Avslut/paus
                    </h3>
                    <p className="mt-8">Tid kommer och tid går. Kan du inte bidra med något den kommande perioden/sprinten säger du bara det, så lägger vi dig på väntelistan tills du har tid igen. Vill du hoppa av så har vi en process för det utan problem.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:pl-10">
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores tempore cumque dolores natus, ipsam possimus unde aliquam aspernatur id ut, deleniti exercitationem.
                    </p>
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores tempore cumque dolores natus, ipsam possimus unde aliquam aspernatur id ut, deleniti exercitationem.
                    </p>
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores tempore cumque dolores natus, ipsam possimus unde aliquam aspernatur id ut, deleniti exercitationem.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BlogPost