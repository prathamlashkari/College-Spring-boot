import React, { useEffect, useState } from "react";
import "../style/Act.css";
import { acts } from "../constant/Act";
import { Typewriter } from "react-simple-typewriter";

const Acts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typedContent, setTypedContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    let timer;

    if (showTyping && currentIndex < typedContent.length - 1) {
      timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, typedContent[currentIndex].length * 40 + 1000);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, showTyping, typedContent]);

  const handleGenerate = () => {
    const foundAct = acts.find((act) =>
      act.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundAct) {
      setSelectedTitle(foundAct.title);
      setTypedContent(foundAct.content);
      setCurrentIndex(0);
      setShowTyping(true);
    } else {
      setSelectedTitle("");
      setTypedContent(["No matching act found."]);
      setCurrentIndex(0);
      setShowTyping(true);
    }
  };

  return (
    <div className="acts-container">
      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by act category (e.g. land, environment, consumer)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate Text</button>
      </div>

      {/* Display Section */}
      <div className="typing-section">
        {selectedTitle && <h2>{selectedTitle}</h2>}

        {showTyping &&
          typedContent.slice(0, currentIndex + 1).map((para, index) => (
            <p key={index} className="typed-text">
              {index === currentIndex ? (
                <Typewriter
                  words={[para]}
                  loop={1}
                  typeSpeed={30}
                  deleteSpeed={0}
                  delaySpeed={500}
                />
              ) : (
                para
              )}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Acts;
