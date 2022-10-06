import type { NextPage } from 'next'

function Button(props) {
  return (
    <a href="#">{props.title}</a>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <h1>TrinarWeb</h1>
      <Button title="Click"/>
      <br/>
      <Button title="Segundo Botão"/>
      <br/>
      <Button title="Terceiro Botão"/>
    </div>
  )
}

export default Home
