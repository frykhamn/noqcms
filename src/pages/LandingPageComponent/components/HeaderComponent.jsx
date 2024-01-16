import React from 'react';
import heroImage from '../../../assets/images/hero.png';



const HeaderComponent = () => {

    return (
        <header
            className="bg-white dark:bg-gray-900 min-h-80 sm:min-h-[620px] md:min-h-[920px]"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundColor: '#889892',
                backgroundSize: 'cover',
                
            }}
        >
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:p-48">
                <div className="mr-auto place-self-center p-6">
                    <h1 className="max-w-2xl mb-8 text-4xl text-white tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-white">
                       <span className='block mb-4'> Ingen ska behöva</span> <span className='block mb-8'>sova ute</span>
                    </h1>
            
                    <a
                        href="https://www.linkedin.com/in/ovehol/"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-900 rounded-lg bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Anmäl ditt intresse
                    </a>
                </div>
         
            </div>
        </header>
    );
};

export default HeaderComponent;