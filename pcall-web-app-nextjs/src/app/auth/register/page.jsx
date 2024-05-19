import Link from 'next/link'
function Register() {
    return (
        <form className="w-10/12 flex items-center justify-center text-custom-blue">
        <section className="flex w-[30rem] flex-col gap-12">
                <div className="text-center text-5xl font-bold">Sign Up</div>
                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input type="text" placeholder="Email" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                </div>
                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input type="text" placeholder="Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                </div>
                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
                </div>
                <button type="submit" className="transform rounded-sm bg-custom-blue py-2 text-zinc-200 font-bold duration-300  hover:text-orange-500">SIGN UP</button>
                <a href="#" className="transform text-center font-semibold text-custom-blue duration-300 hover:text-orange-600">FORGOT PASSWORD?</a>
                <p className="text-center text-lg">
                    Already have an account?
                    <Link href="/auth/login" className="font-medium text-orange-600 underline-offset-4 hover:underline"> Log In</Link>
                </p>
            </section>
        </form>
    );
}

export default Register;