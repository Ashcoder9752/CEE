import React, {useState} from 'react';
import VideoCard from "../../VideoCard.jsx";
import {cn} from "../../../lib/utils.js";

export default function CeeExamVideos() {
    const [activeCategory, setActiveCategory] = useState('coding');

    const categories = {
        coding: {
            id: 'coding',
            title: 'Ability to Code',
            videos: [
                {id: 'W6NZfCO5SIk', title: 'JavaScript Crash Course', author: 'Programming with Mosh'},
                {id: 'Tn6-PIqc4UM', title: 'React in 100 Seconds', author: 'Fireship'},
                {id: '8hly31xKli0', title: 'Clean Code Principles', author: 'Coding Tech'},
                {id: 'rfscVS0vtbw', title: 'Python Full Course', author: 'freeCodeCamp'},
                {id: 'W6NZfCO5SIk', title: 'JavaScript Crash Course', author: 'Programming with Mosh'},
                {id: 'Tn6-PIqc4UM', title: 'React in 100 Seconds', author: 'Fireship'},
                {id: '8hly31xKli0', title: 'Clean Code Principles', author: 'Coding Tech'},
                {id: 'rfscVS0vtbw', title: 'Python Full Course', author: 'freeCodeCamp'},
                {id: 'W6NZfCO5SIk', title: 'JavaScript Crash Course', author: 'Programming with Mosh'},
                {id: 'Tn6-PIqc4UM', title: 'React in 100 Seconds', author: 'Fireship'},
                {id: '8hly31xKli0', title: 'Clean Code Principles', author: 'Coding Tech'},
                {id: 'rfscVS0vtbw', title: 'Python Full Course', author: 'freeCodeCamp'},
                {id: 'W6NZfCO5SIk', title: 'JavaScript Crash Course', author: 'Programming with Mosh'},
                {id: 'Tn6-PIqc4UM', title: 'React in 100 Seconds', author: 'Fireship'},
                {id: '8hly31xKli0', title: 'Clean Code Principles', author: 'Coding Tech'},
                {id: 'rfscVS0vtbw', title: 'Python Full Course', author: 'freeCodeCamp'},
            ]
        },
        language: {
            id: 'language',
            title: 'Language Reasoning',
            videos: [
                {id: '8S0FDjFBj8o', title: 'Natural Language Processing', author: 'Stanford Online'},
                {id: 'BJZcRs8K_EU', title: 'Semantic Analysis', author: 'Learn With'},
                {id: 'rS_4YlbQy0k', title: 'Linguistics Explained', author: 'NativLang'},
                {id: 'A5OniA4rNzc', title: 'Language Structure', author: 'Education Portal'}
            ]
        },
        analytical: {
            id: 'analytical',
            title: 'Analytical Reasoning',
            videos: [
                {id: 'pbB0GrVX_uY', title: 'Logic and Critical Thinking', author: 'TED-Ed'},
                {id: '9TlHLpv9zx4', title: 'Problem Solving Techniques', author: 'MindTools'},
                {id: 'pN4vYDqHIbo', title: 'Analytical Reasoning Tutorial', author: 'Academic Hub'},
                {id: 'ubvV498Ut2o', title: 'Data Analysis Methods', author: 'Statistics Course'}
            ]
        },
        aptitude: {
            id: 'aptitude',
            title: 'Aptitude',
            videos: [
                {id: 'r_C2NlJ49Dw', title: 'Quantitative Aptitude Tricks', author: 'Math Simplified'},
                {id: 'V6yiMyUjZkU', title: 'Spatial Reasoning Test', author: 'CareerVidz'},
                {id: 'hVimVzgtD6w', title: 'Pattern Recognition', author: 'Brilliant'},
                {id: 'CT8Xai0cQz0', title: 'Mathematical Aptitude', author: 'Logical Academy'}
            ]
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 max-h-[60vh] overflow-y-auto">
            {/* Category Tabs */}
            <div className="flex justify-center mb-10">
                <div className="bg-zinc-800 rounded-full p-1 inline-flex shadow-inner">
                    {Object.values(categories).map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn("px-6 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                activeCategory === category.id
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-zinc-400 hover:text-white hover:bg-zinc-700"
                            )}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories[activeCategory].videos.map((video, idx) => <VideoCard video={video} key={idx}/>)}
            </div>
        </div>
    );
}