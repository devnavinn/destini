import { motion } from "framer-motion";

// Define custom gradient & styling for the main section


export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen rounded-[2.5rem]  mx-6 py-6 md:py-16
                  bg-no-repeat bg-[length:100%_auto] 
                 bg-[url('/buttom-gradient.png')] 
                 bg-[bottom_center]"

        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 flex space-x-6 justify-center"
            >
                <img src="/hero-image.png" alt="Hero Image" className="w-full object-contain" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-center max-w-5xl"
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Want to share your plans or join something exciting nearby?</h2>
                <h3 className="text-2xl md:text-3xl  text-white mb-4">Meet people who get you with Destini.</h3>
                <p className="text-white/80 mb-7 max-w-3xl">
                    Whether you're planning a coffee run, a weekend hike, a creative collab, or a study session, destini connects you with like-minded people around you who are into the same things you are.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="#" >
                        <img src="/appstore.png" alt="Download on the App Store" className="w-full" />
                    </a>
                    <a href="#" >
                        <img src="/googleplay.png" alt="Get it on Google Play" className="w-full" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
