import VideoToMovement from "@/components/effects/VideoToMovement";

function GalleryHome() {
    return (
        <div className="lg:w-11/12 w-full p-5 lg:p-5 lg:text-lg text-sm grid lg:grid-cols-4  grid-cols-2 gap-9">
            <div className="w-full lg:h-full lg:col-span-1 col-span-1 flex flex-col items-center justify-center gap-5 lg:text-base text-sm">
                <VideoToMovement videoSrc="/vid/home/g2.mp4" text={"We carefully curate the finest components for your PC, offering a diverse selection of top-tier brands to cater to your preferences."} />
            </div>
            <div className="w-full lg:h-full lg:col-span-1 col-span-1 flex flex-col items-center justify-center gap-5 lg:text-base text-sm">
                <VideoToMovement videoSrc="/vid/home/g3.mp4" text={"Our team of professionals with years of experience will build your PC, ensuring the best quality."} />
            </div>
            <div className="w-full lg:h-full  lg:col-span-1 col-span-1 flex flex-col items-center justify-center gap-5 lg:text-base text-sm">
                <VideoToMovement videoSrc="/vid/home/g4.mp4" text={"We have the best designs in the market"} />
            </div>
            <div className="w-full lg:h-full  lg:col-span-1 col-span-1 flex flex-col items-center justify-center gap-5 lg:text-base text-sm">
                <VideoToMovement videoSrc="/vid/home/g5.mp4" text={"But we don't stop there. We test your PC to ensure it is working perfectly before we deliver it to you"} />
            </div>
            <div className="w-full lg:h-full  lg:col-span-4 col-span-2 flex flex-col items-center justify-center text-4xl">
                <div className="lg:w-10/12 w-full flex items-center justify-center">
                    <VideoToMovement videoSrc="/vid/home/g6.mp4" text={"Ready to deliver!"} type={true} />
                </div>

            </div>
        </div>
    )
}



export default GalleryHome;