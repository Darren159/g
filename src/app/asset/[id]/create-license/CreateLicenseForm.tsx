import { createLicenseTemplate } from "@/actions";

export default function CreateLicenseForm({ contentHash }: { contentHash: string }) {
  const createLicenseTemplateWithHash = createLicenseTemplate.bind(null, contentHash);
  return (
    <form
      action={createLicenseTemplateWithHash}
      className="flex flex-col gap-4 border border-white border-solid rounded-lg p-4 w-1/2"
    >
      <label className="text-sm font-medium">Start Date</label>
      <input type="date" name="startDate" className="w-full border-gray-300 rounded-md p-2 text-black" required />
      <label className="text-sm font-medium">End Date</label>
      <input type="date" name="endDate" className="w-full border-gray-300 rounded-md p-2 text-black" required />
      <label className="text-sm font-medium">Commercial Use</label>
      <input type="checkbox" name="commercialUse" className="form-checkbox h-5 w-5 text-blue-600" />
      <label className="text-sm font-medium">Modification Allowed</label>
      <input type="checkbox" name="modificationAllowed" className="form-checkbox h-5 w-5 text-blue-600" />
      <label className="text-sm font-medium">Exclusive</label>
      <input type="checkbox" name="exclusive" className="form-checkbox h-5 w-5 text-blue-600" />
      <label className="text-sm font-medium">License Fee</label>
      <input
        type="text"
        name="licenseFee"
        placeholder="Enter the license fee"
        className="w-full border-gray-300 rounded-md p-2 text-black"
        required
      />
      <label className="text-sm font-medium">Royalty</label>
      <input
        type="text"
        name="royalty"
        placeholder="Enter the royalty"
        className="w-full border-gray-300 rounded-md p-2 text-black"
        required
      />
      <label className="text-sm font-medium">Attribution Text</label>
      <input
        type="text"
        name="attributionText"
        placeholder="Enter the attribution text"
        className="w-full border-gray-300 rounded-md p-2 text-black"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Create License
      </button>
    </form>
  );
}
