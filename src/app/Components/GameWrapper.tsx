"use client"

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
    description: string;
    position: { top: string; left: string }; // New: manual position
}

const gameItems: GameItem[] = [
    {
        id: 1,
        imageSrc: magnaCarta.src,
        title: "Item 1",
        description: "This is the description for item 1.",
        position: { top: "15%", left: "25%" }
    },
    {
        id: 2,
        imageSrc: articlesConfederation.src,
        title: "Item 2",
        description: "This is the description for item 2.",
        position: { top: "15%", left: "40%" }
    },
    {
        id: 3,
        imageSrc: ChartersVA.src,
        title: "Item 3",
        description: "This is the description for item 3.",
        position: { top: "15%", left: "55%" }
    },
    {
        id: 4,
        imageSrc: BillOfRights.src,
        title: "Item 4",
        description: "This is the description for item 4.",
        position: { top: "15%", left: "70%" }
    },
    {
        id: 5,
        imageSrc: Constitution.src,
        title: "Item 5",
        description: "This is the description for item 5.",
        position: { top: "40%", left: "25%" }
    },
    {
        id: 6,
        imageSrc: Declaration.src,
        title: "Item 6",
        description: "This is the description for item 6.",
        position: { top: "40%", left: "40%" }
    },
    {
        id: 7,
        imageSrc: ReligiousFreedom.src,
        title: "Item 7",
        description: "This is the description for item 7.",
        position: { top: "40%", left: "55%" }
    },
    {
        id: 8,
        imageSrc: VADeclaration.src,
        title: "Item 8",
        description: "This is the description for item 8.",
        position: { top: "40%", left: "70%" }
    },
];

const GameWrapper: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);

    const openModal = (item: GameItem) => setSelectedItem(item);
    const closeModal = () => setSelectedItem(null);

    return (
        <div className="relative w-full h-screen">
            {gameItems.map((item) => (
                <img
                    key={item.id}
                    src={item.imageSrc}
                    alt={item.title}
                    className="cursor-pointer w-32 h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform absolute"
                    style={{ top: item.position.top, left: item.position.left }}
                    onClick={() => openModal(item)}
                />
            ))}

            {/* Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <h2 className="text-xl font-bold mb-2">{selectedItem.title}</h2>
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
