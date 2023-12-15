import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  const contatos = itens
  const mensagem = `Sua lista tem ${contatos.length} contatos`

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.NomeCompleto}>
            <Tarefa
              id={t.id}
              email={t.email}
              NomeCompleto={t.NomeCompleto}
              telefone={t.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
