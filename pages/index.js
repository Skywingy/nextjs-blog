import Head from 'next/head';
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineArrowUp} from 'react-icons/ai';
import Image from 'next/image';
import shop from '../public/Shopping.jpeg';
import teach from '../public/React.jpeg';
import club from '../public/Club.jpeg';
import prof from '../public/Subject.png'
import css from '../public/css3-alt.svg';
import html from '../public/html5.svg';
import js from '../public/js.svg';
import rect from '../public/react.svg';
import sass from '../public/sass.svg';
import next from '../public/nextjs-icon-svgrepo-com.svg';
import tw from '../public/tailwind-svgrepo-com.svg';
import iconn from '../public/logo.png'
import node from '../public/node-js.svg';
import express from '../public/expressjs-icon.svg';
import mongo from '../public/mongodb-svgrepo-com.svg';
import pug from '../public/pug.png';
import fireb from '../public/firebase-svgrepo-com.svg';
import gre from '../public/postgresql-svgrepo-com.svg';
import git from '../public/git-svgrepo-com.svg';
import gh from '../public/github-svgrepo-com.svg';
import webpack from '../public/webpack-svgrepo-com.svg';
import ps from '../public/icons8-adobe-photoshop-100.png';
import {useState} from 'react';
import '../i18next';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {useTranslation} from 'react-i18next';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';


export default function Home() {
  

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mode, setMode] = useState('dark');
  const [darkMode, setDarkMode] = useState(true);
  
  const toggle=()=>{
    setDarkMode(!darkMode);
  };
  
  const { t, i18n } = useTranslation();
  function clickLanguage(lang){
    i18n.changeLanguage(lang);
  };

  const downloadPdfFile = () => {
    console.log("download logic goes here")
}
  
  return (
    <div className={darkMode ? 'dark' : ' '}>
      
      <Head>
        <title>Nyam-Erdene Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-slate-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        {/* Intro Section */}
        <section className='min-h-screen pb-10'>
          <nav className='py-10 mb-12 flex justify-between'>
            <a href='' className='text-xl font-burtons dark:text-white'><Image src={iconn} className=' w-8' alt='logo' ></Image></a>
            <ul className='hidden md:flex items-center'>
              {/* <li>
                <BsFillMoonStarsFill color='teal' onClick={toggle} className= 'cursor-pointer text-2xl '/>
              </li> */}
              <li className='try'>
                <input  type="checkbox" id="hide-checkbox" defaultChecked={false}/>
                <label for="hide-checkbox" class="toggle" onClick={toggle}>
                  <span class="toggle-button">
                    <span class="crater crater-1"></span>
                    <span class="crater crater-2"></span>
                    <span class="crater crater-3"></span>   
                    <span class="crater crater-4"></span>
                    <span class="crater crater-5"></span>
                    <span class="crater crater-6"></span>
                    <span class="crater crater-7"></span>
                  </span>
                  <span class="star star-1"></span>
                  <span class="star star-2"></span>
                  <span class="star star-3"></span>
                  <span class="star star-4"></span>
                  <span class="star star-5"></span>
                  <span class="star star-6"></span>
                  <span class="star star-7"></span>
                  <span class="star star-8"></span>
                </label>
              </li>
              <li>
                <a className='zogsohgui text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-3 rounded-md ml-8 hover:text-black' href='./resume.pdf' download='Nyam-Erdene N.'>Resume</a>
              </li>      
              <li>
                <Select
                onChange={(e, value) => clickLanguage(value)} 
                defaultValue="en"
                sx={{ borderColor: 'transparent'}}
                componentsProps={{
                  listbox: {
                    sx: {backgroundColor: '#f6ffff '}
                  }
                }}
                indicator={<KeyboardArrowDown />}
                className=' text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                >
                  <Option value="en">English</Option>
                  <Option value="Mn">Mongolia</Option>
                </Select>
              </li>        
            </ul>
            <section className="MOBILE-MENU flex md:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gradient-to-r from-cyan-500 to-teal-500"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gradient-to-r from-cyan-500 to-teal-500"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gradient-to-r from-cyan-500 to-teal-500"></span>
              </div>

              <div id={isNavOpen ? "showMenuNav" : "hideMenuNav"} className='bg-white dark:bg-gray-900'>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00ACC1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
                  <li className='ra'>
                    <DarkModeToggle
                    className='raa'
                      mode={mode}
                      dark="Dark"
                      light="Light"  
                      size="sm"
                      inactiveTrackColor="#e2e8f0"
                      inactiveTrackColorOnHover="#f8fafc"
                      inactiveTrackColorOnActive="#cbd5e1"
                      activeTrackColor="#009688"
                      activeTrackColorOnHover="#1e293b"
                      activeTrackColorOnActive="#0f172a"
                      inactiveThumbColor="#00ACC1"
                      activeThumbColor="white"
                      onChange={(mode) => {
                        setMode(mode);
                        setDarkMode(!darkMode);
                      }} 
                      
      
                    />
                  </li>
                  <li>
                    <Select
                    onChange={(e, value) => clickLanguage(value)} 
                    defaultValue="en"
                    sx={{ borderColor: 'transparent'}}
                    componentsProps={{
                      listbox: {
                        sx: {backgroundColor: '#f6ffff '}
                      }
                    }}
                    indicator={<KeyboardArrowDown />}
                    className=' text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                    >
                      <Option value="en">English</Option>
                      <Option value="Mn">Mongolian</Option>
                    </Select>
                  </li>
                  <li>
                    <a className='zogsohgui text-base bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-3 rounded-md ml-8 hover:text-black'>Resume</a>
                  </li>  
                </ul>
              </div>
            </section>
          </nav>
            <div className='flex justify-center'>
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                      <div className='p-9 md:p-10'>
                        <h2 className='text-4xl py-2 pb-10 text-teal-600 font-medium md:text-6xl text-center' suppressHydrationWarning>{t('Name.1')}</h2>
                        <p className=' text-center leading-10 text-md py-2 text-gray-800 md:text-lg max-w-4xl mx-auto dark:text-teal-50' suppressHydrationWarning>
                        {t('Who.1')}
                        </p>
                      </div>
                      
                      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                        <a href='https://www.facebook.com/skywing.nyamka/' target="_blank" rel="noreferrer"><AiFillGithub color="teal"/></a>
                        <a href='https://www.instagram.com/nymkaa.nka/' target="_blank" rel="noreferrer"><AiFillInstagram color="teal"/></a>
                        <a href='https://github.com/Skywingy' target="_blank" rel="noreferrer"><AiFillFacebook color="teal"/></a>
                      </div>
                  </div>
                    <div class="flip-card-back">
                    <div className='dugui relative mx-auto rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96 z-1'>
                    <Image src = {prof} alt='profile' width={600} className=' tadada relative mx-auto rounded-full z-0'/>
                      </div>
                      
                    </div>  
                  </div>
              </div>
            </div>
        </section>
        {/* Card Section */}
        <section>
          <div className='pb-10 pt-10'>
            <h3 className='text-center font-extrabold text-5xl mt-5 py-1 dark:text-teal-500' suppressHydrationWarning>{t('tools.1')}</h3>
          </div>
          <div className='lg:flex gap-10 md:flex justify-center'>
            <div className=' flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 md:w-80 lg:w-96 dark:bg-gradient-to-t from-cyan-500 to-teal-500'>
              <h3 className=' text-2xl font-medium pt-4 pb-10'>Front-End</h3>
              <div className='mini pb-6'>
                <Image src={html} alt="css" width={35} height={30}/>
                <p className='text-xs'>HTML</p>
              </div>
              <div className='mini pb-6'>
                <Image src={css} alt="css" width={35} height={30}/>
                <p className='text-xs'>CSS</p>
              </div>
              <div className='mini pb-6'>
                <Image src={js} alt="css" width={35} height={30}/>
                <p className='text-xs'>JavaScript</p>
              </div>
              <div className='mini pb-6'>
                <Image src={rect} alt="css" width={35} height={30}/>
                <p className='text-xs'>React</p>
              </div>
              <div className='mini pb-6'>
                <Image src={sass} alt="css" width={35} height={30}/>
                <p className='text-xs'>Sass</p>
              </div>
              <div className='mini pb-6'>
                <Image src={next} alt="css" width={35} height={30}/>
                <p className='text-xs'>NextJs</p>
              </div>
              <div className='mini pb-6'>
                <Image src={tw} alt="css" width={35} height={30}/>
                <p className='text-xs'>TailWind</p>
              </div>
            </div>
            <div className=' flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 md:w-80 lg:w-96 dark:bg-gradient-to-t from-cyan-500 to-teal-500'>
              <h3 className='text-2xl font-medium pt-4 pb-10'>Back-End</h3>
                <div className='mini pb-6'>
                  <Image src={node} alt="css" width={35} height={30}/>
                  <p className='text-xs'>Node JS</p>
                </div>
                <div className='mini pb-6'>
                  <Image src={express} alt="css" width={35} height={30}/>
                  <p className='text-xs'>Express JS</p>
                </div>
                <div className='mini pb-6'>
                  <Image src={mongo} alt="css" width={35} height={30}/>
                  <p className='text-xs'>MongoDB</p>
                </div>
                <div className='mini pb-6'>
                  <Image src={pug} alt="css" width={35} height={30} className='pug'/>
                  <p className='text-xs'>Pug</p>
                </div>
                <div className='mini pb-6'>
                  <Image src={fireb} alt="css" width={35} height={30}/>
                  <p className='text-xs'>FireBase</p>
                </div>
                <div className='mini pb-6'>
                  <Image src={gre} alt="css" width={35} height={30}/>
                  <p className='text-xs'>Postgre SQL</p>
                </div>
              </div>
            <div className=' flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 md:w-80 lg:w-96 dark:bg-gradient-to-t from-cyan-500 to-teal-500'>
              <h3 className='text-2xl font-medium pt-4 pb-10'>Miscellaneous</h3>
              <div className='mini pb-6'>
                <Image src={git} alt="css" width={35} height={30}/>
                <p className='text-xs'>Git</p>
              </div>
              <div className='mini pb-6'>
                <Image src={gh} alt="css" width={35} height={30}/>
                <p className='text-xs'>GitHub</p>
              </div>
              <div className='mini pb-6'>
                <Image src={webpack} alt="css" width={35} height={30}/>
                <p className='text-xs'>WebPack</p>
              </div>
              <div className='mini pb-6'>
                <Image src={ps} alt="css" width={35} height={30}/>
                <p className='text-xs'>PhotoShop</p>
              </div>
            </div>
          </div>
        </section>
        {/* Project Section */}
        <section>
          <div className='pb-10 pt-10'>
            <h3 className='text-center font-extrabold mt-5 text-5xl py-1 dark:text-teal-500' suppressHydrationWarning>{t('personal.1')}</h3>
          </div>
          <div className='flex flex-col gap-10 py-10'>
            <div className='cardie pb-8 flex flex-col'>
              <div className='title'>
                <p className=' text-4xl uppercase font-extrabold dark:text-teal-200' suppressHydrationWarning>{t('title.1')}</p>
                <p className=' text-2xl uppercase font-medium pb-10 dark:text-teal-50' suppressHydrationWarning>{t('subtitle.1')}</p>
                
              </div>
              <div className='spare flex flex-col lg:flex-row'>
                  <Image src={club} className='rounded-lg w-full lg:w-7/12 shadow-2xl' alt='portfolioC' />
                  <span className='info pl-0 pt-8 lg:pl-14 lg:pt-0'>
                    <h2 className='text-3xl pb-2  font-extrabold dark:text-teal-100' suppressHydrationWarning>{t('summ.1')}</h2>
                    <p className=' pb-10 dark:text-teal-50' suppressHydrationWarning>{t('summary.1')}</p>
                    <h3 className='text-xl font-bold pb-2 dark:text-teal-100' suppressHydrationWarning>{t('tech.1')}</h3>
                    <p className=' pb-10  dark:text-teal-50' suppressHydrationWarning>{t('technologies.1')}</p>
                    <span className='tovch flex gap-4'>
                      <a href='https://frightful-spider-69655.herokuapp.com' target="_blank" className='uppercase text-xl pr-8 dark:text-teal-50' rel="noreferrer">Live Preview</a>
                      <a href='https://github.com/Skywingy/Members-Only' target="_blank" className='uppercase text-xl dark:text-teal-50' rel="noreferrer">View Code</a>
                    </span>
                  </span>
              </div>
            </div>
            <div className='divider border border-cyan-500'></div>
            <div className='cardie pb-8 flex flex-col'>
              <div className='titles'>
                <p className=' text-4xl uppercase font-extrabold  dark:text-teal-200' suppressHydrationWarning>{t('title.2')}</p>
                <p className=' text-2xl uppercase font-medium pb-10  dark:text-teal-50' suppressHydrationWarning>{t('subtitle.2')}</p>
                
              </div>
              <div className='spare flex flex-col lg:flex-row'>
                  <Image src={shop} className='rounded-lg w-full lg:w-7/12 shadow-2xl' alt='portfolioC' />
                  <span className='info pl-0 pt-8 lg:pl-14 lg:pt-0'>
                    <h2 className='text-3xl pb-2  font-extrabold dark:text-teal-100' suppressHydrationWarning>{t('summ.1')}</h2>
                    <p className=' pb-10 dark:text-teal-50' suppressHydrationWarning>{t('summary.2')}</p>
                    <h3 className='text-xl font-bold pb-2 dark:text-teal-100' suppressHydrationWarning>{t('tech.1')}</h3>
                    <p className=' pb-10  dark:text-teal-50' suppressHydrationWarning>{t('technologies.2')}</p>
                    <span className='tovch flex gap-4'>
                      <a href='https://skywingy.github.io/ghipli-prints-cart/' target="_blank" className='uppercase text-xl pr-8 dark:text-teal-50' rel="noreferrer">Live Preview</a>
                      <a href='https://github.com/Skywingy/ghipli-prints-cart' target="_blank" className='uppercase text-xl dark:text-teal-50' rel="noreferrer">View Code</a>
                    </span>
                  </span>
              </div>
            </div>
            <div className='divider  border border-cyan-500'></div>
            <div className='cardie pb-8 flex flex-col'>
              <div className='titles'>
                <p className=' text-4xl font-extrabold dark:text-teal-200' suppressHydrationWarning>{t('title.3')}</p>
                <p className=' text-2xl font-medium pb-10 dark:text-teal-50' suppressHydrationWarning>{t('subtitle.3')}</p>
                
              </div>
              <div className='spare flex flex-col lg:flex-row'>
                  <Image src={teach} className='rounded-lg w-full lg:w-7/12 shadow-2xl' alt='portfolioC' />
                  <span className='info pl-0 pt-8 lg:pl-14 lg:pt-0'>
                    <h2 className='text-3xl pb-2  font-extrabold dark:text-teal-100' suppressHydrationWarning>{t('summ.1')}</h2>
                    <p className=' pb-10 dark:text-teal-50' suppressHydrationWarning>{t('summary.3')}</p>
                    <h3 className='text-xl pb-2 font-bold dark:text-teal-100' suppressHydrationWarning>{t('tech.1')}</h3>
                    <p className=' pb-10  dark:text-teal-50' suppressHydrationWarning>{t('technologies.3')}</p>
                    <span className='tovch flex gap-4'>
                      <a href='#' className='uppercase text-xl pr-8 dark:text-teal-50'>Live Preview</a>
                      <a href='#' className='uppercase text-xl dark:text-teal-50'>View Code</a>
                    </span>
                  </span>
              </div>
            </div>
            <div className='divider border border-cyan-500'></div>
            <div className='pb-8 pt-4 cardie flex flex-row'>
                  <a href='https://github.com/Skywingy?tab=repositories' target="_blank" className='text-black font-bold text-4xl dark:text-teal-50' suppressHydrationWarning rel="noreferrer">{t('view.1')}</a>
                  <AiOutlineArrowUp className='text-black text-5xl pl-2 pr-2 dark:text-teal-50' style = {{transform: 'rotate(45deg)' }}/>
            </div>
            <div className='divider border border-cyan-500'></div>
          </div>
        </section>
        <section className='pb-32'>
        <div className='pb-8 pt-4 cardie flex flex-col'>
                    <span className='flex flex-row pb-20'>
                      <h1 className='text-black font-bold text-4xl dark:text-teal-50' suppressHydrationWarning>{t('contact.1')}</h1>
                      <AiOutlineArrowUp className='text-black text-5xl pl-2 pr-2 dark:text-teal-50' style = {{transform: 'rotate(45deg)' }}/>
                    </span>
                  <p className='text-black uppercase font-bold text-3xl pb-6 dark:text-teal-50' suppressHydrationWarning >{t('contact.2')}</p>
                  <p className='text-black uppercase pb-6 font-bold text-3xl dark:text-teal-50' suppressHydrationWarning >{t('contact.3')}</p>
                  <a href='https://www.instagram.com/nymkaa.nka/' target="_blank" className='text-black pb-6 uppercase font-bold text-3xl dark:text-teal-50' suppressHydrationWarning rel="noreferrer" >INSTAGRAM</a>
                  <a href='https://www.facebook.com/skywing.nyamka/' target="_blank" className='text-black pb-6 uppercase font-bold text-3xl dark:text-teal-50' suppressHydrationWarning rel="noreferrer" >GITHUB</a>
                  
                  
                  
            </div>
        </section>
      </main>
        <style>{`
        #hideMenuNav {
          display: none;
        }
        #showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 50vh;
          top: 0;
          left: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
