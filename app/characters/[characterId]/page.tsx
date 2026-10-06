
export default function CharacterDetail({
  params,
}: {
  params: { characterId: string };
}) {
  return <h1>Detalhes sobre o personagem {params.characterId}</h1>;
}