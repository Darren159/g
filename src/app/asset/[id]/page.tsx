import AssetDetail from "./AssetDetail";

export default function Asset({ params }: { params: { id: number } }) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8">
      <AssetDetail assetId={params.id}/>
    </main>
  );
}