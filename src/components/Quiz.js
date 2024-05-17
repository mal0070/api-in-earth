import React, { useState } from 'react';
import '../styles/Quiz.css';

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSubmit = () => {
    alert(`You selected: ${selectedAnswer}`);
  };

  return (
    <div className="quiz">
      <h2>경제퀴즈</h2>
      <p>오늘의 퀴즈 참여시 이벤트 상품이 팡팡팡!</p>
      <p>Q. 오늘 이민아와 장윤경이 학교에서 참여한 퀴즈의 회사 이름은?</p>
      <div className="options">
        <button onClick={() => setSelectedAnswer('BLW')}>BLW</button>
        <button onClick={() => setSelectedAnswer('BMW')}>BMW</button>
        <button onClick={() => setSelectedAnswer('BBQ')}>BBQ</button>
        <button onClick={() => setSelectedAnswer('BHC')}>BHC</button>
      </div>
      <div className="actions">
        <button>힌트보기</button>
        <button onClick={handleSubmit}>정답제출</button>
      </div>
    </div>
  );
}

export default Quiz;
