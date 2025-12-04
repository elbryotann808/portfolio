type lenguajes = "html" | "css" | "javascript" | "typescript" | "react" | "node" | "express" | "postgresql"

interface project {
  id: number
  image: string
  name: string
  description: string
  linkCode: string
  linkPage?: string
  languages: lenguajes[]
}