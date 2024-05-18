import Link from 'next/link'
import { FaSpaceAwesome, FaSquare } from 'react-icons/fa6';
import ImageToMovement from '@/components/effects/ImageToMovement';

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
                href="/"
                className="inline-flex items-center w-fit px-4 py-2 mt-3 text-md font-medium bg-orange-600 rounded-lg animate-bounce focus:animate-none hover:animate-none"
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
        <div className="lg:w-11/12 w-full p-5 sm:p-8 lg:text-lg text-sm">
          <div className="columns-1 lg:gap-10 gap-5 xl:columns-4 lg:columns-2 [&>div:not(:first-child)]:mt-8">
            <div className="w-full h-fit flex flex-col items-center justify-center gap-5">
              <ImageToMovement
                imageSrc="/img/effects/imagesToMovement/img1.png"
                gifSrc="/img/effects/imagesToMovement/img1Movement.gif"
              />
              <p>Build a new Pc</p>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-5">
              <ImageToMovement
                imageSrc="/img/effects/imagesToMovement/img2.png"
                gifSrc="/img/effects/imagesToMovement/img2Movement.gif"
              />
              <p>Build with seccond hand components</p>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-5">
              <ImageToMovement
                imageSrc="/img/effects/imagesToMovement/img3.png"
                gifSrc="/img/effects/imagesToMovement/img3Movement.gif"
              />
              <p>Use seccond hand components and help the environment</p>
            </div>
            <div className="w-full h-fit flex flex-col items-center justify-center gap-5">
              <ImageToMovement
                imageSrc="/img/effects/imagesToMovement/img4.png"
                gifSrc="/img/effects/imagesToMovement/img4Movement.gif"
              />
              <p>See the gallery</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-zinc-200 flex flex-col items-center justify-center w-full py-10 bg-gradient-to-bl from-black via-zinc-950 to-zinc-800">
        <div className="flex flex-col w-11/12 gap-5 border-b border-b-zinc-200 font-bold pb-5">
          <div className="flex items-center w-full text-2xl gap-5 lg:text-5xl">
            <FaSquare />
            <h2>How we work</h2>
          </div>
        </div>
        <div className="lg:w-11/12 w-full p-5 sm:p-8 lg:text-lg text-sm">
          <div className="columns-1 lg:gap-10 gap-5 lg:columns-2 [&>div:not(:first-child)]:mt-8">
          </div>
          </div>
      </section>
    </main>
  );
}

export default Home

