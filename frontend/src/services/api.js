const API_URL = process.env.REACT_APP_API_URL;

export async function getBugs() {
  const res = await fetch(`${API_URL}/api/bugs`);
  return await res.json();
}

export async function createBug(data) {
  const res = await fetch(`${API_URL}/api/bugs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}
