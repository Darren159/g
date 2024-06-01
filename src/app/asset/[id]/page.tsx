import AssetDetail from "./AssetDetail";

export default function Asset({ params }: { params: { id: string } }) {

  return (
    <main className="flex min-h-screen flex-col items-center py-8">
      <AssetDetail hash={params.id}/>
    </main>
  );
}