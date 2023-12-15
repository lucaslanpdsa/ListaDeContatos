import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  email: emailOriginal,
  telefone: telefoneOriginal,
  NomeCompleto: NomeCompletoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [NomeCompleto, setNomeCompleto] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (NomeCompletoOriginal.length > 0) {
      setNomeCompleto(NomeCompletoOriginal)
    }
  }, [NomeCompletoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
    setNomeCompleto(NomeCompletoOriginal)
  }

  return (
    <S.Card>
      <S.CampoEditavel
        disabled={!estaEditando}
        onChange={(e) => setNomeCompleto(e.target.value)}
        value={NomeCompleto}
      ></S.CampoEditavel>
      <S.CampoEditavel
        disabled={!estaEditando}
        onChange={(e) => setTelefone(parseInt(e.target.value))}
        value={telefone}
      ></S.CampoEditavel>
      <S.CampoEditavel
        disabled={!estaEditando}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></S.CampoEditavel>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    telefone,
                    NomeCompleto,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
