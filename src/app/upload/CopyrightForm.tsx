"use client";
import { useState, useEffect, useContext } from "react";
import Web3 from "web3";
import { uploadAsset } from "../../actions";
import WalletContext from "../WalletContext";

export default function CopyrightForm() {
    const { account } = useContext(WalletContext);
    console.log(account);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    if (account) {
      const message = "Please sign this message to verify your address.";
      const web3 = new Web3(window.ethereum);
      const signature = await web3.eth.personal.sign(message, account, "");
      formData.append("account", account);
      formData.append("signature", signature);
    }

    await uploadAsset(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-white border-solid rounded-lg p-4 w-1/2">
        <h1 className="font-semibold text-2xl">Register a New Asset</h1>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Asset Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the title of the asset"
            className="w-full border-gray-300 rounded-md p-2 text-black"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Asset Description</label>
          <textarea
            name="description"
            placeholder="Describe your asset"
            className="w-full border-gray-300 rounded-md p-2 text-black"
            required
          />
        </div>
        <div id="licenseTemplatesContainer" className="flex flex-col gap-4">
          <h2 className="text-lg font-medium">License Templates</h2>
          <button type="button" onClick={addLicenseTemplate} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Add Another License Template
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Asset File</label>
          <input type="file" name="image" accept="image/*" className="w-full border-gray-300 rounded-md" required />
        </div>
        <button type="submit" className="px-4 py-2 bg-white text-black rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

function addLicenseTemplate() {
  const container = document.getElementById("licenseTemplatesContainer");
  const index = container.querySelectorAll(".license-template").length;
  const template = `
    <div class="license-template flex flex-col gap-2 border border-gray-300 p-4 rounded-md">
      <label class="text-sm font-medium">Start Date</label>
      <input type="date" name="licenseTemplates[${index}][startDate]" class="w-full border-gray-300 rounded-md p-2 text-black" required />
      <label class="text-sm font-medium">End Date</label>
      <input type="date" name="licenseTemplates[${index}][endDate]" class="w-full border-gray-300 rounded-md p-2 text-black" required />
      <label class="text-sm font-medium">Commercial Use</label>
      <input type="checkbox" name="licenseTemplates[${index}][commercialUse]" class="form-checkbox h-5 w-5 text-blue-600" />
      <label class="text-sm font-medium">Modification Allowed</label>
      <input type="checkbox" name="licenseTemplates[${index}][modificationAllowed]" class="form-checkbox h-5 w-5 text-blue-600" />
      <label class="text-sm font-medium">Exclusive</label>
      <input type="checkbox" name="licenseTemplates[${index}][exclusive]" class="form-checkbox h-5 w-5 text-blue-600" />
      <label class="text-sm font-medium">License Fee</label>
      <input type="text" name="licenseTemplates[${index}][licenseFee]" placeholder="Enter the license fee" class="w-full border-gray-300 rounded-md p-2 text-black" required />
      <label class="text-sm font-medium">Royalty</label>
      <input type="text" name="licenseTemplates[${index}][royalty]" placeholder="Enter the royalty" class="w-full border-gray-300 rounded-md p-2 text-black" required />
      <label class="text-sm font-medium">Attribution Text</label>
      <input type="text" name="licenseTemplates[${index}][attributionText]" placeholder="Enter the attribution text" class="w-full border-gray-300 rounded-md p-2 text-black" required />
    </div>
  `;
  container.insertAdjacentHTML("beforeend", template);
}
