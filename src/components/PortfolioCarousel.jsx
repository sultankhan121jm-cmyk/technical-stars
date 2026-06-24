import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const portfolioImages = [
    "/images/portfolio-1.jpg",
    "/images/portfolio-2.jpg",
    "/images/portfolio-3.jpg",
    "/images/portfolio-4.jpg",
    "/images/portfolio-5.jpg",
    "/images/portfolio-6.jpg",
    "/images/portfolio-7.jpg",
    "/images/portfolio-8.jpg",
];

const PortfolioCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const paginate = useCallback(
        (newDirection) => {
            setDirection(newDirection);
            setCurrentIndex((prev) => {
                const next = prev + newDirection;
                if (next < 0) return portfolioImages.length - 1;
                if (next >= portfolioImages.length) return 0;
                return next;
            });
        },
        []
    );

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            paginate(1);
        }, 4000);
        return () => clearInterval(interval);
    }, [autoPlay, paginate]);

    return (
        <section className="py-20 md:py-24 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-5 lg:px-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full text-blue-950 bg-amber-400 font-black text-xs tracking-wider uppercase mb-3 shadow-sm"
                    >
                        Our Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight"
                    >
                        Recent Projects
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-20 h-1.5 bg-blue-700 mx-auto mt-4 rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 text-slate-500 text-sm md:text-base max-w-xl mx-auto"
                    >
                        Real jobs, real results — see the quality of our work firsthand.
                    </motion.p>
                </div>

                {/* Carousel */}
                <div
                    className="relative max-w-2xl mx-auto"
                    onMouseEnter={() => setAutoPlay(false)}
                    onMouseLeave={() => setAutoPlay(true)}
                >
                    <div className="overflow-hidden rounded-2xl">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                                className="relative group bg-slate-100 rounded-2xl overflow-hidden border border-slate-200"
                            >
                                <div className="w-full h-[420px] sm:h-[480px] md:h-[540px] overflow-hidden bg-slate-200">
                                    <img
                                        src={portfolioImages[currentIndex]}
                                        alt="BM Cooling Centre work"
                                        loading="lazy"
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.src =
                                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' fill='%23E2E8F0'%3E%3Crect width='600' height='800'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%2394A3B8'%3EPhoto Here%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-200 z-10"
                        aria-label="Previous"
                    >
                        <FaChevronLeft className="text-sm" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-200 z-10"
                        aria-label="Next"
                    >
                        <FaChevronRight className="text-sm" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {portfolioImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`rounded-full transition-all duration-300 ${i === currentIndex
                                    ? "w-8 h-2.5 bg-blue-700"
                                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <p className="text-center text-slate-400 text-xs mt-3 font-medium">
                    {currentIndex + 1} / {portfolioImages.length}
                </p>
            </div>
        </section>
    );
};

export default PortfolioCarousel;