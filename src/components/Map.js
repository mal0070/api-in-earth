import React, { useState } from 'react';

function Map() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ATMs near: ${searchTerm}`);
    // 여기에 검색 로직 추가
  };

  return (
    <div>
      <h1>위치서비스</h1>
      <h2>주변 ATM 찾기</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="검색할 위치를 입력하세요"
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default Map;

