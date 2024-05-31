import RequestForm from "./RequestForm"
export default function Request({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8">
      <RequestForm />
    </main>
  );
}
