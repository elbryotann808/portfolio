export const proyects: project[] = [
    {
      id: 1, 
      image: "/portfolio/public/images/auth_api.png", 
      name: "Proyect Auth API",  description: "Api de registro y loggin de usuario, usando token para la validacion de los usuarios y almacenamiento resistente con PostgreSQL", 
      languages: ["node" , "express", "typescript", "javascript", "postgresql"],
      linkCode: "https://github.com/elbryotann808/proyect_Auth_API",
    },
    {
      id: 2, 
      image: "/portfolio/public/images/granding_system.png", 
      name: "Proyect Granding system",  description: "Aplicación web desarrollada con React para la calificación de productos. Incluye un sistema de usuarios predefinidos y almacenamiento local de las valoraciones (localStorage), lo que permite alternar entre distintos perfiles para dejar, editar o borrar puntuaciones. La interfaz es interactiva y pensada para probar flujos de usuario y visualizar resúmenes de puntuación por producto.", 
      languages: ["react", "javascript", "typescript", "html", "css" ], 
      linkCode: "https://github.com/elbryotann808/grading_systems"
    },
    {
      id: 3, 
      image: "/portfolio/public/images/srv_users_products.png", 
      name: "Project Server users & products",  description: "API REST construida con Node.js diseñada para proporcionar datos falsos de usuarios y productos. Incluye endpoints básicos para listar y obtener. Es ideal para pruebas, prototipos y consumo desde aplicaciones frontend.", 
      languages: ["node", "typescript", "javascript", "express", "postgresql"],
      linkCode: "https://github.com/elbryotann808/srv-users-products.git"
    },
]

