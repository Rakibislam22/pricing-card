import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard';

// Spread animation
export const getAnimationClasses = (index, isLoaded) => {
    if (isLoaded) return "translate-x-0 translate-y-0 rotate-0 opacity-100 scale-100";

    // Firstly stuck the cards in a spread position, then animate them to their final position
    switch (index) {
        case 0: return "translate-y-[150%] md:translate-y-0 md:translate-x-[160%] rotate-[-8deg] opacity-0 scale-90 z-40";
        case 1: return "translate-y-[50%] md:translate-y-0 md:translate-x-[55%] rotate-[-3deg] opacity-0 scale-95 z-30";
        case 2: return "-translate-y-[50%] md:translate-y-0 md:-translate-x-[55%] rotate-[3deg] opacity-0 scale-95 z-20";
        case 3: return "-translate-y-[150%] md:translate-y-0 md:-translate-x-[160%] rotate-[8deg] opacity-0 scale-90 z-10";
        default: return "";
    }
};



const Pricing = () => {
    const [pricingPlans, setPricingPlans] = useState([]);
    const [isAnnual, setIsAnnual] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchPricingPlans = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}pricing-plans.json`);

                if (!response.ok) {
                    throw new Error('Failed to fetch pricing plans');
                }

                const plans = await response.json();
                setPricingPlans(plans);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPricingPlans();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-slate-100 py-24 font-sans selection:bg-[#ccff00] selection:text-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-semibold text-gray-900 tracking-tight sm:text-5xl mb-4">
                        Simple pricing for all your needs
                    </h2>
                    <p className="text-lg text-gray-500">
                        Start for free, upgrade when you love it — No credit card required. All prices are in US Dollars.
                    </p>
                </div>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-16">
                    <div className="bg-gray-200/60 p-1 rounded-full relative inline-grid grid-cols-2">

                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 flex justify-center items-center ${!isAnnual ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Monthly
                        </button>

                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 flex justify-center items-center gap-2 ${isAnnual ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Annually
                            <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider transition-colors duration-300 ${isAnnual ? 'bg-white text-gray-900' : 'bg-gray-400/40 text-gray-700'
                                    }`}
                            >
                                Save 20%
                            </span>
                        </button>

                        {/* Sliding Pill */}
                        <div
                            className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-full bg-gray-900' : 'translate-x-0 bg-white shadow-sm'
                                }`}
                        />

                    </div>
                </div>

                {/* Grid Layout with fixed heights (items-stretch) */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch relative">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                            isAnnual={isAnnual}
                            index={index}
                            isLoaded={isLoaded}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Pricing;