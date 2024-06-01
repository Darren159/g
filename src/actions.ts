"use server";

export async function uploadAsset(formData: FormData) {
  console.log(formData);
  const res = await fetch("http://localhost:3001/api/register", {
    method: "POST",
    body: formData,
  });
  console.log(res.json());
}

export async function createLicenseTemplate(contentHash: string, formData: FormData) {
  formData.append("contentHash", contentHash);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(jsonData));
  const res = await fetch("http://localhost:3001/api/create-license-template", {
    method: "POST",
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  });
//   console.log(res.json());
}
