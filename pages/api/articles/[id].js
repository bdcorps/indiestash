import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = getSongs(null)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Article with the ID of ${id} is not found` })
  }
}

export const getSongs = (topic) => {
  // if (!filter) { return filtered[0] }
  console.log("looking up", topic)
  const filtered = articles[topic]
  // console.log("has to eb ", filtered)
  // if (filtered.length === 0) {
  //   return articles[0]
  // }
  return filtered
}