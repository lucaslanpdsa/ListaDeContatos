class Tarefa {
  NomeCompleto: string //titulo: string
  email: string //descricao
  telefone: number //prioridade
  id: number
  /*
  titulo: string
  prioridade: enums.Prioridade
  descricao: string
  status: enums.Status
  */

  constructor(
    NomeCompleto: string,
    email: string,
    telefone: number,
    id: number
  ) {
    this.NomeCompleto = NomeCompleto
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Tarefa
