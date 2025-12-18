"use client"

// GameWrapper.tsx
import React, { useState } from "react";
import gearIcon from "../settingsGear.png";

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
        imageSrc: gearIcon.src,
        title: "Item 1",
        description: "This is the description for item 1.",
        position: { top: "10%", left: "20%" }
    },
    {
        id: 2,
        imageSrc: gearIcon.src,
        title: "Item 2",
        description: "This is the description for item 2.",
        position: { top: "40%", left: "50%" }
    },
    {
        id: 3,
        imageSrc: gearIcon.src,
        title: "Item 3",
        description: "This is the description for item 3.",
        position: { top: "70%", left: "30%" }
    }
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
