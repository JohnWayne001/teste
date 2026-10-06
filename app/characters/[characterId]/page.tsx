
export default async function CharacterDetail({searchParams}) {
  const {search, ordem} = await searchParams;
  return(
    <h1>Aluno {search} {ordem}</h1>
  )
}