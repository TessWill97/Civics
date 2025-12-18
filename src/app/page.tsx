// import { parse } from "csv-parse/sync"
// import * as fs from 'fs'
import GameWrapper from "./Components/GameWrapper";

/**
 * Performs data loading outside of rendering the game so it only happens once.
 * @returns <Game>
 */
export default function Home() {
  //// Recieve correct answer of the day from API (Might need loading bar)
  // Use parser to read in data 
  return <div className="background bg-contain bg-center flex justify-center"
    style={{
      height: "100vh",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundImage: `url(https://media.istockphoto.com/id/1401428037/photo/empty-art-gallery-wall.jpg?s=612x612&w=0&k=20&c=FRqkxuNSepWDZCnpGgjuam2YQslDqCsAhCq5tcCten8=)`
    }}>
    <div className="game-container overflow-y-scroll w-full h-full">
      <GameWrapper />
    </div>
  </div>
}


