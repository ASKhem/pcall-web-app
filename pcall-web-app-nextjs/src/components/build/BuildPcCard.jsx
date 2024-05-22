export default function BuildPcCard({data}){

    return <>
        <div className =" h-fit lg:w-72 w-10/12 group bg-white text-white flex lg:flex-col flex-row shadow-2xl hover:border-orange-600 transition-all duration-400 border-zinc-400 border-2 rounded-xl">
            <img src ={`http://localhost:9090/images/components/${data.image}.png`} alt="image" className ="w-full lg:h-60 h-32 inset-0 object-cover border-2 border-gray-300 rounded-t-xl"/>
            <div className ="w-full h-36 text-white bg-custom-blue px-2 pb-10 pt-5 rounded-b-xl">
                <ul>
                    <li>{data.brand} {data.model} {data.details}</li>
                    <li>{data.price} €</li>
                </ul>
            </div>
        </div>
    </>
} 