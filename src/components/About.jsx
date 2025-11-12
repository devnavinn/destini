import React from "react";

const About = () => {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center my-5 md:my-10 mx-6 px-6 py-16 text-white rounded-[2.5rem] 
                 bg-[#0b0b1c] bg-no-repeat bg-[length:100%_auto] 
                 bg-[url('/top-gradient.png'),_url('/buttom-gradient.png')] 
                 bg-[position:top_center,_bottom_center]"
        >
            {/* Overlay to enhance text contrast (optional, can remove if not needed) */}
            <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-[#0b0b1c]/30 to-[#0b0b1c]/60 -z-10"></div>

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col items-center w-full">
                {/* Heading */}
                <div className="w-full flex justify-center items-center h-40 md:h-52 ">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center tracking-wide">
                        ABOUT OUR APP
                    </h2>
                </div>


                {/* Main grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                    {/* Left column */}
                    <div className="flex flex-col gap-6">
                        {/* Card 1 */}
                        <div className="bg-[#141427] p-6 rounded-2xl flex flex-col justify-between">
                            <div>
                                <p className="text-sm text-purple-400 mb-1">
                                    Accelerate your real-life connections
                                </p>
                                <h3 className="text-xl font-semibold mb-2">
                                    Connecting People Through Plans That Matter
                                </h3>
                                <p className="text-sm opacity-80 leading-relaxed">
                                    Destini is the easiest way to meet like-minded individuals nearby.
                                    Whether you're planning a weekend getaway, a work meetup, or a
                                    movie night, our app brings together people who share your
                                    mindset, goals, and vibe. It's networking, reimagined for real life.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 place-items-end">

                                <img
                                    src="/phone-icon-about-3.png"
                                    alt="Placeholder phones"
                                    className="-rotate-10 -mr-10"
                                />
                                <img
                                    src="/phone-icon-about-1.png"
                                    alt="Placeholder phones"
                                    className=""
                                />
                                <img
                                    src="/phone-icon-about-2.png"
                                    alt="Placeholder phones"
                                    className="rotate-10 mr-10"
                                />
                            </div>

                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#141427] p-6 rounded-2xl flex flex-col justify-between">
                            <div>
                                <p className="text-sm text-purple-400 mb-1">
                                    Built for Instant Connection
                                </p>
                                <h3 className="text-xl font-semibold mb-2">Seamless to Use</h3>
                                <p className="text-sm opacity-80 leading-relaxed">
                                    No learning curves or complex flows — just pick your interest,
                                    set a plan, and discover people around you. It's as easy as
                                    texting a friend.
                                </p>
                            </div>
                            <img
                                src="/about3.png"
                                alt="Placeholder UI"
                                className="mt-4 rounded-xl mx-auto"
                            />
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-6">
                        {/* Card 2 */}
                        <div className="bg-[#141427] p-6 rounded-2xl flex flex-col justify-between">
                            <img
                                src="/about2.png"
                                alt="Placeholder layout"
                                className=" rounded-xl mx-auto"
                            />
                            <div>
                                <p className="text-sm text-purple-400 mb-1">
                                    Streamline Social Planning
                                </p>
                                <h3 className="text-xl font-semibold mb-2">Purposeful Design</h3>
                                <p className="text-sm opacity-80 leading-relaxed">
                                    Crafted to make social planning effortless. With clean
                                    interfaces and intuitive interactions, Destini helps you focus
                                    on what matters: meaningful connections.
                                </p>
                            </div>

                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#141427] p-6 rounded-2xl flex flex-col justify-between">
                            <img
                                src="/about4.png"
                                alt="Placeholder people network"
                                className=" rounded-xl mx-auto"
                            />
                            <div>
                                <p className="text-sm text-purple-400 mb-1">
                                    Meet People, Not Profiles
                                </p>
                                <h3 className="text-xl font-semibold mb-2">
                                    Networking, Redefined
                                </h3>
                                <p className="text-sm opacity-80 leading-relaxed">
                                    Destini isn’t just another social app. It’s a tool to meet real
                                    people, in real life, for real experiences — without the awkward
                                    intros.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Tagline */}
                <div className="w-full flex justify-center items-center h-40 md:h-52">
                    <p className=" text-center text-2xl md:text-3xl opacity-90 max-w-5xl">
                        Built for real connections — <strong>Destini</strong> is where plans meet
                        purpose, and people meet people.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
