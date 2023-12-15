import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Botao } from '../../styles'
import BotaoAdicionar from '../../components/BotaoAdicionar'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <BotaoAdicionar />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
