import { endpoints } from '@/api/endpoints'
export default function BuildPcCard({ data }) {
    const imageUrl = `${endpoints.images}/components/${data.image}.png`
    return <>
        <div className="h-fit w-11/12 lg:w-72  bg-white text-white flex lg:flex-col flex-row shadow-2xl hover:border-orange-600 transition-all duration-400 border-zinc-400 border-2 lg:rounded-xl">
            <img src={imageUrl} alt="image" className="w-full lg:h-60 h-44 inset-0 object-cover border-2 border-gray-300 lg:rounded-t-xl" />
            <div className="w-full lg:h-36 h-44  text-white bg-custom-blue px-2 pb-10 pt-5 lg:rounded-b-xl">
                <ul>
                    <li>{data.brand} {data.model} {data.details}</li>
                    <li>{data.price} €</li>
                </ul>
            </div>
        </div>
    </>
}