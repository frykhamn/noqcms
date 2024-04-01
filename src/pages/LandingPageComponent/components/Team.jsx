import ProfileGallery from './ProfileGallery';
import 'tailwindcss/tailwind.css';
import SmallButttonComponent from './SmallButtonComponent';

function Team() {

    const handleClick = () => {
        //navigate to /about    
    };

    return (
        <section className="py-12"  style={{ backgroundColor: '#43beb6' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="mb-3 font-semibold">
                        Teamet bakom NoQ
                    </h2>
                    <p className="text-white-600 font-semibold">
                        Tillsammans delar vi en gemensam villja att bidra med vår kunskap till att skapa en
                        digtal lösning för att underlätta processen för brukare,
                        härbärgen och handläggare.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-14 mb-10">
                    <ProfileGallery></ProfileGallery>
                    {/*                     
                    <SmallButttonComponent
                        title={"Om oss"}
                        onClick={handleClick}
                    ></SmallButttonComponent> 
                    */}
                </div>
            </div>
        </section>
    );
}

export default Team