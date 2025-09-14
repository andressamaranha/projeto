function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //html.classlist.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.body.classlist.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de mayk brito sorrindo, usando óculos, camisa preta e barba e fundo amarelo."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal

    img.setAttribute("src , ./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de mayk brito sorrindo, usando óculos escuros, camisa preta e barba e fundo azul claro e roxo."
    )
  }
}
