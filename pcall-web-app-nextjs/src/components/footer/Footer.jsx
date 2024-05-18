import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  return (
    <>
      <footer className="w-full bg-gradient-to-l from-custom-blue to-slate-800 flex flex-col items-center justify-center lg:py-10 py-5 text-zinc-200 lg:text-sm text-xs">
        <div className="w-11/12 h-fit flex items-center justify-between border-b border-zinc-700 lg:pb-5 pb-2">
          <div className="lg:w-5/12 w-7/12 flex items-center justify-between gap-5">
            <img src="/img/brand/pcallLogo.svg" alt="logo" className="w-28 lg:flex hidden" />
            <p className=""> We are a company that builds the best PCs in the market, we have the best components and the best prices</p>
          </div>
          <div className="lg:w-7/12 w-5/12 flex items-center justify-end h-full py-3">
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg flex gap-2 items-center justify-center active:scale-95 lg:hover:text-orange-500 lg:active:text-white transition-all duration-200 ">
              Contact us<IoIosArrowRoundForward className="text-3xl" />
            </button>
          </div>
        </div>
        <div className="w-11/12 h-fit flex flex-col lg:flex-row items-center justify-between border-b border-zinc-700 lg:pb-5 lg:py-5 py-2">
          <div className="lg:w-5/12 w-full flex items-center justify-between gap-5 py-5">
            <ul className="text-white flex flex-col gap-3">
              <li className="font-bold lg:text-lg text:sm border-b border-gray-700">Services</li>
              <li>Build Now</li>
              <li>Disccounts</li>
              <li>Recycle</li>
              <li>Gallery</li>
            </ul>
            <ul className="text-white flex flex-col gap-3 ">
              <li className="font-bold  lg:text-lg text:sm border-b border-gray-700">Company</li>
              <li>About us</li>
              <li>Team</li>
              <li>Sponsors</li>
              <li>Sustainability</li>
            </ul>
            <ul className="text-white flex flex-col gap-3">
              <li className="font-bold lg:text-lg text:sm border-b border-gray-700">Contact</li>
              <li>Phone</li>
              <li>Email</li>
              <li>Location</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="lg:w-7/12 w-full flex items-center justify-end h-full py-3">
            <div className="lg:w-9/12 w-full flex-col justify-end">
              <h2 className="w-full lg:text-2xl text-xl font-bold text-white">
                Keep Updated
              </h2>
              <form className="mt-2 flex items-center justify-between gap-x-4">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required="" className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" />
                <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 font-semibold text-custom-blue shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95">Notify me</button>
              </form>
            </div>
          </div>
        </div>
        <p className="text-white text-center pt-5">© 2024 PC ALL. All rights reserved</p>
      </footer>
    </>
  )
}

export default Footer; 