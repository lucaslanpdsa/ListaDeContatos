import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { CampoEditavelInput, Form } from './styles'

import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [NomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(0)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        NomeCompleto,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={NomeCompleto}
          onChange={(evento) => setNomeCompleto(evento.target.value)}
          type="text"
          placeholder="NomeCompleto"
        />
        <CampoEditavelInput
          onChange={(e) => setTelefone(parseInt(e.target.value))}
          as="input"
          placeholder="Telefone"
          type="number"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="textarea"
          placeholder="E-mail"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
