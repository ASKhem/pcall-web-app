function ImageToBlurBackground({imgSrc, altText, companyName, mainText, text}) {
    return (
        <>
            <div className="relative w-full h-44 lg:aspect-square group bg-gray-200 overflow-hidden shadow-xl p-3">
                <img src={imgSrc} alt={altText} className="absolute w-full h-full inset-0 object-cover" />
                    <div
                        className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur">
                    </div>
                    <div className="absolute inset-x-5 text-white">
                        <h2 className="text-4xl font-semibold mb-2">{companyName}</h2>
                        <p className="text-sm font-medium uppercase tracking-wider mb-6">{mainText}</p>
                        <p className="lg:text-sm text-xs hidden group-hover:block">{text}</p>
                    </div>
            </div>
        </>
    )
}

export default ImageToBlurBackground;
