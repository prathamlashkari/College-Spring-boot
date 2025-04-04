import React, { useState } from "react";
import "../style/Act.css";
import { acts } from "../constant/Act";
const Acts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typedContent, setTypedContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

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
          typedContent.map((para, index) => (
            <p key={index} className="typed-text">
              <Typewriter
                words={[para]}
                loop={1}
                typeSpeed={30}
                deleteSpeed={0}
                delaySpeed={500}
              />
            </p>
          ))}
      </div>
    </div>
  );
};

export default Acts;
