import Link from "next/link"
export default function AdminPanel({ texts, img }) {
    return (
        <div className="w-full h-[70vh] items-center flex justify-center p-10 gap-5">
            <div className="w-5/12 h-full flex items-center justify-center">
                <img src={img} alt="Option Card" className="h-full w-full object-cover rounded-lg"></img>
            </div>
            <div className="w-7/12 h-full grid grid-cols-2 gap-5 items-center justify-center p-10">
                {
                    texts.map((text, index) => (
                        <Link href={`/admin/${text.toLowerCase()}`} className="w-full h-full flex items-center justify-center bg-zinc-900 rounded-lg text-zinc-200 font-semibold text-2xl border-zinc-600 hover:border-orange-700 border-2 hover:scale-105 transition-all duration-300">
                            <div key={index} >
                                <p>{text}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

