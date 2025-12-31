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
}

const gameItems: GameItem[] = [
    {
        id: 1,
        imageSrc: magnaCarta.src,
        title: "Magna Carta",
        year: "1215",
        description: "This is the description for item 1.",
        position: { top: "20%", left: "25%" }
    },
    {
        id: 3,
        imageSrc: ChartersVA.src,
        title: "Charters of the Virginia Company of london",
        year: "1606",
        description: "This is the description for item 2.",
        position: { top: "20%", left: "40%" }
    },
    {
        id: 3,
        imageSrc: VADeclaration.src,
        title: "Virginia Declaration of Rights",
        year: "1776",
        description: "This is the description for item 3.",
        position: { top: "20%", left: "54%" }
    },
    {
        id: 4,
        imageSrc: articlesConfederation.src,
        title: "Articles of Confederation",
        year: "1776",
        description: "This is the description for item 4.",
        position: { top: "20%", left: "68%" }
    },
    {
        id: 5,
        imageSrc: Declaration.src,
        title: "Declaration of Independence",
        year: "1776",
        description: "This is the description for item 5.",
        position: { top: "50%", left: "25%" }
    },
    {
        id: 6,
        imageSrc: ReligiousFreedom.src,
        title: "Virginia Statute of Religious Freedom",
        year: "1786",
        description: "This is the description for item 6.",
        position: { top: "50%", left: "40%" }
    },
    {
        id: 7,
        imageSrc: Constitution.src,
        title: "United States Constitution",
        year: "1787",
        description: "This is the description for item 7.",
        position: { top: "50%", left: "54%" }
    },
    {
        id: 8,
        imageSrc: BillOfRights.src,
        title: "Bill of Rights",
        year: "1789",
        description: "This is the description for item 8.",
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
                        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-2">
                            {selectedItem.title} ({selectedItem.year})
                        </h2>
                        <p className="mb-4">{selectedItem.description}</p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameWrapper;
