import { useState } from "react";
import "./App.css";

export default function App() {
  const [votes, setVotes] = useState({
    OptionA: 0,
    OptionB: 0,
    OptionC: 0,
  });

  const [showResults, setShowResults] = useState(false);

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  const totalVotes = votes.OptionA + votes.OptionB + votes.OptionC;

  return (
    <div className="app-container">
      {!showResults ? (
        <>
          <h1 className="title">🎉 Voting App</h1>
          <p className="subtitle">Cast your vote below 👇</p>

          <div className="options">
            <button className="vote-btn option-a" onClick={() => handleVote("OptionA")}>
              ✅ Vote FULL STACK DEVELOPER
            </button>
            <button className="vote-btn option-b" onClick={() => handleVote("OptionB")}>
              ⭐ Vote ARTIFICIAL INTELLIGENCE DEVELOPER
            </button>
            <button className="vote-btn option-c" onClick={() => handleVote("OptionC")}>
              🚀 Vote SOFTWARE DEVELOPER
            </button>
          </div>

          <button className="results-btn" onClick={() => setShowResults(true)}>
            📊 View Results
          </button>
        </>
      ) : (
        <>
          <h1 className="title">📊 Voting Results</h1>
          <div className="results">
            <p>Option A: <span>{votes.OptionA}</span></p>
            <p>Option B: <span>{votes.OptionB}</span></p>
            <p>Option C: <span>{votes.OptionC}</span></p>
            <p className="total">Total Votes: <span>{totalVotes}</span></p>
          </div>

          <button className="back-btn" onClick={() => setShowResults(false)}>
            🔙 Back to Voting
          </button>
        </>
      )}
    </div>
  );
}
