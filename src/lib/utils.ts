export async function getAllImages() {
  const res = await fetch("http://localhost:3001/api/images", {cache: "no-cache"});
  if (!res.ok) {
    throw new Error("Failed to fetch assets");
  }
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getContentDetails(contentHash: string) {
    const res = await fetch("http://localhost:3001/api/content-details", {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contentHash }),
    });
  if (!res.ok) {
    throw new Error("Failed to fetch asset");
  }
    const data = await res.json();
  return data;
}

export async function getContentLicenses(contentHash: string) {
    const res = await fetch("http://localhost:3001/api/licenses-for-content", {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contentHash }),
    });
  if (!res.ok) {
    throw new Error("Failed to fetch asset");
  }
    const data = await res.json();
  return data;
}

export async function getAllUserLicenses(account: string) {
  const response = await fetch("/api/user-licenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userAddress: account }),
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    console.error("Error fetching licenses", data.error);
    return [];
  }
}