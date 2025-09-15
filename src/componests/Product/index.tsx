import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo odit dolor
      quaerat perferendis obcaecati reiciendis, vero earum ipsum? Veniam et
      itaque, earum unde totam at ipsam quam similique quaerat vero?
    </Descricao>
  </Card>
)

export default Product
