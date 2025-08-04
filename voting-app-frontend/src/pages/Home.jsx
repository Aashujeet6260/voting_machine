import React, { useEffect, useState } from 'react';
import API from '../api/axios';

export default function Home() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    API.get('/candidates')
      .then((res) => setCandidates(res.data))
      .catch((err) => console.error(err));
  }, []);

  const vote = async (id) => {
    try {
      await API.post(`/candidates/vote/${id}`);
      alert('Voted successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Vote failed');
    }
  };

  return (
    <div>
      <h2>Candidates</h2>
      {candidates.map((cand) => (
        <div key={cand._id}>
          <h3>{cand.name}</h3>
          <p>{cand.party}</p>
          <button onClick={() => vote(cand._id)}>Vote</button>
        </div>
      ))}
    </div>
  );
}