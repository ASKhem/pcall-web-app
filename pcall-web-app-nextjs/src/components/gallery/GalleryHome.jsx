import VideoToMovement from "@/components/effects/VideoToMovement";

function GalleryHome() {
    return (
        <div className="lg:w-11/12 w-full p-5 lg:p-5 lg:text-lg text-sm grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-1 grid-rows-7">
            <div className="w-full lg:col-span-2 lg:row-span-2 col-span-1 row-span-1 flex flex-col items-center justify-center gap-5">
                <p className="text-center">NZXT H5 Flowmaster</p>
                <video src="/vid/home/g1.mp4" className="w-11/12 rounded-xl" loop muted autoPlay />
            </div>
            <div className="w-full h-full lg:col-span-1 lg:row-span-1 col-span-1 row-span-1 flex flex-col items-center justify-center gap-5">
                <VideoToMovement videoSrc="/vid/home/g2.mp4" text={"We carefully curate the finest components for your PC, offering a diverse selection of top-tier brands to cater to your preferences."} />
            </div>
            <div className="w-full h-full lg:col-span-1 lg:row-span-1 col-span-1 row-span-1 flex flex-col items-center justify-center gap-5">
                <VideoToMovement videoSrc="/vid/home/g3.mp4" text={"Our team of professionals with years of experience will build your PC, ensuring the best quality."} />
            </div>
            <div className="w-full h-full lg:col-span-1 lg:row-span-1 col-span-1 row-span-1 flex flex-col items-center justify-center gap-5">
                <VideoToMovement videoSrc="/vid/home/g4.mp4" text={"But we don not stop there. We test your PC to ensure it is working perfectly before we deliver it to you"} />
            </div>
            <div className="w-full h-full lg:col-span-2 lg:row-span-1 col-span-1 row-span-1 flex flex-col items-center justify-center gap-5">
                <VideoToMovement videoSrc="/vid/home/g5.mp4" text={"RGB lighting"} />
            </div>
            <div className="w-full h-full lg:col-span-1 lg:row-span-1 col-span-1 row-span-1 flex flex-col items-center justify-center gap-5">
                <VideoToMovement videoSrc="/vid/home/g6.mp4" text={"Videogame performance"} />
            </div>
            <div className="w-full h-full lg:col-span-2 lg:row-span-1 col-span-1 row-span-1 flex flex-col items-center justify-center gap-5">
                <VideoToMovement videoSrc="/vid/home/g7.mp4" text={"Ready to deliver!"} />
            </div>
        </div>
    )
}



export default GalleryHome;