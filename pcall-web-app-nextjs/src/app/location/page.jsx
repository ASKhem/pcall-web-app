import { MdPinDrop, MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Location() {
    const email = "pcallSA@gmail.com";
    const number = "+34 675 88 66";
    const address = "A Coruña Payo Gomez 6";
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.4693190731023!2d-8.409790323440143!3d43.367209971117084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7c7d53e2df53%3A0xff6f0609546b9290!2zQ2FsbGUgUGF5byBHw7NtZXosIEEgQ29ydcOxYSwgTGEgQ29ydcOxYSwgRXNwYcOxYQ!5e0!3m2!1ses!2scz!4v1718098465035!5m2!1ses!2scz";

    return (
        <div className="flex flex-col md:flex-row w-full min-h-[95vh] bg-gradient-to-bl from-zinc-100 via-zinc-300 to-zinc-500">
            <div className="md:w-5/12 flex h-full items-center justify-center">
                <div className=" flex flex-col items-center justify-center rounded-xl p-10 backdrop-blur-lg">
                    <ul className="w-full flex flex-col items-start justify-center p-10 gap-5 text-xl">
                        <li>
                            <div className="flex gap-2 items-center">
                                <MdPinDrop />
                                <p>Location</p>
                            </div>
                            {address || <p>Address not available</p>}
                        </li>
                        <li>
                            <div className="flex gap-2 items-center">
                                <MdOutlineEmail />
                                <p>Email</p>
                            </div>
                            {email || <p>Email not available</p>}
                        </li>
                        <li>
                            <div className="flex gap-2 items-center">
                                <BsFillTelephoneFill />
                                <p>Phone</p>
                            </div>
                            {number || <p>Phone number not available</p>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-full md:h-screen ">
                {googleMapsUrl ? (
                    <iframe
                        src={googleMapsUrl}
                        className="w-full h-full min-h-96"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                ) : (
                    <div className="flex items-center justify-center w-full h-full min-h-[95vh]">
                        <p>Google Maps URL not available</p>
                    </div>
                )}
            </div>
        </div>
    );
}