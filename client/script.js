const API_BASE = '/api';

document.getElementById('loginBtn').addEventListener('click', async () => {
  const aadhar = document.getElementById('aadhar').value;
  const password = document.getElementById('password').value;

  const res = await fetch(`${API_BASE}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ aadharCardNumber: aadhar, password })
  });

  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    loadCandidates();
  } else {
    alert(data.error || 'Login failed');
  }
});

async function loadCandidates() {
  const res = await fetch(`${API_BASE}/candidate`);
  const candidates = await res.json();
  const container = document.getElementById('candidates');
  container.innerHTML = '';
  candidates.forEach(c => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${c.name}</strong> (${c.party})
      <button onclick="vote('${c._id}')">Vote</button>`;
    container.appendChild(div);
  });
}

async function vote(candidateID) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_BASE}/candidate/vote/${candidateID}`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await res.json();
  alert(data.message || 'Voted');
}


