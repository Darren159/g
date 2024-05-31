"use server"

export async function uploadAsset(formData: FormData) {
    console.log(formData);
  await fetch("http://localhost:3001/api/register", {
    method: "POST",
    body: formData,
  });
}