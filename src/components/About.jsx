import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
    offscreen: { y: 64, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.24, duration: 0.8 }
    }
};

const staggerVariants = {
    onscreen: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.12
        }
    }
};

const About = () => {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center my-20 md:my-32 mx-6 px-6 py-16 text-white rounded-[2.5rem]
        bg-[#0b0b1c] bg-no-repeat bg-[length:100%_auto]
        bg-[url('/top-gradient.png'),_url('/buttom-gradient.png')]
        bg-[position:top_center,_bottom_center]  relative"
        >
            <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-[#0b0b1c]/30 to-[#0b0b1c]/60 -z-10"></div>
            <div className="relative z-10 flex flex-col items-center w-full">
                <div className="w-full flex justify-center items-center h-32 md:h-52">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center tracking-wide">
                        ABOUT OUR APP
                    </h2>
                </div>
                {/* Main grid layout with stagger animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.32 }}
                    variants={staggerVariants}
                >
                    {/* Left column */}
                    <div className="flex flex-col gap-6">
                        {/* Card 1 */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-[#141427] overflow-hidden rounded-2xl flex flex-col justify-between border border-gray-800"
                        >
                            <div className="p-6">
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
                            <div className="grid grid-cols-3 place-items-end mt-6 md:mt-10">
                                <img
                                    src="/phone-icon-about-3.png"
                                    alt="Placeholder phones"
                                    className="-rotate-10 -mr-14"
                                />
                                <img
                                    src="/phone-icon-about-1.png"
                                    alt="Placeholder phones"
                                    className=""
                                />
                                <img
                                    src="/phone-icon-about-2.png"
                                    alt="Placeholder phones"
                                    className="rotate-10 mr-14"
                                />
                            </div>
                        </motion.div>
                        {/* Card 3 */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-[#141427] p-6 rounded-2xl h-full flex-1 flex flex-col justify-between border border-gray-800"
                        >
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
                            <div className="mt-6 md:mt-10">
                                <img
                                    src="/about3.png"
                                    alt="Placeholder UI"
                                    className="mt-4 rounded-xl mx-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                    {/* Right column */}
                    <div className="flex flex-col gap-6">
                        {/* Card 2 */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-[#141427] p-6 rounded-2xl flex flex-col justify-between border border-gray-800"
                        >
                            <img
                                src="/about2.png"
                                alt="Placeholder layout"
                                className=" rounded-xl mx-auto"
                            />
                            <div className="mt-6 md:mt-10 mb-20">
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
                        </motion.div>
                        {/* Card 4 */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-[#141427] p-6 rounded-2xl flex flex-col justify-between border border-gray-800"
                        >
                            <img
                                src="/about4.png"
                                alt="Placeholder people network"
                                className=" rounded-xl mx-auto"
                            />
                            <div className="mt-6 md:mt-10 mb-20">
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
                        </motion.div>
                    </div>
                </motion.div>
                {/* Tagline */}
                <div className="mt-10 w-full flex justify-center items-center h-40 md:h-52">
                    <p className=" text-center text-xl md:text-2xl opacity-90 max-w-3xl">
                        Built for real connections — <strong>Destini</strong> is where plans meet
                        purpose, and people meet people.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
