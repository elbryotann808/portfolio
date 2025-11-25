type lenguajes = "html" | "css" | "javascript" | "typescript" | "react" | "node" | "express"

interface project {
  id: number
  image: string
  name: string
  description: string
  languages: lenguajes[]
}