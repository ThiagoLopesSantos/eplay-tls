import ProductsList from '../../components/ProductsList'
import { Game } from '../../pages/Home'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsportes, setGameEsportes] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameRpg, setGameRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res))
  }, [])

  return (
    <>
      <ProductsList games={gameAcao} title="Ação" background="black" />
      <ProductsList games={gameSimulacao} title="Simulção" background="gray" />
      <ProductsList games={gameEsportes} title="Esportes" background="black" />
      <ProductsList games={gameLuta} title="Luta" background="gray" />
      <ProductsList games={gameRpg} title="RPG" background="black" />
    </>
  )
}

export default Categories
