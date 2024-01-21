import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/hero.png';
import BigButton from './BigButton';



const HeaderComponent = () => {

    return (
        <header
            className="bg-cover bg-center flex justify-center items-center dark:bg-gray-900 min-h-80 sm:min-h-[620px] md:min-h-[920px]"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundColor: '#889892',
                backgroundSize: 'cover',

            }}
        >

            <div className="text-white p-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-noto mb-4 md:text-5xl xl:text-7xl">
                    <span className='block mb-4'> Ingen ska behöva</span> <span className='block mb-8'>sova ute</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link to={"/partner"}>
                        <BigButton variant={"primary"} title={"Bli Partner"}>
                        </BigButton>
                    </Link>
                    <a
                        href="https://www.linkedin.com/in/ovehol/"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <BigButton variant={"secondary"} title={"Bli Temamedlem"}>
                        </BigButton>
                    </a>
                </div>
            </div>

        </header>
    );
};

export default HeaderComponent;


function Code() {
    return (
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:p-48">
            <div className="mr-auto place-self-center p-6">


                <a
                    href="https://www.linkedin.com/in/ovehol/"
                    target="_blank"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-900 rounded-lg bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" rel="noreferrer"
                >
                    Anmäl ditt intresse
                </a>
            </div>

        </div>
    );
}