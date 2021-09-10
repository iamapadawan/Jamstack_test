import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {<div>
  {/* Section 1 */}
  <section className="relative overflow-hidden">
    <div className="flex">
      <div className="flex-1 h-1.5 bg-green-400" />
      <div className="flex-1 h-1.5 bg-red-500" />
      <div className="flex-1 h-1.5 bg-yellow-400" />
      <div className="flex-1 h-1.5 bg-indigo-500" />
      <div className="flex-1 h-1.5 bg-pink-400" />
    </div>
    {/* Background Layer */}
    <div className="absolute z-10 w-1/2 h-full bg-gradient-to-tr from-gray-900 via-gray-900 to-black">
      <div className="absolute right-0 w-32 h-full -mr-20 transform bg-white bg-opacity-25 opacity-10 rotate-6" />
    </div>
    <div className="absolute z-20 w-1/2 h-full bg-gradient-to-tl left-1/2 from-gray-900 via-gray-900 to-black">
      <div className="absolute left-0 w-full h-full bg-white opacity-25 bg-opacity-10" />
    </div>
    {/* End Background Layer */}
    <nav x-data="{ mobile: false }" className="relative z-40 px-10 pt-6 mx-auto md:pb-6 max-w-7xl md:flex md:justify-between md:items-center">
      <div className="relative z-20 flex items-center justify-between">
        <div>
          <a href="#_" className="text-lg font-semibold text-white md:text-xl">
            <svg className="w-auto h-5 -mt-1 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 50"><defs /><path fillRule="nonzero" d="M.41 44.531c0-.097.005-.23.015-.395.01-.166.034-.45.073-.85.04-.4.098-.947.176-1.64.078-.694.195-1.607.351-2.74l2.49-19.13H0l.674-2.901 3.574-1.377c.39-.371.781-.854 1.172-1.45.39-.596.776-1.245 1.157-1.948.381-.704.742-1.436 1.084-2.198.342-.761.66-1.494.952-2.197h4.307l-.967 7.647h6.797l-.645 4.423h-6.709L8.965 37.764a61.138 61.138 0 00-.352 2.666 18.603 18.603 0 00-.117 1.904c0 .937.161 1.592.483 1.963.323.371.923.557 1.802.557.371 0 .791-.054 1.26-.162a11.004 11.004 0 002.783-1.054c.45-.244.85-.503 1.201-.777l.645 2.315c-.39.469-.933.971-1.626 1.509a14.356 14.356 0 01-2.432 1.494c-.927.459-1.958.84-3.09 1.142a13.788 13.788 0 01-3.575.454 8.546 8.546 0 01-2.08-.249 4.623 4.623 0 01-1.772-.864c-.518-.41-.928-.952-1.23-1.626-.303-.674-.455-1.509-.455-2.505zm20.098-7.236c0-1.719.19-3.462.571-5.23.381-1.767.942-3.471 1.685-5.112a23.316 23.316 0 012.768-4.614 19.204 19.204 0 013.838-3.765 17.989 17.989 0 014.863-2.534c1.788-.615 3.746-.923 5.874-.923 1.094 0 2.227.122 3.399.366 1.172.245 2.197.503 3.076.777l4.014-1.143-3.809 27.95c-.098.8-.034 1.371.19 1.713.225.342.503.513.836.513.273 0 .615-.088 1.025-.264.41-.175.957-.537 1.64-1.084l.88 1.875c-.137.235-.42.572-.85 1.011-.43.44-.967.879-1.612 1.318a10.7 10.7 0 01-2.24 1.143 7.744 7.744 0 01-2.77.483c-1.366 0-2.46-.322-3.28-.966-.82-.645-1.202-1.641-1.143-2.989l-.234-.38a17.32 17.32 0 01-1.729 1.61c-.645.528-1.338.992-2.08 1.392-.742.4-1.543.723-2.402.967a9.925 9.925 0 01-2.725.366c-1.738 0-3.228-.322-4.468-.966a8.414 8.414 0 01-3.047-2.652c-.79-1.123-1.367-2.446-1.728-3.97-.362-1.523-.542-3.154-.542-4.892zm12.568 7.793c.567 0 1.133-.103 1.7-.308a7.645 7.645 0 001.64-.835 10.88 10.88 0 001.494-1.2c.469-.45.908-.91 1.319-1.378l2.93-22.002a6.166 6.166 0 00-1.363-.322 12.166 12.166 0 00-1.48-.088c-1.27 0-2.412.264-3.427.791a9.02 9.02 0 00-2.696 2.153 13.305 13.305 0 00-1.992 3.15 23.552 23.552 0 00-1.347 3.764 29.267 29.267 0 00-.777 4.043 32.962 32.962 0 00-.249 3.94c0 2.618.357 4.654 1.07 6.11.712 1.454 1.772 2.182 3.178 2.182zm24.346.527c.137-1.172.322-2.593.557-4.262.234-1.67.502-3.555.805-5.655.303-2.1.63-4.4.982-6.9.351-2.5.722-5.155 1.113-7.968l-3.78-1.7.47-2.49 10.458-1.523 1.553.703-3.896 27.246c-.215 1.485.068 2.227.85 2.227.331 0 .712-.117 1.142-.352.43-.234 1.015-.664 1.758-1.289l.85 1.905c-.157.214-.455.556-.894 1.025-.44.469-1.001.938-1.685 1.406-.684.469-1.48.884-2.388 1.245-.908.362-1.919.542-3.032.542-1.7 0-2.973-.356-3.823-1.069-.85-.713-1.196-1.743-1.04-3.09zm8.877-36.27a3.703 3.703 0 01-1.597-.35 4.504 4.504 0 01-1.318-.938c-.381-.391-.679-.84-.894-1.348a4.02 4.02 0 01-.322-1.582 5.47 5.47 0 01.425-1.992 5.172 5.172 0 011.07-1.626c.448-.46.98-.825 1.596-1.099A4.885 4.885 0 0167.266 0c.683 0 1.294.112 1.83.337.538.225.997.527 1.378.908.38.381.669.816.864 1.304.195.488.293.996.293 1.523a6.395 6.395 0 01-.381 2.022 4.746 4.746 0 01-1.04 1.684 5.076 5.076 0 01-1.67 1.143c-.654.283-1.401.425-2.241.425zm9.756 36.475c0-.312.024-.693.073-1.142.049-.45.093-.82.132-1.114l5.185-37.793-3.75-1.26.586-2.43L88.331.85l1.464.79-5.625 41.426c-.098.684-.078 1.226.059 1.626.136.4.4.601.79.601.294 0 .645-.103 1.055-.308.41-.205 1.026-.64 1.846-1.303l.85 1.875c-.137.214-.42.556-.85 1.025-.43.469-.977.938-1.64 1.406-.665.469-1.436.884-2.315 1.245-.88.362-1.846.542-2.9.542a8.334 8.334 0 01-1.963-.22 4.66 4.66 0 01-1.582-.688 3.386 3.386 0 01-1.07-1.216c-.263-.498-.395-1.108-.395-1.83zm15.527 2.051l1.26-5.244c.312.273.732.576 1.26.908.527.332 1.132.645 1.816.938.684.293 1.426.537 2.227.732.8.195 1.64.293 2.52.293.565 0 1.156-.054 1.772-.161a4.938 4.938 0 001.67-.6 3.573 3.573 0 001.23-1.216c.322-.518.483-1.177.483-1.978 0-.684-.136-1.318-.41-1.904a7.19 7.19 0 00-1.113-1.685 13.066 13.066 0 00-1.67-1.582 44.345 44.345 0 00-2.08-1.567c-.606-.43-1.25-.952-1.934-1.568a13.21 13.21 0 01-1.904-2.153 11.898 11.898 0 01-1.45-2.754c-.381-1.016-.572-2.148-.572-3.398 0-1.465.318-2.798.953-4a9.531 9.531 0 012.636-3.105c1.123-.869 2.461-1.538 4.014-2.007 1.553-.468 3.237-.703 5.054-.703.8 0 1.596.034 2.387.103.791.068 1.529.156 2.212.263.684.108 1.285.225 1.802.352.518.127.903.249 1.157.366l-1.2 5.537c-.138-.176-.382-.41-.733-.703a7.497 7.497 0 00-1.348-.864 10.425 10.425 0 00-1.875-.733 8.243 8.243 0 00-2.314-.307c-.606 0-1.202.063-1.787.19a4.927 4.927 0 00-1.582.63c-.47.293-.85.67-1.143 1.128-.293.46-.46 1.03-.498 1.714a4.54 4.54 0 00.278 1.89c.225.595.557 1.167.996 1.713.44.547.972 1.09 1.597 1.626a40.865 40.865 0 002.11 1.685c.8.606 1.572 1.235 2.314 1.89a13.727 13.727 0 011.977 2.153c.577.781 1.04 1.65 1.392 2.607.352.957.527 2.051.527 3.282 0 1.699-.356 3.178-1.07 4.438a9.732 9.732 0 01-2.856 3.164c-1.19.85-2.573 1.485-4.145 1.905-1.572.42-3.208.63-4.907.63-.918 0-1.856-.06-2.813-.176a27.8 27.8 0 01-2.68-.454c-.83-.186-1.563-.391-2.198-.616-.634-.224-1.089-.444-1.362-.659z" /></svg>
          </a>
        </div>
        {/* Mobile menu button */}
        <div @click="mobile = !mobile" className="flex md:hidden">
          <button type="button" className="text-gray-200 hover:text-gray-100 focus:outline-none focus:text-gray-100" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu open: "block", Menu closed: "hidden" */}
      <div :class="{ 'hidden' : !mobile, 'flex': mobile }" className="left-0 z-10 items-center justify-center w-full font-semibold select-none md:flex lg:absolute hidden">
        <div className="flex flex-col justify-center w-full mt-4 space-y-2 md:mt-0 md:flex-row md:space-x-6 lg:space-x-10 xl:space-x-16 md:space-y-0">
          <div x-data="{ isOpen: false }" @mouseenter="isOpen = true" @mouseleave="isOpen = false" className="relative py-3">
            <div className="relative z-10 flex items-center space-x-1 text-gray-300 cursor-pointer lg:space-x-3 hover:text-gray-100 focus:outline-none">
              <span className>Product</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div x-show="isOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 translate-y-1" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-1" className="absolute left-0 z-20 z-30 w-full p-3 mt-3 -ml-0 space-y-2 overflow-hidden transform shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 lg:left-1/2 lg:-ml-48 md:w-96 rounded-xl ring-1 ring-black ring-opacity-5" style={{display: 'none'}}>
              <a href="#_" className="block px-4 py-3 pr-0 text-base text-gray-200 cursor-pointer hover:bg-gray-900 rounded-xl hover:text-gray-100">
                <span className="flex items-start space-x-1 md:space-x-3">
                  <svg className="flex-shrink-0 mt-1 text-blue-500 w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <span className="flex flex-col">
                    <span>Drag'n Drop</span>
                    <span className="text-sm font-normal text-gray-300">Simple drag'n drop tailwind page creator.</span>
                  </span>
                </span>
              </a>
              <a href="#_" className="block px-4 py-3 pr-0 text-base text-gray-200 cursor-pointer hover:bg-gray-900 rounded-xl hover:text-gray-100">
                <span className="flex items-start space-x-4">
                  <svg className="flex-shrink-0 mt-1 text-blue-500 w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="flex flex-col">
                    <span>Premium Tools</span>
                    <span className="text-sm font-normal text-gray-300">Gain access to the ultimate set of tools.</span>
                  </span>
                </span>
              </a>
              <a href="#_" className="block px-4 py-3 pr-0 text-base text-gray-200 cursor-pointer hover:bg-gray-900 rounded-xl hover:text-gray-100">
                <span className="flex items-start space-x-4">
                  <svg className="flex-shrink-0 mt-1 text-blue-500 w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex flex-col">
                    <span>Community</span>
                    <span className="text-sm font-normal text-gray-300">A community of creators like yourself.</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <a href="#_" className="py-3 text-gray-300 hover:text-gray-100 hover:underline">Pricing</a>
          <div x-data="{ isOpen: false }" @mouseenter="isOpen = true" @mouseleave="isOpen = false" className="relative py-3">
            <div className="relative z-10 flex items-center space-x-1 text-gray-300 cursor-pointer lg:space-x-3 hover:text-gray-200 focus:outline-none">
              <span>Features</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div x-show="isOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 translate-y-1" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-1" className="absolute left-0 z-20 z-30 w-full p-3 mt-3 -ml-0 space-y-2 overflow-hidden transform shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 lg:left-1/2 lg:-ml-24 md:w-48 rounded-xl ring-1 ring-black ring-opacity-5" style={{display: 'none'}}>
              <a href="#_" className="block px-4 py-3 text-sm text-gray-200 capitalize cursor-pointer hover:bg-gray-900 rounded-xl hover:text-gray-200">
                Design Faster
              </a>
              <a href="#_" className="block px-4 py-3 text-sm text-gray-200 capitalize hover:bg-gray-900 rounded-xl hover:text-gray-200">
                Easily Export
              </a>
              <a href="#_" className="block px-4 py-3 text-sm text-gray-200 capitalize hover:bg-gray-900 rounded-xl hover:text-gray-200">
                Unlimited Combos
              </a>
              <a href="#_" className="block px-4 py-3 text-sm text-gray-200 capitalize hover:bg-gray-900 rounded-xl hover:text-gray-200">
                And More
              </a>
            </div>
          </div>
          <div x-data="{ isOpen: false }" @mouseenter="isOpen = true" @mouseleave="isOpen = false" className="relative py-3">
            <div className="relative z-10 flex items-center space-x-1 text-gray-300 cursor-pointer lg:space-x-3 hover:text-gray-100 focus:outline-none">
              <span>Resources</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div x-show="isOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 translate-y-1" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-1" className="absolute left-0 z-20 z-30 w-full p-3 mt-3 -ml-0 space-y-2 overflow-hidden transform shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 lg:-ml-24 lg:left-1/2 md:w-48 rounded-xl ring-1 ring-black ring-opacity-5" style={{display: 'none'}}>
              <a href="#_" className="block px-4 py-3 text-sm text-gray-200 capitalize cursor-pointer hover:bg-gray-900 rounded-xl hover:text-gray-100">
                About Us
              </a>
              <a href="#_" className="block px-4 py-3 text-sm text-gray-200 capitalize hover:bg-gray-900 rounded-xl hover:text-gray-100">
                Press Release
              </a>
              <a href="#_" className="block px-4 py-3 text-sm text-gray-200 capitalize hover:bg-gray-900 rounded-xl hover:text-gray-100">
                Contact Us
              </a>
              <a href="#_" className="block px-4 py-3 text-sm text-gray-200 capitalize hover:bg-gray-900 rounded-xl hover:text-gray-100">
                Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>
      <div :class="{ 'flex' : mobile, 'hidden md:flex' : !mobile }" className="relative z-20 flex-col justify-center pr-5 mt-4 space-y-8 md:pr-3 lg:pr-0 md:flex-row md:space-y-0 md:items-center md:space-x-6 md:mt-0 hidden md:flex">
        <a className="flex-shrink-0 font-semibold text-gray-200 hover:underline" href="#_">Sign in</a>
        <a href="#_" className="flex-shrink-0 w-auto text-base font-semibold leading-5 text-left text-gray-200 capitalize bg-transparent rounded-lg md:text-sm md:py-3 md:px-8 md:font-medium md:text-center md:text-white md:bg-gray-800 md:mx-0">
          Sign up
        </a>
      </div>
    </nav>
    <div className="relative z-30 flex flex-col px-10 pt-20 pb-32 mx-auto md:flex-row sm:pt-24 sm:pb-32 md:pt-32 md:pb-40 max-w-7xl">
      <div className="flex flex-col items-start justify-center w-full space-y-8 md:w-1/2 sm:pr-8 xl:pr-20">
        <h1 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl">Get more leads, get more sales.</h1>
        <p className="text-base text-blue-200 lg:text-xl">Start building the a landing page that converts your visitors into leads and your leads into customers. Use our templates to help your app grow.</p>
        <a href="#_" className="flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
          Get Started Today
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>
      <div className="relative flex items-center justify-center w-full mt-10 md:mt-0 md:w-1/2">
        <svg className="absolute top-0 right-0 z-0 hidden w-32 h-32 -mt-12 -mr-12 text-blue-400 fill-current md:block" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth={1} fillRule="evenodd"><g fillRule="nonzero"><g><g><circle cx="3.261" cy="3.445" r="2.72" /><circle cx="15.296" cy="3.445" r="2.719" /><circle cx="27.333" cy="3.445" r="2.72" /><circle cx="39.369" cy="3.445" r="2.72" /><circle cx="51.405" cy="3.445" r="2.72" /><circle cx="63.441" cy="3.445" r="2.72" /><circle cx="75.479" cy="3.445" r="2.72" /><circle cx="87.514" cy="3.445" r="2.719" /></g><g transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72" /><circle cx="15.296" cy="3.525" r="2.719" /><circle cx="27.333" cy="3.525" r="2.72" /><circle cx="39.369" cy="3.525" r="2.72" /><circle cx="51.405" cy="3.525" r="2.72" /><circle cx="63.441" cy="3.525" r="2.72" /><circle cx="75.479" cy="3.525" r="2.72" /><circle cx="87.514" cy="3.525" r="2.719" /></g><g transform="translate(0 24)"><circle cx="3.261" cy="3.605" r="2.72" /><circle cx="15.296" cy="3.605" r="2.719" /><circle cx="27.333" cy="3.605" r="2.72" /><circle cx="39.369" cy="3.605" r="2.72" /><circle cx="51.405" cy="3.605" r="2.72" /><circle cx="63.441" cy="3.605" r="2.72" /><circle cx="75.479" cy="3.605" r="2.72" /><circle cx="87.514" cy="3.605" r="2.719" /></g><g transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72" /><circle cx="15.296" cy="3.686" r="2.719" /><circle cx="27.333" cy="3.686" r="2.72" /><circle cx="39.369" cy="3.686" r="2.72" /><circle cx="51.405" cy="3.686" r="2.72" /><circle cx="63.441" cy="3.686" r="2.72" /><circle cx="75.479" cy="3.686" r="2.72" /><circle cx="87.514" cy="3.686" r="2.719" /></g><g transform="translate(0 49)"><circle cx="3.261" cy="2.767" r="2.72" /><circle cx="15.296" cy="2.767" r="2.719" /><circle cx="27.333" cy="2.767" r="2.72" /><circle cx="39.369" cy="2.767" r="2.72" /><circle cx="51.405" cy="2.767" r="2.72" /><circle cx="63.441" cy="2.767" r="2.72" /><circle cx="75.479" cy="2.767" r="2.72" /><circle cx="87.514" cy="2.767" r="2.719" /></g><g transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72" /><circle cx="15.296" cy="2.846" r="2.719" /><circle cx="27.333" cy="2.846" r="2.72" /><circle cx="39.369" cy="2.846" r="2.72" /><circle cx="51.405" cy="2.846" r="2.72" /><circle cx="63.441" cy="2.846" r="2.72" /><circle cx="75.479" cy="2.846" r="2.72" /><circle cx="87.514" cy="2.846" r="2.719" /></g><g transform="translate(0 73)"><circle cx="3.261" cy="2.926" r="2.72" /><circle cx="15.296" cy="2.926" r="2.719" /><circle cx="27.333" cy="2.926" r="2.72" /><circle cx="39.369" cy="2.926" r="2.72" /><circle cx="51.405" cy="2.926" r="2.72" /><circle cx="63.441" cy="2.926" r="2.72" /><circle cx="75.479" cy="2.926" r="2.72" /><circle cx="87.514" cy="2.926" r="2.719" /></g><g transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72" /><circle cx="15.296" cy="3.006" r="2.719" /><circle cx="27.333" cy="3.006" r="2.72" /><circle cx="39.369" cy="3.006" r="2.72" /><circle cx="51.405" cy="3.006" r="2.72" /><circle cx="63.441" cy="3.006" r="2.72" /><circle cx="75.479" cy="3.006" r="2.72" /><circle cx="87.514" cy="3.006" r="2.719" /></g></g></g></g></svg>
        <div className="relative cursor-pointer group">
          <div className="absolute flex items-center justify-center w-20 h-20 -mt-10 -ml-10 transition duration-150 ease-in-out transform bg-white bg-opacity-100 rounded-full top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-auto text-blue-600 fill-current" viewBox="0 0 36 50"><defs /><path fillRule="nonzero" d="M3.167.376A2.001 2.001 0 000 2v46a2.001 2.001 0 003.167 1.624l32-23a2 2 0 000-3.248l-32-23z" /></svg>
          </div>
          <img src="https://cdn.devdojo.com/images/february2021/hero-photo.jpg?w=1280&h=820&fit=crop" className="rounded-lg" />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 z-20 w-full h-full overflow-x-hidden opacity-50 bg-gradient-to-b from-transparent via-transparent to-black" />
  </section>
  {/* Section 2 */}
  <section className="relative pb-12 overflow-x-hidden bg-white border-t border-b border-gray-100 pt-7">
    <p className="w-full text-xs font-bold tracking-wider text-center text-black uppercase pb-7 upercase">Trusted by these leading companies</p>
    <div className="px-8 mx-auto max-w-7xl-xl">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <svg className="w-auto h-12 text-black fill-current" viewBox="0 0 2428 1004" xmlns="http://www.w3.org/2000/svg"><path d="M1221.47 109.639a73.59 73.59 0 0144.76 17.898c17.016 16.108 21.477 42.969 13.423 64.46-31.31 64.446-105.768 107.493-156.649 121.734-30.44 7.16-68.921 7.16-96.676-3.58-13.437 8.054-24.773 34.085-41.18 23.268-23.747-18.547-3.19-47.573-16.9-68.17-2.827-4.24-9.947-4.551-13.527-11.49-18.806-41.18 4.475-80.568 30.427-111.89 43.268-48.274 167.401-102.06 236.323-32.23zm-144.12 32.217c-24.175 4.474-51.476 14.993-66.236 32.23-14.773 17.223-24.163 34.02-15.214 51.917 31.335-23.267 46.549-55.497 81.464-75.185-.013-3.593 5.356-6.278-.013-8.962zm145.923 8.962c-61.775-5.383-108.323 41.179-152.187 85.924-2.685 7.16-18.793 15.214-6.264 23.268 59.09 5.37 115.483-11.62 158.451-51.023 12.542-11.634 21.465-26.847 15.227-42.969-2.685-6.251-9.001-12.516-15.227-15.2zm535.276 266.749c28.65 69.829 52.812 179.916 0 247.06-14.32 16.11-39.377 30.96-55.485 18.794-59.09-47.43-84.135-115.47-120.84-176.35-5.369-2.685-5.369 4.488-8.054 7.172-13.423 61.762 11.634 142.33-30.427 190.656-16.108 2.685-31.179-5.603-36.704-21.478-20.596-63.552.869-129.801 6.238-193.353 12.542-32.23 17.912-69.816 45.667-93.992 44.759 17.898 66.236 68.04 92.176 104.744 18.82 27.742 34.02 59.077 55.498 84.135 18.793-8.055 9.545-32.62 8.962-47.444-7.186-58.182-23.294-111.89-38.52-167.388-.87-14.318-8.924-38.494 6.264-47.443 40.336 17.911 57.313 59.972 75.225 94.887zm-270.33-21.491c0 13.437-10.738 30.22-19.713 32.23-85.925 13.424-181.707 5.37-262.262 32.217-2.685 9.844 8.95 11.634 15.214 14.318 68.908 10.74 141.435 13.424 208.58 30.44 35.498 9.014 48.35 51.036 51.035 85.938 1.648 27.522-8.936 60.867-35.81 79.673-66.223 42.074-167.374 40.271-234.531 1.803-25.668-14.396-50.129-37.586-51.918-66.237.155-22.748 9.857-40.66 25.965-49.233 64.46-25.965 144.12-11.62 199.63 21.478 3.554 17.911-15.822 16.939-25.096 23.28-61.775 35.81-108.31-40.257-165.598-12.54-8.054 5.369-13.877 20.349-4.474 25.07 70.71 31.335 149.49 8.949 219.305-10.74 8.055-2.684 17.912-10.738 18.794-18.792-2.685-28.65-34.902-34.902-55.498-42.956-60.867-15.214-127.999-15.214-193.353-21.478-12.529-2.685-28.495-11.414-32.217-21.478-7.16-21.478-7.16-51.023 8.949-68.921 83.24-73.41 209.449-67.132 315.075-47.444 7.172 2.633 15.226 5.318 17.924 13.372zm-391.167 34.02c8.054 85.924 12.528 165.61 10.739 256.01-1.79 11.62-15.214 14.318-24.163 18.793-14.319 2.685-32.827-.363-38.494-8.054-20.583-33.138-13.424-77.87-15.214-118.155 2.685-63.539 1.79-132.473 19.701-191.563 3.424-8.586 13.424-16.109 21.478-10.752 21.478 10.752 25.058 32.243 25.953 53.72zm994.521-12.53c4.306 7.238 8.807 18.418 0 23.269-40.284 17.898-94.874 9.844-141.435 15.213-12.529 10.74-22.386 28.637-17.924 44.759 4.5 2.685 8.508 6.77 13.45 6.251 28.624 1.803 71.605-13.423 90.425 13.424 4.59 7.99-.623 37.82-13.424 38.494-34.928 4.5-92.358-4.384-109.232 4.5-21.477 14.32-19.7 42.062-27.755 64.46 15.227 9.844 31.167-.233 49.22-2.697 33.151-5.37 69.856-15.214 102.954-8.055 6.265 11.634 15.227 24.176 8.95 38.495-56.432 44.758-129.218 90.632-206.764 58.182-29.105-13.047-42.074-57.287-32.217-94.86 6.251-26.861 33.993-52.814 17.003-81.464-2.685-12.542 4.488-23.268 15.227-25.952 29.532 0 23.254-36.705 38.48-53.721-17.003-18.793-59.958-17.898-55.484-55.498 20.596-10.739 45.667-7.159 68.909-10.739 52.812-10.752 111.89-17.016 165.636-10.752 10.7 2.153 25.032 23.268 33.981 36.692zM813.286 213.476c82.605 67.52 189.774 182.614 176.35 315.087-16.121 104.744-127.117 183.51-221.109 208.58-91.307 26.847-205.882 24.163-298.992 2.685-6.264 17.016-12.528 37.586-32.216 44.758-12.53 4.475-28.65 1.79-38.495-6.264-27.742-25.966-5.37-76.094-45.653-92.19-78.779-33.124-163.821-98.479-204.092-179.034-5.37-16.108.894-32.217 10.739-44.746 61.774-49.233 139.645-68.92 217.528-84.147 4.475 1.79 2.685-4.475 6.265-6.265 4.474-53.708 6.264-108.323 23.268-156.662 3.878-6.783 13.423-8.949 19.7-4.474 49.234 37.586 25.953 108.323 47.444 159.333 93.992 4.475 187.984 8.95 262.275 61.775 25.07 20.583 31.179 59.895 23.267 82.358-7.898 22.425-34.006 38.495-58.182 40.259-16.121 0-46.548 1.569-44.759-10.726 1.79-12.309 54.759-32.45 38.495-49.247-23.385-24.136-140.385-38.494-212.9-47.443-8.948-1.79-17.158.895-17.158 10.739-1.79 68.026-7.16 143.212 4.474 208.58.895 4.487 6.265 9.857 10.752 10.726 127.999 20.596 263.17 8.949 363.426-64.447 46.549-37.573 61.775-90.425 53.708-148.595-40.284-162.018-209.462-259.602-348.212-322.26-135.158-59.077-284.66-89.517-444.89-81.45-25.51 1.868-65.937 10.675-66.236 19.702-.298 9.026 45.797 6.186 40.271 23.267-5.512 17.068-52.359 6.94-66.236 2.685-13.878-4.254-12.529-24.176-8.95-36.704C38.084 7.593 135.513 2.599 179.519.433c243.469-6.277 478.91 86.444 633.768 213.042zM374.662 453.376c-61.775.895-127.117 7.16-184.404 28.638-11.634 4.474-25.966 17.003-17.017 32.23 23.268 31.321 56.548 57.04 87.728 75.185 31.179 18.119 72.514 41.18 110.113 46.562 8.95-58.196 8.95-115.483 8.054-175.455-3.592-1.79-.013-5.37-4.474-7.16zm1850.266-81.463c-2.684 77.87-75.211 126.222-75.211 204.092 2.684 2.685 4.5 6.265 8.054 4.501 58.208-63.565 115.483-153.977 200.525-180.824 22.412-1.79 42.658 17.677 51.036 32.23 29.546 59.077 22.412 142.33-18.78 196.037-42.502 52.722-116.39 105.626-200.5 96.664-34.901 85.938-59.116 176.35-72.54 270.342-7.159 18.793-24.149 1.79-34.888-1.79-72.5-57.287-12.97-208.943-8.054-228.294 4.915-19.299 24.318-64.823 38.507-102.94-34.02-60.855-12.542-134.277 15.2-190.67 21.479-37.599 51.05-75.198 85.951-103.835 4.436.013 8.016.908 10.7 4.487zm144.146 96.677c-10.739-1.79-15.226 12.542-24.162 15.226-41.166 46.549-82.358 93.097-102.954 148.595 27.768 3.58 51.023-14.319 75.211-24.163 41.166-25.965 67.132-68.908 64.447-118.154-1.803-8.08-8.962-14.345-12.542-21.504z" fillRule="nonzero" /></svg>
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <svg className="h-10 text-black fill-current" viewBox="0 0 2499 1037" xmlns="http://www.w3.org/2000/svg"><path d="M261.062 466.768c-53.833-19.912-83.335-35.399-83.335-59.735 0-20.652 16.963-32.45 47.201-32.45 55.31 0 112.09 21.388 151.178 40.559l22.124-136.427c-30.973-14.752-94.397-39.088-182.151-39.088-61.947 0-113.573 16.223-150.443 46.46-38.352 31.71-58.263 77.434-58.263 132.744 0 100.293 61.211 143.07 160.769 179.203 64.159 22.86 85.547 39.088 85.547 64.16 0 24.336-20.652 38.346-58.263 38.346-46.46 0-123.153-22.86-173.302-52.356L0 786.087c42.771 24.337 122.417 49.409 205.017 49.409 65.63 0 120.204-15.487 157.08-44.984 41.293-32.45 62.682-80.381 62.682-142.328 0-102.511-62.683-145.282-163.717-181.416zm523.877-80.387l22.124-135.692H690.265V85.966l-157.035 25.84-22.677 138.883-55.232 8.96-20.675 126.732h75.68v266.227c0 69.32 17.7 117.257 53.833 146.754 30.238 24.336 73.745 36.134 134.956 36.134 47.196 0 75.957-8.109 95.868-13.275V678.416c-11.062 2.953-36.133 8.114-53.097 8.114-36.134 0-51.62-18.435-51.62-60.47V386.38h94.673zm350.752-143.618c-51.62 0-92.92 27.102-109.142 75.775l-11.062-67.849H855.459v573.745h182.887V452.017c22.865-28.026 55.31-38.159 99.558-38.159 9.59 0 19.911 0 32.45 2.213V247.188c-12.539-2.948-23.6-4.425-34.663-4.425zm171.095-48.86c53.098 0 95.869-43.507 95.869-96.604 0-53.839-42.771-96.61-95.869-96.61-53.838 0-96.609 42.771-96.609 96.61 0 53.097 42.771 96.604 96.61 96.604zm-92.184 56.786h183.628v573.745h-183.628V250.689zm703.999 51.62c-32.45-42.035-77.434-62.682-134.956-62.682-53.097 0-99.558 22.124-143.07 68.584l-9.585-57.522h-160.769v786.134l182.893-30.232V822.22c28.02 8.85 56.78 13.275 82.594 13.275 45.725 0 112.096-11.798 163.717-67.843 49.408-53.839 74.485-137.168 74.485-247.052 0-97.345-18.44-171.09-55.31-218.291zm-151.92 353.983c-14.75 28.025-37.61 42.777-64.159 42.777-18.435 0-34.662-3.69-49.408-11.062V415.142c30.973-32.445 58.993-36.134 69.32-36.134 46.46 0 69.32 50.15 69.32 148.23 0 56.045-8.11 99.557-25.073 129.054zm731.566-123.894c0-91.443-19.912-163.717-59-214.602-39.822-51.62-99.557-78.169-175.514-78.169-155.608 0-252.212 115.044-252.212 299.408 0 103.247 25.808 180.68 76.692 230.089 45.725 44.248 111.361 66.372 196.168 66.372 78.169 0 150.442-18.435 196.167-48.673l-19.912-125.365c-44.989 24.336-97.345 37.61-156.344 37.61-35.398 0-59.734-7.378-77.434-22.864-19.175-16.223-30.237-42.771-33.921-80.382h303.097c.736-8.85 2.213-50.15 2.213-63.424zm-306.787-48.672c5.16-81.859 27.284-120.205 69.32-120.205 41.3 0 62.688 39.087 65.636 120.205H2191.46z" fillRule="nonzero" /></svg>
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <svg className="h-10 text-black fill-current" viewBox="0 0 2500 829" xmlns="http://www.w3.org/2000/svg"><path d="M235.978 764.863L129.39 700.954l-64.695-64.62L0 571.714V0h271.862l64.446 64.41 64.444 64.409h291.49c287.02 0 291.506-.034 292.67-2.205.77-1.443 1.179-23.71 1.179-64.41V0h485.617l.295 64.124.294 64.125 63.84.57 63.84.57.301 33.915c.167 18.653.668 33.914 1.115 33.914.447 0 16.234-15.39 35.081-34.2l34.268-34.199h143.507l64.446-64.41L1943.142 0h270.72v62.205c0 40.699.408 62.966 1.18 64.41 1.15 2.146 3.229 2.204 78.95 2.204h77.767l64.12 64.128L2500 257.076v428.76l-106.874 71.49-106.874 71.49-71.487-.022-71.486-.02-.333-34.108c-.183-18.757-.698-34.47-1.143-34.915-.444-.444-22.818 14.904-49.717 34.107l-48.905 34.915h-129.136v-34.2c0-26.69-.315-34.2-1.432-34.2-.788 0-16.815 15.39-35.618 34.2l-34.185 34.2h-229.167l-34.73-34.744c-19.102-19.11-35.13-34.347-35.618-33.858-.487.487-3.7 14.968-7.137 32.179-3.438 17.211-6.526 32.447-6.863 33.857l-.61 2.565h-200.04l-34.185-34.2c-18.802-18.81-34.83-34.2-35.618-34.2-1.117 0-1.432 7.511-1.432 34.2v34.2h-100.32c-55.175 0-100.318-.151-100.318-.338 0-1.795-13.816-68.576-14.285-69.044-.342-.344-16.381 15.128-35.641 34.379l-35.017 35.004H599.65l-34.216-13.68c-18.818-7.523-34.725-13.68-35.347-13.68-.686 0-1.132 5.386-1.132 13.68v13.68H342.567l-106.589-63.91zm106.59-200.568v-78.089l-63.84-.57-63.84-.57V343.707l63.84-.57 63.84-.57V186.39l-63.84-.57-63.84-.57-.57-63.84-.57-63.84H57.57l-.288 242.786-.288 242.785 49.866 49.914 49.867 49.915 92.92-.292 92.92-.292v-78.09zm593.67 28.751l49.861-49.909-.288-178.374-.289-178.374-78.37-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.369-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.374-.293-78.374-.293v457.152h486.241l49.86-49.909zm263.602-178.66V186.39l-78.374-.293-78.374-.293V642.97l78.374-.293 78.374-.293V414.387zm342.568 149.919v-78.65l-63.555-.295-63.554-.294V343.707l63.554-.294 63.555-.295v-157.28l-63.555-.295-63.554-.294-.57-63.84-.57-63.84h-156.18l-.286 242.81-.289 242.812 49.873 49.882 49.872 49.882h185.259v-78.65zm400.136-.012v-78.66h-92.217c-83.038 0-92.285-.178-92.91-1.801-.903-2.357-.903-136.537 0-138.894.625-1.623 9.872-1.803 92.91-1.803h92.217V185.816h-243.358l-49.32 49.32-49.319 49.32v259.859l49.32 49.32 49.32 49.318h243.357v-78.66zm214.6-70.964l.289-149.624h127.679l.57 149.339.57 149.339h156.178l.289-178.375.288-178.374-49.86-49.909-49.86-49.909h-91.933c-75.52 0-92.159-.273-93.202-1.53-.89-1.074-1.357-20.206-1.564-64.124l-.295-62.595h-156.179l-.292 291.268c-.16 160.197-.049 291.91.249 292.693.426 1.12 17.214 1.425 78.662 1.425h78.122l.288-149.624zM1199.84 92.907v-35.34h-156.178l-.302 34.189c-.167 18.801-.054 34.837.251 35.631.443 1.152 16.374 1.386 78.392 1.153l77.837-.293v-35.34z" fillRule="nonzero" /></svg>
          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <svg className="h-10 text-black fill-current" viewBox="0 0 704 335" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M407.451 27v54.605H476v19.574h-68.549v161.219c0 16.487 2.658 29.1 7.994 37.858 5.326 8.758 14.51 13.132 27.58 13.132 6.185 0 11.511-.34 15.978-1.028 4.466-.68 8.244-1.548 11.341-2.577l2.578 18.545c-8.244 3.775-19.245 5.672-32.985 5.672-11.342 0-20.705-1.897-28.09-5.672-7.394-3.775-13.23-9.008-17.526-15.709-4.297-6.7-7.305-14.76-9.023-24.207-1.729-9.437-2.578-19.653-2.578-30.648V101.18H342V81.605h40.72V36.267L407.45 27zm108.272 55.01l56.592 153.35c4.797 12.012 9.086 23.335 12.856 33.96 3.77 10.635 7.37 21.1 10.802 31.386H597a1724.777 1724.777 0 0111.061-31.136c3.94-10.805 8.318-22.208 13.116-34.22L678.277 82H704l-98.263 247h-21.095L490 82.01h25.723zM150.117 29.041C172.077.14 202.607 0 202.607 0s4.544 27.176-17.277 53.345c-23.289 27.954-49.763 23.376-49.763 23.376s-4.974-21.98 14.55-47.68zm-11.275 67.5C150.16 96.54 171.165 81 198.515 81c47.075 0 65.588 33.449 65.588 33.449s-36.216 18.488-36.216 63.36c0 50.618 45.113 68.057 45.113 68.057s-31.533 88.644-74.134 88.644c-19.565 0-34.776-13.171-55.39-13.171-21.006 0-41.862 13.661-55.431 13.661C49.146 335.01 0 250.913 0 183.326 0 116.817 41.6 81.929 80.61 81.929c25.368 0 45.052 14.611 58.232 14.611z" /></g></svg>
          </div>
          <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
            <svg className="text-black fill-current h-7" viewBox="0 0 2500 494" xmlns="http://www.w3.org/2000/svg"><path d="M1262.684 438.349c0 8.684 0 10.658 5.855 15.987l32.797 32.368v1.382H1155.92v-62.172c-14.638 40.974-53.349 68.073-96.428 67.5-74.756 0-129.02-59.21-129.02-168.157 0-102.04 58.553-170.132 140.731-170.132 36.428-2.316 70.329 18.901 84.52 52.895V70.855a17.066 17.066 0 00-6.638-16.579l-31.23-30.394V22.5l144.828-17.171v433.02zm-106.763-19.737V213.94a54.224 54.224 0 00-43.335-20.527c-35.33 0-69.487 32.369-69.487 128.487 0 90 29.473 121.777 66.17 121.777a58.382 58.382 0 0046.645-25.066h.007zm203.19 69.474V211.77a18.671 18.671 0 00-5.854-16.58l-32.211-33.552v-1.381h145.421V440.52c0 8.684 0 10.658 5.855 15.987l32.014 30.394v1.382l-145.224-.197zm-5.269-428.882c0-32.697 26.217-59.204 58.553-59.204 32.335 0 58.559 26.513 58.559 59.21 0 32.698-26.217 59.211-58.553 59.211-32.335 0-58.559-26.513-58.559-59.21v-.007zm504.954 378.553c0 8.684 0 11.25 5.855 16.579l32.796 32.368v1.382H1751.25V417.23c-13.316 44.803-53.875 75.658-100.132 76.184-64.802 0-99.546-47.763-99.546-138.157 0-43.619 0-91.382 1.362-145.066a16.875 16.875 0 00-5.855-15.987l-32.204-32.566v-1.381h144.243v180.197c0 59.21 8.593 98.684 45.283 98.684a58.487 58.487 0 0047.237-29.802V211.967a18.671 18.671 0 00-5.855-16.579l-32.401-33.75v-1.381h145.414v277.5zm495.007 50.329c0-10.658 1.954-146.448 1.954-177.632 0-59.21-9.178-100.066-50.362-100.066a65.204 65.204 0 00-51.724 28.421 243.53 243.53 0 015.855 56.25c0 41.053-1.368 93.355-1.954 145.658a16.875 16.875 0 005.856 15.987l32.796 30.395v1.381H2149.44c0-9.868 1.947-146.447 1.947-177.631 0-60.198-9.17-100.066-49.77-100.066a58.46 58.46 0 00-48.407 29.21V441.31c0 8.684 0 10.658 5.855 15.987l32.013 30.395v1.381h-145.224V212.757a18.671 18.671 0 00-5.855-16.58l-32.21-34.539v-1.381h145.42v70.263c13.487-46.382 56.448-77.553 104.23-75.592 48.409 0 81.198 27.236 95.06 78.947 15.395-47.69 59.697-79.69 109.303-78.947 64.802 0 101.5 48.355 101.5 139.736 0 43.619-1.362 93.356-1.948 145.658a15.868 15.868 0 006.632 15.987L2500 486.704v1.382h-146.197zm-1826.79-43.027l43.138 41.645v1.382H351.342v-1.382l43.921-41.645a16.875 16.875 0 005.855-15.987v-266.25c0-11.25 0-26.447 1.948-39.473L255.5 493.42h-1.75l-152.836-340.46c-3.322-8.487-4.296-9.08-6.447-14.803v223.224a78.322 78.322 0 007.23 43.618l61.48 81.71v1.382H0v-1.381l61.487-81.908a78.526 78.526 0 007.217-43.421v-246.71a48.132 48.132 0 00-10.145-33.75l-43.526-57.04V22.5h156.151l130.777 288.355L417.125 22.5h152.829v1.382l-42.94 48.355a17.066 17.066 0 00-6.639 16.579v340.263a15.868 15.868 0 006.645 15.987l-.007-.007zm171.184-133.42v1.38c0 84.474 43.139 118.422 93.691 118.422 42.21 1.454 81.283-22.48 99.546-60.987h1.369c-17.566 83.487-68.71 122.96-145.224 122.96-82.566 0-160.447-50.328-160.447-166.973 0-122.566 78.079-171.513 164.348-171.513 69.494 0 143.467 33.158 143.467 139.736v16.974h-196.75zm0-16.975h96.23v-17.17c0-86.843-17.763-109.935-44.506-109.935-32.401 0-52.112 34.54-52.112 127.105h.388z" fillRule="nonzero" /></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section 3 */}
  <section className="flex flex-col w-full bg-black md:flex-row">
    <div className="flex flex-col items-center justify-center w-full p-10 md:w-1/2 lg:p-16 xl:p-24">
      <h2 className="max-w-lg text-4xl font-light leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl">We have the tools you need to succeed</h2>
      <p className="max-w-lg mt-5 text-xl text-gray-500 md:text-base lg:text-xl">Our powerful and revolutionary tools are designed to help your business thrive.</p>
    </div>
    <div className="w-full md:w-1/2">
      <img src="https://cdn.devdojo.com/images/november2020/tools-bg.jpeg?q=75&auto=format" className="inset-0 object-cover" />
    </div>
  </section>
  {/* Section 4 */}
  <section className="pt-20 pb-32 bg-white">
    <div className="px-20 mx-auto max-w-7xl">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Features</h2>
      <p className="mb-16 text-lg text-gray-500">Here is our list of our powerful and award-winning features.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 lg:gap-x-24 gap-y-20">
        <div>
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-red-600 bg-red-100 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Processing</h3>
          <p className="text-sm text-gray-500 lg:text-base">Faster processing to help you build your applications quicker and with more efficiency.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Configuration</h3>
          <p className="text-sm text-gray-500 lg:text-base">Faster processing to help you build your applications quicker and with more efficiency.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-100 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Bundling</h3>
          <p className="text-sm text-gray-500 lg:text-base">Bundling functionality to help you build your application with ease and sustainability.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-purple-600 bg-purple-100 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Database</h3>
          <p className="text-sm text-gray-500 lg:text-base">Take advantage of unlimited storage and data retrieval from our global CDN data centers.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-indigo-600 bg-indigo-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Integrations</h3>
          <p className="text-sm text-gray-500 lg:text-base">Simple and configuration intregrations with your favorite applications and services.</p>
        </div>
        <div>
          <div className="flex items-center justify-center w-12 h-12 mb-4 text-pink-600 bg-pink-100 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">Speed</h3>
          <p className="text-sm text-gray-500 lg:text-base">Our tools and services have been crafted for maximum speed and efficiency.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Section 5 */}
  <section className="bg-white">
    <div className="px-8 py-8 mx-auto max-w-7xl">
      <div className="relative px-6 py-10 overflow-hidden border border-blue-100 rounded-2xl lg:p-16 lg:flex lg:flex-col lg:items-center lg:justify-between">
        {/* Left Pattern */}
        <div className="absolute top-0 left-0 z-10 hidden h-full p-4 mt-1 ml-3 -mt-4 -ml-4 transform -rotate-90 lg:block">
          <svg className="w-auto h-full fill-current text-blue-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 390"><defs /><g fillRule="nonzero"><circle cx={10} cy={10} r="9.5" /><circle cx={47} cy={10} r="9.5" /><circle cx={84} cy={10} r="9.5" /><circle cx={121} cy={10} r="9.5" /><circle cx={158} cy={10} r="9.5" /><circle cx={195} cy={10} r="9.5" /><circle cx={232} cy={10} r="9.5" /><circle cx={269} cy={10} r="9.5" /><circle cx={306} cy={10} r="9.5" /><circle cx={343} cy={10} r="9.5" /><circle cx={380} cy={10} r="9.5" /><circle cx={47} cy={47} r="9.5" /><circle cx={84} cy={47} r="9.5" /><circle cx={121} cy={47} r="9.5" /><circle cx={158} cy={47} r="9.5" /><circle cx={195} cy={47} r="9.5" /><circle cx={232} cy={47} r="9.5" /><circle cx={269} cy={47} r="9.5" /><circle cx={306} cy={47} r="9.5" /><circle cx={343} cy={47} r="9.5" /><circle cx={380} cy={47} r="9.5" /><circle cx={84} cy={84} r="9.5" /><circle cx={121} cy={84} r="9.5" /><circle cx={158} cy={84} r="9.5" /><circle cx={195} cy={84} r="9.5" /><circle cx={232} cy={84} r="9.5" /><circle cx={269} cy={84} r="9.5" /><circle cx={306} cy={84} r="9.5" /><circle cx={343} cy={84} r="9.5" /><circle cx={380} cy={84} r="9.5" /><circle cx={121} cy={121} r="9.5" /><circle cx={158} cy={121} r="9.5" /><circle cx={195} cy={121} r="9.5" /><circle cx={232} cy={121} r="9.5" /><circle cx={269} cy={121} r="9.5" /><circle cx={306} cy={121} r="9.5" /><circle cx={343} cy={121} r="9.5" /><circle cx={380} cy={121} r="9.5" /><circle cx={158} cy={158} r="9.5" /><circle cx={195} cy={158} r="9.5" /><circle cx={232} cy={158} r="9.5" /><circle cx={269} cy={158} r="9.5" /><circle cx={306} cy={158} r="9.5" /><circle cx={343} cy={158} r="9.5" /><circle cx={380} cy={158} r="9.5" /><circle cx={195} cy={195} r="9.5" /><circle cx={232} cy={195} r="9.5" /><circle cx={269} cy={195} r="9.5" /><circle cx={306} cy={195} r="9.5" /><circle cx={343} cy={195} r="9.5" /><circle cx={380} cy={195} r="9.5" /><circle cx={232} cy={232} r="9.5" /><circle cx={269} cy={232} r="9.5" /><circle cx={306} cy={232} r="9.5" /><circle cx={343} cy={232} r="9.5" /><circle cx={380} cy={232} r="9.5" /><circle cx={269} cy={269} r="9.5" /><circle cx={306} cy={269} r="9.5" /><circle cx={343} cy={269} r="9.5" /><circle cx={380} cy={269} r="9.5" /><circle cx={306} cy={306} r="9.5" /><circle cx={343} cy={306} r="9.5" /><circle cx={380} cy={306} r="9.5" /><circle cx={343} cy={343} r="9.5" /><circle cx={380} cy={343} r="9.5" /><circle cx={380} cy={380} r="9.5" /></g></svg>
        </div>
        {/* Right Pattern */}
        <div className="absolute bottom-0 right-0 z-10 hidden h-full p-4 mt-1 ml-3 -mb-4 -mr-4 transform rotate-90 md:block">
          <svg className="w-auto h-full fill-current text-blue-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 390"><defs /><g fillRule="nonzero"><circle cx={10} cy={10} r="9.5" /><circle cx={47} cy={10} r="9.5" /><circle cx={84} cy={10} r="9.5" /><circle cx={121} cy={10} r="9.5" /><circle cx={158} cy={10} r="9.5" /><circle cx={195} cy={10} r="9.5" /><circle cx={232} cy={10} r="9.5" /><circle cx={269} cy={10} r="9.5" /><circle cx={306} cy={10} r="9.5" /><circle cx={343} cy={10} r="9.5" /><circle cx={380} cy={10} r="9.5" /><circle cx={47} cy={47} r="9.5" /><circle cx={84} cy={47} r="9.5" /><circle cx={121} cy={47} r="9.5" /><circle cx={158} cy={47} r="9.5" /><circle cx={195} cy={47} r="9.5" /><circle cx={232} cy={47} r="9.5" /><circle cx={269} cy={47} r="9.5" /><circle cx={306} cy={47} r="9.5" /><circle cx={343} cy={47} r="9.5" /><circle cx={380} cy={47} r="9.5" /><circle cx={84} cy={84} r="9.5" /><circle cx={121} cy={84} r="9.5" /><circle cx={158} cy={84} r="9.5" /><circle cx={195} cy={84} r="9.5" /><circle cx={232} cy={84} r="9.5" /><circle cx={269} cy={84} r="9.5" /><circle cx={306} cy={84} r="9.5" /><circle cx={343} cy={84} r="9.5" /><circle cx={380} cy={84} r="9.5" /><circle cx={121} cy={121} r="9.5" /><circle cx={158} cy={121} r="9.5" /><circle cx={195} cy={121} r="9.5" /><circle cx={232} cy={121} r="9.5" /><circle cx={269} cy={121} r="9.5" /><circle cx={306} cy={121} r="9.5" /><circle cx={343} cy={121} r="9.5" /><circle cx={380} cy={121} r="9.5" /><circle cx={158} cy={158} r="9.5" /><circle cx={195} cy={158} r="9.5" /><circle cx={232} cy={158} r="9.5" /><circle cx={269} cy={158} r="9.5" /><circle cx={306} cy={158} r="9.5" /><circle cx={343} cy={158} r="9.5" /><circle cx={380} cy={158} r="9.5" /><circle cx={195} cy={195} r="9.5" /><circle cx={232} cy={195} r="9.5" /><circle cx={269} cy={195} r="9.5" /><circle cx={306} cy={195} r="9.5" /><circle cx={343} cy={195} r="9.5" /><circle cx={380} cy={195} r="9.5" /><circle cx={232} cy={232} r="9.5" /><circle cx={269} cy={232} r="9.5" /><circle cx={306} cy={232} r="9.5" /><circle cx={343} cy={232} r="9.5" /><circle cx={380} cy={232} r="9.5" /><circle cx={269} cy={269} r="9.5" /><circle cx={306} cy={269} r="9.5" /><circle cx={343} cy={269} r="9.5" /><circle cx={380} cy={269} r="9.5" /><circle cx={306} cy={306} r="9.5" /><circle cx={343} cy={306} r="9.5" /><circle cx={380} cy={306} r="9.5" /><circle cx={343} cy={343} r="9.5" /><circle cx={380} cy={343} r="9.5" /><circle cx={380} cy={380} r="9.5" /></g></svg>
        </div>
        <h3 className="relative z-20 mb-4 -mt-1 text-4xl font-bold text-blue-900">Getting Started is Easy...</h3>
        <p className="relative z-20 mb-6 text-lg text-blue-700">Are you ready to start building the app of your dreams?</p>
        <div className="relative z-20 flex flex-col items-center w-full space-y-5 md:space-x-5 md:space-y-0 md:flex-row md:w-auto lg:flex-shrink-0 md:px-0">
          <a href="#_" className="block w-full px-5 py-3 text-base font-medium leading-6 text-center text-white transition duration-150 ease-in-out bg-blue-600 rounded-md md:inline-flex md:shadow-sm md:w-auto hover:bg-blue-500 focus:outline-none focus:shadow-outline">Try for Free</a>
          <a href="#_" className="block w-full px-5 py-3 text-base font-medium leading-6 text-center text-blue-600 transition duration-150 ease-in-out bg-blue-100 rounded-md md:inline-flex md:shadow-sm md:w-auto hover:bg-blue-50 focus:outline-none focus:shadow-outline">Request a Demo</a>
        </div>
      </div>
    </div>
  </section>
  {/* Section 6 */}
  <section className="w-full bg-blue-600">
    <div className="px-8 py-12 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
        <div className="col-span-3">
          <a href="#_" className="text-xl font-black leading-none text-white select-none logo">tails.</a>
          <p className="my-4 text-xs leading-normal text-blue-100">
            Beautifully hand-crafted components to help you build amazing pages.
          </p>
        </div>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-blue-200 uppercase">Product</p>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Features</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Integrations</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Documentation</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">FAQs</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Pricing</a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-blue-200 uppercase">About</p>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Our Story</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Company</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Privacy</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Blog</a>
        </nav>
        <nav className="col-span-2 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-xs font-semibold tracking-wider text-blue-200 uppercase">Contact</p>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Advertising</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Press</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Email</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Partners</a>
          <a href="#" className="flex mb-3 text-sm font-medium text-blue-100 transition md:mb-2 hover:text-white">Jobs</a>
        </nav>
        <div className="col-span-3">
          <span className="inline-flex justify-center w-full mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-end">
            <a href="#" className="text-blue-100 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-blue-100 hover:text-white">
              <span className="sr-only">Dribbble</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-blue-500 md:flex-row md:items-center">
        <p className="mb-6 text-sm text-left text-blue-200 md:mb-0">© Copyright 2021 Tails. All Rights Reserved.</p>
        <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
          <a href="#_" className="text-sm text-blue-200 transition hover:text-white">Terms</a>
          <a href="#_" className="text-sm text-blue-200 transition hover:text-white">Privacy</a>
        </div>
      </div>
    </div>
  </section>
</div>

}
