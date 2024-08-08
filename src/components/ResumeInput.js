import React from 'react';

function ResumeInput({ onChange }) {
  return (
    <div>
      <textarea
        placeholder="Paste your resume here"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default ResumeInput;
