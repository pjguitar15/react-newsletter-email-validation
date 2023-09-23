export const fetchData = async (word: string) => {
  const data = await fetch(`https://api.api-ninjas.com/v1/thesaurus?word=${word}`)
  const res = await data.json()
  return res
}
