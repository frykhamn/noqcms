import React from 'react';
import heroImage from '../../../assets/images/hero.png';

import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigator = useNavigate();  

  function loginpageHandler(){
    navigator('/login-page')
}
    return (
        <header className="bg-white dark:bg-gray-900" style={{ backgroundColor: '#889892' }}>
          {/* // LoginButton */}
          <button onClick={loginpageHandler}>Login</button>
          
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              
                <div className="mr-auto place-self-center lg:col-span-7 p-6">
                    <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Ingen ska  köa för en sovplats
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        NoQ - en IT-lösning för att boka sovplats för de som inte har boende
                    </p>
                    <a
                        href="https://www.linkedin.com/in/ovehol/"
                        target="_blank"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-900 rounded-lg bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Anmäl ditt intresse
                    </a>
                </div>
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                  <img src={heroImage} alt="mockup" className="rounded-lg" /> 
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;