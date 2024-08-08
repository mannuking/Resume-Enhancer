import React, { useState } from 'react';
import ResumeInput from './components/ResumeInput';
import Suggestions from './components/Suggestions';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleResumeChange = (text) => {
    setResumeText(text);
  };

  const getSuggestions = async () => {
    // Placeholder for Gemini API call
    // Replace with actual API call when available
    const mockSuggestions = [
      "Consider adding quantifiable achievements to your experience section.",
      "Use action verbs to start your bullet points.",
      "Tailor your resume to the specific job description."
    ];
    setSuggestions(mockSuggestions);
  };

  return (
    <div className="App">
      <h1>Resume Enhancer</h1>
      <ResumeInput onChange={handleResumeChange} />
      <button onClick={getSuggestions}>Get Suggestions</button>
      <Suggestions suggestions={suggestions} />
    </div>
  );
}

export default App;
