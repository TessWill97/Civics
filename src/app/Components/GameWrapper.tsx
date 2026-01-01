"use client";

// GameWrapper.tsx
import React, { useState } from "react";
import magnaCarta from "../MagnaCarta.png";
import articlesConfederation from "../ArticlesOfConfederation.png";
import ChartersVA from "../ChartersVA.png";
import BillOfRights from "../BillOfRights.png";
import Constitution from "../Constitution.png";
import Declaration from "../Declaration.png";
import ReligiousFreedom from "../ReligiousFreedom.png";
import VADeclaration from "../VADeclaration.png";

// Type for each game item
interface GameItem {
    id: number;
    imageSrc: string;
    title: string;
    year: string;
    description: string;
    position: { top: string; left: string };

    // NEW — right-side modal content
    rightImageSrc?: string;
    rightText?: string;
}

const gameItems: GameItem[] = [
    {
        id: 1,
        imageSrc: magnaCarta.src,
        title: "Magna Carta",
        year: "1215",
        description:
            "This document was written during the oppressive reign of King John...",
        position: { top: "20%", left: "25%" },

        rightImageSrc: magnaCarta.src,
        rightText: "The Magna Carta limited the power of the monarchy and established the principle that no one is above the law."
    },
    {
        id: 2,
        imageSrc: ChartersVA.src,
        title: "Charters of the Virginia Company of London",
        year: "1606",
        description:
            "This document guaranteed the rights of Englishmen...",
        position: { top: "20%", left: "40%" }
    },
    {
        id: 3,
        imageSrc: VADeclaration.src,
        title: "Virginia Declaration of Rights",
        year: "1776",
        description:
            "Being a basis for three of America’s most important foundational documents...",
        position: { top: "20%", left: "54%" }
    },
    {
        id: 4,
        imageSrc: articlesConfederation.src,
        title: "Articles of Confederation",
        year: "1776",
        description:
            "This document, while flawed, created our first national government...",
        position: { top: "20%", left: "68%" }
    },
    {
        id: 5,
        imageSrc: Declaration.src,
        title: "Declaration of Independence",
        year: "1776",
        description:
            "Arguably America’s most famous document...",
        position: { top: "50%", left: "25%" }
    },
    {
        id: 6,
        imageSrc: ReligiousFreedom.src,
        title: "Virginia Statute of Religious Freedom",
        year: "1786",
        description:
            "Mostly written by Thomas Jefferson...",
        position: { top: "50%", left: "40%" }
    },
    {
        id: 7,
        imageSrc: Constitution.src,
        title: "United States Constitution",
        year: "1787",
        description:
            "The Constitution is the basis for our current government...",
        position: { top: "50%", left: "54%" }
    },
    {
        id: 8,
        imageSrc: BillOfRights.src,
        title: "Bill of Rights",
        year: "1789",
        description:
            "The preamble to the Constitution...",
        position: { top: "50%", left: "68%" }
    }
];

const GameWrapper: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);

    const openModal = (item: GameItem) => setSelectedItem(item);
    const closeModal = () => setSelectedItem(null);

    return (
        <div className="relative w-full h-screen">
            {gameItems.map((item) => (
                <div
                    key={item.id}
                    className="absolute flex flex-col items-center"
                    style={{ top: item.position.top, left: item.position.left }}
                >
                    <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="cursor-pointer w-32 h-32 object-cover shadow-md hover:scale-105 transition-transform"
                        onClick={() => openModal(item)}
                    />

                    <div className="mt-2 text-center w-32">
                        <div className="font-semibold text-sm">
                            {item.title}
                        </div>
                        <div className="text-xs text-gray-600">
                            {item.year}
                        </div>
                    </div>
                </div>
            ))}

            {/* Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg 
                                   w-[90vw] max-w-5xl 
                                   max-h-[85vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex h-full">

                            {/* LEFT PANEL */}
                            <div className="w-1/2 p-6 overflow-y-auto">
                                <h2 className="text-xl font-bold mb-2">
                                    {selectedItem.title} ({selectedItem.year})
                                </h2>

                                <p className="mb-4">
                                    {selectedItem.description}
                                </p>

                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>

                            {/* DIVIDER */}
                            <div className="w-px bg-black" />

                            {/* RIGHT PANEL */}
                            <div className="w-1/2 p-6 flex flex-col items-center overflow-y-auto">
                                {selectedItem.rightImageSrc && (
                                    <img
                                        src={selectedItem.rightImageSrc}
                                        alt="Supplemental visual"
                                        className="max-w-full max-h-64 object-contain mb-4"
                                    />
                                )}

                                {selectedItem.rightText && (
                                    <p className="text-gray-700 text-center">
                                        {selectedItem.rightText}
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameWrapper;
