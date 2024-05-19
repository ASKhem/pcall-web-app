function Auth({ children }) {

    return (
        <>
            <div className="relative w-full h-[93vh] flex items-center justify-center">
                <div className="lg:w-5/12 h-full w-full bg-gradient-to-bl from-zinc-300 via-zinc-500 to-zinc-700 flex justify-center items-center">
                    {children}
                </div>
                <div className="bg-black lg:w-7/12 h-full lg:flex hidden items-center justify-center">
                    <img src="/img/backgrounds/loginBackground.svg" alt="background" className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
}

export default Auth;