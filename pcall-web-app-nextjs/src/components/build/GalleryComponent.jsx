import Gallery from "./GalleryCard";

function componentCategoryConversion(component) {
  const componentMap = {
    "Case": "Case",
    "Motherboard": "Motherboard",
    "CPU": "Processor",
    "GPU": "Graphic Card",
    "RAM": "RAM",
    "NVMe": "NVMe Memory",
    "Hard_Drive": "Hard Drive",
    "CPUCooling": "CPU Cooling",
    "Power_Supply": "Power Supply",
    "Cooling_Fan": "Cooling Fan",
    "Network_Card": "Network Card",
    "Sound_Card": "Sound Card"
  };

  return component ? (componentMap[component.category] || "") : "";
}

function GalleryComponent({ selectCategory, component, pcForm}) {

  let categoryName = componentCategoryConversion(component);
  return (
    <div className="w-full flex lg:flex-row flex-col items-center justify-between">
      <div className="lg:w-6/12 w-full h-fit p-2">
        <div className="bg-opacity-50 backdrop-blur-sm relative lg:h-[510px] h-fit text-white w-full  border-2 border-zinc-800  rounded-xl shadow-2xl shadow-black bg-black">
          {/* <img src="/img/galleryComponent/gcAnimation.gif" alt="Imagen de la construcción de un PC" className="text-sm w-full h-full object-cover absolute rounded-xl" /> */}
          {component && (
            <div className="text-lg flex flex-col items-center justify-between w-full h-full rounded-xl">
              <div className="relative flex w-full h-2/3 items-center justify-between p-10 backdrop-filter bg-opacity-20 rounded-t-xl gap-5">
                <div class="relative overflow-hidden bg-cover bg-no-repeat rounded-xl">
                  <img src={`http://localhost:9090/images/components/${component.image}.png`} alt={component.model} className="text-sm w-64 h-64rounded-xl ransition duration-300 ease-in-out hover:scale-110" />
                </div>
                <h2 className="flex items-center justify-center text-center lg:text-5xl text-2xl w-1/2">{categoryName}</h2>
              </div>
              <div className="relative bg-black h-1/3 w-full p-10 backdrop-filter bg-opacity-20 backdrop-blur rounded-b-xl">
                <p>{component.brand} {component.model}</p>
                <p>{component.details}</p>
                <p>{component.price}€</p>
                <p>{component.releaseYear}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-7/12 w-full h-full flex p-2 flex-items-center justify-center">
        <div className="w-full h-full">
          <Gallery selectCategory={selectCategory} componentsInfo={pcForm} />
        </div>
      </div>
    </div>
  );
}

export default GalleryComponent;