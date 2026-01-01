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

import Marijuana from "../Marijuana.png";
import MartinLuther from "../MartinLuther.png"
import Nixon from "../Nixon.jpg";
import VenturaCounty from "../VenturaCounty.png";
import OutpatientClinics from "../OutpatientClinics.png";
import IndividualFreedoms from "../IndividualFreedoms.png";
import HandsOff from "../HandsOff.png";
import ConstitutionPowers from "../ConstitutionPowers.png";

import ScavengerHunt from "../ScavengerHunt.png";


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
            "This document was written during the oppressive reign of King John, who, much like other rulers of his time, set forth unfair taxes and passed cruel laws just for kicks. The English barons then got so angry that they threatened him with a civil war, and it forced the king to sign the Magna Carta at Runnymede. This document not only ensured that the king was subject to the law, rather than above it, but it also established rights such as the right to have a trial by jury and put a stop to excessive taxes and unnecessary imprisonment. Putting boundaries on the king's power makes this document an example of Limited Government since it allows the citizens to restrict the rulers and the power the government has.",
        position: { top: "20%", left: "25%" },

        rightImageSrc: Nixon.src,
        rightText: "This is an example of Limited Government because President Nixon was forced to resign after he broke the law, therefore following the principle that people in power can be taken out of office when they don't follow the rules, just like how a teacher or construction worker can get fired for not performing adequately or doing something wrong."
    },
    {
        id: 2,
        imageSrc: ChartersVA.src,
        title: "Charters of the Virginia Company of London",
        year: "1606",
        description:
            "This document guaranteed the rights of Englishmen, and it focuses on the newfound colonies in North America. The king had realized that England was running short on resources, and with a desire for wealth, decided to send some of his citizens across the ocean in search of God, Gold, and Glory. Since men were about to settle in “The New World,” they needed money, and a lot of it. This document allowed Englishmen to invest in Jamestown, fund the trip, and give the colonists money for land and basic needs. It also ensured that all people in the new colonies had the same rights they did in England. Allowing the citizens of Jamestown to self-govern, and elect officials, this document is a great example of Popular Sovereignty.",
        position: { top: "20%", left: "40%" },
        rightImageSrc: VenturaCounty.src,
        rightText: "This is an example of Popular Sovereignty because the citizens of Ventura county in California are using the right to vote to elect the representative of their choice."
    },
    {
        id: 3,
        imageSrc: VADeclaration.src,
        title: "Virginia Declaration of Rights",
        year: "1776",
        description:
            "Being a basis for three of America's most important foundational documents makes The VA Declaration of Rights extra special in my opinion. Written by George Mason, it was made during the Revolutionary War for the purpose of creating a new government that would follow the principles the founding fathers believed in. It gave Virginians rights considered “unalienable,” such as having the freedom to follow any faith you want, and trial by jury. This document introduced natural rights such as, “Life and Liberty,” to North America, and served as a prime example of American constitutionalism, meaning that the government's power should be limited in order to protect the rights of citizens. All these things point to the fundamental principle, Individual Rights, since it guarantees freedoms America believes that all people should have.",
        position: { top: "20%", left: "54%" },
        rightImageSrc: MartinLuther.src,
        rightText: "Martin Luther King Jr.'s speech \"I Have a Dream\" is an example of Individual Rights because he expresses his hopes in America becoming a place where people \"are not judged by the color of their skin, but by the content of their character.\" He is exercising Freedom of Speech."
    },
    {
        id: 4,
        imageSrc: articlesConfederation.src,
        title: "Articles of Confederation",
        year: "1776",
        description:
            "This document, while flawed, created our first national government. It was weak at the federal level, and gave states too much power. It was adopted during the Revolutionary war, similar to both the VA Declaration of Rights and the Declaration of Independence. The country was recently freed from the king, and didn't want there to be too much power in the hands of central authority, so they made a government where the states could be more independent, but it actually did more harm than good. This document represents Federalism, because the powers were unevenly spread out between the states and central government. Overall, it mostly served as a guide for what NOT to do, helping the future government try and keep a proper balance between the state and national level.",
        position: { top: "20%", left: "68%" },
        rightImageSrc: Marijuana.src,
        rightText: "This picture is an example of Federalism. Despite federal law, California and Colorado are two of the many states that have legalized marijuana for medical and recreational use between the years of 1996 and 2016. This is possible because under the 10th amendment, states can create their own laws to have health and safety within their borders."
    },
    {
        id: 5,
        imageSrc: Declaration.src,
        title: "Declaration of Independence",
        year: "1776",
        description:
            "Arguably America's most famous document, it announced our separation from Britain and our country's Independence. King George the third had been giving the colonies little representation in government and unfair taxes. (much like his distant cousin, King John.) The colonists, being dissatisfied, wrote this document stating their grievances for the king, and what they were going to do about it.This document shifted the people's focus from serving a king, to protecting the rights they considered unalienable, and it united them all together as a country. Popular Sovereignty represents this document best, as the people are the source of power for the government our founding fathers built.",
        position: { top: "50%", left: "25%" },
        rightImageSrc: HandsOff.src,
        rightText: "This picture is an example of Popular Sovereignty because these citizens are demanding government action for equal rights and it shows that the people of our country are the source of ideas, rebellion, and change."
    },
    {
        id: 6,
        imageSrc: ReligiousFreedom.src,
        title: "Virginia Statute of Religious Freedom",
        year: "1786",
        description:
            "Mostly written by Thomas Jefferson, it was created to abolish the idea of a state having an official religion. The Church of England was the official church in the colonies since the Charters of The VA Company of London brought it over along with the same rights for colonists as the rights of citizens of England. It required taxes, and attendance on Sunday's, therefore forcing the people in the colonies into a religion that might not be their own. This document inspired the First Amendment of the Bill of Rights, and it was also the first time religious freedom was protected by law in the history of the modern world. It represents the principle of Individual Rights as it protects a right that's considered unalienable.",
        position: { top: "50%", left: "40%" },
        rightImageSrc: IndividualFreedoms.src,
        rightText: "This is an example of Individual Freedom because these are citizens of America choosing their faith and being able to worship publicly and in their place of worship. This is Freedom of Religion."
    },
    {
        id: 7,
        imageSrc: Constitution.src,
        title: "United States Constitution",
        year: "1787",
        description:
            "The Constitution is the basis for our current government. It was written while America was under the Articles of Confederation which had a weak central government and threatened the survival of the new country. Knowing this, leaders came and gathered at the Constitutional Convention in hope of revising the Articles of Confederation, but decided to draft a new document instead. The Constitution created shared power between the state and national governments, made and divided our three branches of government, and allowed them to restrict each other’s power. This document would represent both Separation of Powers and Checks and Balances because of these reasons.",
        position: { top: "50%", left: "54%" },
        rightImageSrc: ConstitutionPowers.src,
        rightText: "Only using one of the two principles this document represents, this picture is an example of Separation of Powers because the branches of government all limit each other."
    },
    {
        id: 8,
        imageSrc: BillOfRights.src,
        title: "Bill of Rights",
        year: "1789",
        description:
            "The preamble to the Constitution, The Bill of Rights helped establish the structure of our current government. It protects our fundamental freedoms such as freedom of religion, press, and speech. The Bill of Rights were written just as America was debating the Constitution, fearing that it would make too strong of a central government, as opposed to the weak central government established under the Articles of Confederation. The citizens fearing this were called Anti-Federalists. This eruption of debate was what prompted James Madison to write the first draft of the Bill of Rights. This is an example of Federalism, as they were trying to get a balance between the state and federal governments.",
        position: { top: "50%", left: "68%" },
        rightImageSrc: OutpatientClinics.src,
        rightText: "This is an example of Federalism, since Massachusetts created America’s first universal health care system in 2006, causing parts of the Affordable Care Act."
    },
    {
        id: 9,
        imageSrc: ScavengerHunt.src,
        title: "Interactive Element",
        year: "2026",
        description:
            "I'd hand out a Scavenger Hunt to every visitor and see if they can find every hidden “easter egg” hidden throughout the museum. If they find them all, they get 20% off in the souvenir shop.",
        position: { top: "35%", left: "10%" },
    },
    {
        id: 10,
        imageSrc: ScavengerHunt.src,
        title: "Interactive Element",
        year: "2026",
        description:
            "I'd hand out a Scavenger Hunt to every visitor and see if they can find every hidden “easter egg” hidden throughout the museum. If they find them all, they get 20% off in the souvenir shop.",
        position: { top: "35%", left: "80%" },
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
                        {(() => {
                            const hasRightPanel =
                                !!selectedItem.rightImageSrc || !!selectedItem.rightText;

                            return (
                                <div className="flex h-full">

                                    {/* LEFT PANEL */}
                                    <div
                                        className={`p-6 overflow-y-auto ${hasRightPanel ? "w-1/2" : "w-full"
                                            }`}
                                    >
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

                                    {/* DIVIDER + RIGHT PANEL (ONLY IF CONTENT EXISTS) */}
                                    {hasRightPanel && (
                                        <>
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
                                        </>
                                    )}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameWrapper;
