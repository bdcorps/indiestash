import { booklists } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = getBooklists(null)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Article with the ID of ${id} is not found` })
  }
}

export const getBooklists = (topic) => {
  const filtered = booklists[topic]
  return filtered
}