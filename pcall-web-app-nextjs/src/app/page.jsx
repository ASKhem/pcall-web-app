import Link from 'next/link'
import { FaSpaceAwesome, FaSquare } from 'react-icons/fa6';
import ImageToMovement from '@/components/effects/ImageToMovement';
import GalleryHome from '@/components/gallery/GalleryHome';
import ImageToBlurBackground from '@/components/effects/ImageToBlurBackground';

function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full py-0">
      <section className="flex flex-col items-center justify-center w-full py-20 text-zinc-200 lg:min-h-[93vh] lg:w-full lg:flex-row lg:py-0 bg-gradient-to-bl from-black via-zinc-950 to-zinc-800">
        <div className="flex items-center justify-center w-full border-none lg:w-5/12">
          <video src="/vid/video-presentation.mp4" className="w-11/12 rounded-xl lg:w-10/12" loop muted autoPlay />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full lg:w-7/12">
          <div className="w-full px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <h1 className="block mt-5 text-2xl font-bold lg:mt-10 lg:text-6xl lg:text-center">
              We built the <span className="text-orange-500">best</span> <span className="text-orange-500">PCs</span>
            </h1>
            <div className="flex flex-col items-center justify-center gap-10 rounded-lg">
              <p className="mt-6 text-sm lg:text-lg">CHOOSE THE COMPONENTS, WE BUILD IT FOR YOU</p>
              <Link
                href="/build"
                className="inline-flex items-center w-fit px-4 py-2 mt-3 font-medium bg-orange-600 rounded-lg animate-bounce focus:animate-none hover:animate-none"
              >
                <span className="flex items-center gap-2 ml-2">
                  Build Now <FaSpaceAwesome />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full py-10 bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500">
        <div className="flex flex-col w-11/12 gap-5 border-b border-b-custom-blue font-bold">
          <div className="flex items-center w-full text-2xl gap-5 lg:text-5xl">
            <FaSquare />
            <h2>WHAT WE OFFER</h2>
          </div>
          <p className="w-full text-sm lg:w-6/12 lg:text-base pb-5">
            At PC ALL, we provide different services to meet all your computer needs. Whether you want to build a new
            PC, sell your old one, or just check out our gallery of completed builds
          </p>
        </div>
        <div className="lg:w-11/12 w-full p-5 sm:p-8 lg:text-lg text-sm flex items-center justify-center">
          <div className="lg:gap-10 gap-5 grid lg:grid-cols-3 grid-cols-1 w-10/12 ">
            <div className="col-span-1 w-full h-fit flex flex-col items-center justify-center gap-5">
              <Link href="/build">
                <ImageToMovement
                  imageSrc="/img/effects/imagesToMovement/img1.png"
                  gifSrc="/img/effects/imagesToMovement/img1Movement.gif"
                />
                <p>Build a new Pc</p>
              </Link>
            </div>
            <div className="col-span-1 w-full h-fit flex flex-col items-center justify-center gap-5">
              <Link href="/build">
                <ImageToMovement
                  imageSrc="/img/effects/imagesToMovement/img3.png"
                  gifSrc="/img/effects/imagesToMovement/img3Movement.gif"
                />
                <p>Use second hand components and help the environment</p>
              </Link>
            </div>
            <div className="col-span-1 w-full h-fit flex flex-col items-center justify-center gap-5">
              <Link href="/gallery">
                <ImageToMovement
                  imageSrc="/img/effects/imagesToMovement/img4.png"
                  gifSrc="/img/effects/imagesToMovement/img4Movement.gif"
                />
                <p>See the gallery</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-zinc-200 flex flex-col items-center justify-center w-full py-10 bg-gradient-to-bl from-black via-zinc-950 to-zinc-800" id="how-we-work">
        <div className="flex flex-col w-11/12 gap-5 border-b border-b-zinc-200 font-bold pb-5">
          <div className="flex items-center w-full text-2xl gap-5 lg:text-5xl">
            <FaSquare />
            <h2>How we work</h2>
          </div>
        </div>
        <GalleryHome />
      </section>
      <section className="flex flex-col items-center justify-center w-full py-10 bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500" id="sponsors">
        <div className="flex flex-col w-11/12 gap-5 border-b border-b-custom-blue font-bold">
          <div className="flex items-center w-full text-2xl gap-5 lg:text-5xl">
            <FaSquare />
            <h2>Our Sponsors</h2>
          </div>
          <p className="w-full text-sm lg:w-6/12 lg:text-base pb-5">
            We are proud to have the support of the best brands in the industry, who provide us with the best components and equipment to build the best PCs
          </p>
        </div>
        <div className="lg:w-9/12 w-full p-5 sm:p-8 lg:text-lg text-sm flex items-center justify-center">
          <div className="w-full grid lg:grid-cols-4 lg:gap-10 gap-5 grid-cols-2">
            <ImageToBlurBackground
              imgSrc="/img/sponsors/amdLogo.png" altText="amd image"
              companyName="AMD" mainText="Unleash the Power"
              text="AMD processors and graphics cards deliver unrivaled performance in our builds"
            />
            <ImageToBlurBackground
              imgSrc="/img/sponsors/corsairLogo.png" altText="corsair image"
              companyName="CORSAIR" mainText="Reliability Meets Style"
              text="Corsair components add reliability and style to our custom PCs"
            />
            <ImageToBlurBackground
              imgSrc="/img/sponsors/samsungLogo.png" altText="samsung image"
              companyName="SAMSUNG" mainText="Cutting-Edge Storage Solutions"
              text="Samsung SSDs and memory modules provide fast and reliable storage for your build"
            />
            <ImageToBlurBackground
              imgSrc="/img/sponsors/msiLogo.png" altText="msi image"
              companyName="MSI" mainText="Engineered for Performance"
              text="MSI motherboards and graphics cards are engineered for top-tier performance"
            />
            <ImageToBlurBackground
              imgSrc="/img/sponsors/nvidiaLogo.png" altText="nvidia image"
              companyName="NVIDIA" mainText="Experience Cutting-Edge Graphics"
              text="Our partnership with NVIDIA brings you the latest and greatest in graphics technology"
            />
            <ImageToBlurBackground
              imgSrc="/img/sponsors/tempestLogo.png" altText="tempest image"
              companyName="TEMPEST" mainText="Cool Under Pressure"
              text="Tempest cooling solutions keep your custom PC running cool and quiet"
            />
            <ImageToBlurBackground
              imgSrc="/img/sponsors/intelLogo.png" altText="intel image"
              companyName="INTEL" mainText="Powerful Computing"
              text="Intel processors provide powerful computing performance for your custom build"
            />
            <ImageToBlurBackground
              imgSrc="/img/sponsors/hyperXLogo.png" altText="hyperx image"
              companyName="HYPER X" mainText="Upgrade Your Memory"
              text="HyperX memory modules offer fast and reliable performance for your PC"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home

