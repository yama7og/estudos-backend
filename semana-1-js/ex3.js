function buscarUsuario(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: 'Yamashyta' })
    }, 1000)
  })
}

async function main() {
    const usuario = await buscarUsuario(1)
    console.log(`Usuário encontrado: ${usuario.nome}`)

}

main()