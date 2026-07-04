import React from 'react';
import { getAnimationClasses } from './Pricing';

const PricingCard = ({ plan, isAnnual, index, isLoaded }) => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const isFree = price === 0;

    return (
        <div
            className={`flex flex-col h-full p-8 rounded-3xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${getAnimationClasses(index, isLoaded)
                } ${plan.isHighlighted
                    ? 'bg-gray-900 text-white shadow-2xl'
                    : 'bg-white text-gray-900 border border-gray-200 hover:shadow-xl'
                }`}
        >
            <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-6">
                {isFree ? (
                    <span className="text-5xl font-semibold tracking-tight">Free</span>
                ) : (
                    <>
                        <span className="text-5xl font-semibold tracking-tight">${price}</span>
                        <span className={`ml-1 text-sm ${plan.isHighlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                            /{isAnnual ? 'year' : 'month'}
                        </span>
                    </>
                )}
            </div>

            <button
                className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-colors duration-200 mb-8 mt-auto ${plan.isHighlighted
                    ? 'bg-[#ccff00] text-gray-900 hover:bg-[#b3e600]'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
            >
                Get started
            </button>

            <p className={`text-sm mb-6 ${plan.isHighlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
            </p>

            <ul className="flex-1 space-y-4">
                {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                        <svg
                            className={`w-5 h-5 shrink-0 mr-3 ${plan.isHighlighted ? 'text-[#ccff00]' : 'text-gray-900'
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${plan.isHighlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;