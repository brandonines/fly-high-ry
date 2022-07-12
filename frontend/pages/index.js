import Image from "next/image";
import cover from "../assets/fly-high-ry.png";

export default function Home() {
  return (
      <main>
        <div className="dashboard">
          <div className="cover-container">
            <Image
              src={cover}
              alt="Fly High Ry cover"
              className="cover-image"
              width="680px"
              height="360px"
              layout="intrinsic"
            />
            <div className="blurb-container">
              <h3>A collection of stories, words, and remembrances.</h3>
              <p>Written by his family and friends.</p>
          </div>
          </div>
        </div>
      </main>
  )
}