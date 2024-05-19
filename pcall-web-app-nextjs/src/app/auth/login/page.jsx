import Link from 'next/link'

function Login() {
    return (
        <form className="w-10/12 flex items-center justify-center text-custom-blue">
            <section className="flex w-[30rem] flex-col gap-12">
                <div className="text-center lg:text-5xl text-3xl font-bold">Log In</div>
                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italicfocus:outline-none" />
                </div>

                <div className="w-full transform border-b-2 border-custom-blue bg-transparent text-lg duration-300 focus-within:border-orange-500">
                    <input type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
                </div>

                <button type="submit" className="transform rounded-sm bg-custom-blue py-2 text-zinc-200 font-bold duration-300  hover:text-orange-500">LOG IN</button>

                <a href="#" className="transform text-center font-semibold text-custom-blue duration-300 hover:text-orange-500">FORGOT PASSWORD?</a>

                <p className="text-center text-lg">
                    No account?
                    <Link href="/auth/signup" className="font-medium text-orange-600 underline-offset-4 hover:underline"> Create One</Link>
                </p>
            </section>
        </form>
    );
}

export default Login;