import Gallery from "./GalleryCard";
import SpiralText from "@/components/effects/ScrambleText";

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

function GalleryComponent({ selectCategory, component, pcForm }) {

  let categoryName = componentCategoryConversion(component);
  return (
    <div className="w-full flex lg:flex-row flex-col items-center justify-between">
      <div className="lg:w-6/12 w-full h-fit p-2">
        <div className="bg-opacity-70 backdrop-blur-sm relative lg:h-[510px] h-[300px] text-white w-full  border-2 border-zinc-200 rounded-xl shadow-2xl shadow-black bg-black">
          {component ? (
            <div className="text-lg flex flex-col items-center justify-between w-full h-full rounded-xl">
              <div className="relative flex w-full h-2/3 items-center justify-between lg:p-10 p-5 backdrop-filter bg-opacity-20 rounded-t-xl gap-5">
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-xl">
                  <img src={`http://localhost:9090/images/components/${component.image}.png`} alt={component.model} className="text-sm lg:w-64 w-52 rounded-xl ransition duration-300 ease-in-out hover:scale-110" />
                </div>
                <h2 className="flex items-center justify-center text-center lg:text-5xl text-2xl w-1/2">{categoryName}</h2>
              </div>
              <div className="lg:text-sm text-xs relative bg-black h-1/3 w-full lg:p-10 p-5 backdrop-filter bg-opacity-20 backdrop-blur rounded-b-xl">
                <p>{component.brand} {component.model}</p>
                <p>{component.details}</p>
                <p>{component.price}€</p>
                <p>{component.releaseYear}</p>
              </div>
            </div>
          ) : (<SpiralText text="Start now" />)
          }
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