import { Feature } from "@/types";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import FeatureActionsDropdown from "./FeatureActionsDropdown";

export default function  FeatureItem({feature}: {feature: Feature}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 min-h-44">
            <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                <div className="flex flex-col items-center">
                    <button className={feature.user_has_upvoted ? 'text-amber-600' : ''}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    </button>
                    <span className={`text-2xl font-semibold ${
                        feature.user_has_upvoted || feature.user_has_downvoted ? 'text-amber-600' : ''}`}>
                        {feature.upvote_count}
                    </span>
                    <button className={feature.user_has_downvoted ? 'text-amber-600' : ''}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </button>

                </div>
                <div className="flex-1">
                    <h2 className="text-2xl mb-2">
                        <Link href={route('feature.show', feature)}>
                        {feature.name}
                        </Link>
                    </h2>
                    {(feature.description || '').length > 200 && (
                        <>
                        <p>{isExpanded ? feature.description : `${(feature.description || '').slice(0, 200)}...`}</p>
                        <button onClick={toggleReadMore} className="text-amber-500 hover:underline">
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                        </>
                    )}
                    {(feature.description || '').length <= 200 && (
                        <p>{feature.description}</p>
                    )}
                </div>
                <div>
                    <FeatureActionsDropdown feature={feature} />
                </div>
            </div>
        </div>
    );
} 