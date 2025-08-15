const API_BASE = '/api';
let token = '';

document.getElementById('admin-login-btn').addEventListener('click', async () => {
  const aadhar = document.getElementById('admin-aadhar').value;
  const password = document.getElementById('admin-password').value;

  const res = await fetch(`${API_BASE}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ aadharCardNumber: aadhar, password })
  });

  const data = await res.json();
  if (data.token) {
    token = data.token;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-section').style.display = 'block';
    loadCandidates();
    loadVoteCounts();
  } else {
    alert(data.error || 'Login failed');
  }
});

document.getElementById('add-candidate-btn').addEventListener('click', async () => {
  const name = document.getElementById('candidate-name').value;
  const party = document.getElementById('candidate-party').value;

  const res = await fetch(`${API_BASE}/candidate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ name, party })
  });

  const data = await res.json();
  if (res.ok) {
    alert('Candidate added');
    loadCandidates();
    document.getElementById('candidate-name').value = '';
    document.getElementById('candidate-party').value = '';
  } else {
    alert(data.message || 'Error adding candidate');
  }
});

async function loadCandidates() {
  const res = await fetch(`${API_BASE}/candidate`);
  const candidates = await res.json();

  const container = document.getElementById('admin-candidates');
  container.innerHTML = '';

  candidates.forEach(c => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${c.name}</strong> (${c.party})
      <button onclick="deleteCandidate('${c._id}')">Delete</button>
    `;
    container.appendChild(div);
  });
}

async function deleteCandidate(id) {
  const res = await fetch(`${API_BASE}/candidate/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });

  const data = await res.json();
  if (res.ok) {
    alert('Candidate deleted');
    loadCandidates();
    loadVoteCounts();
  } else {
    alert(data.message || 'Error deleting candidate');
  }
}

async function loadVoteCounts() {
  const res = await fetch(`${API_BASE}/candidate/vote/count`);
  const counts = await res.json();

  const container = document.getElementById('vote-counts');
  container.innerHTML = '';
  counts.forEach(c => {
    const div = document.createElement('div');
    div.textContent = `${c.party}: ${c.count} votes`;
    container.appendChild(div);
  });
}
