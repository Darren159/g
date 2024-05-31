"use client";
import { useState } from "react";

export default function RequestForm({ id }: { id: number }) {
  const [purpose, setPurpose] = useState("");
  const [distribution, setDistribution] = useState("");
  const [duration, setDuration] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [commercial, setCommercial] = useState(false);
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      purpose,
      distribution,
      duration,
      licenseType,
      commercial,
      specialRequirements,
      comments,
    };
    // Handle the form submission, e.g., send the request data to a server
    console.log("License Request Data:", requestData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Request a License</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium ">Purpose of Use</label>
          <textarea
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium ">Distribution Method</label>
          <input
            type="text"
            value={distribution}
            onChange={(e) => setDistribution(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium ">Duration of Use</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium ">License Type</label>
          <select
            value={licenseType}
            onChange={(e) => setLicenseType(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Select a license type</option>
            <option value="Exclusive">Exclusive</option>
            <option value="Non-Exclusive">Non-Exclusive</option>
            <option value="CC BY">CC BY (Attribution)</option>
            <option value="CC BY-SA">CC BY-SA (Attribution-ShareAlike)</option>
            <option value="CC BY-ND">CC BY-ND (Attribution-NoDerivs)</option>
            <option value="CC BY-NC">CC BY-NC (Attribution-NonCommercial)</option>
            <option value="CC BY-NC-SA">CC BY-NC-SA (Attribution-NonCommercial-ShareAlike)</option>
            <option value="CC BY-NC-ND">CC BY-NC-ND (Attribution-NonCommercial-NoDerivs)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium ">Commercial Use</label>
          <input
            type="checkbox"
            checked={commercial}
            onChange={(e) => setCommercial(e.target.checked)}
            className="mt-1 block"
          />
        </div>
        <div>
          <label className="block text-sm font-medium ">Special Requirements</label>
          <textarea
            value={specialRequirements}
            onChange={(e) => setSpecialRequirements(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium ">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Submit Request
        </button>
      </form>
    </div>
  );
}
