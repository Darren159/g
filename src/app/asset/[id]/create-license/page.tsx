import CreateLicenseForm from "./CreateLicenseForm";

export default function Request({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8">
      <CreateLicenseForm contentHash={params.id} />
    </main>
  );
}
