import './Fonts/index.scss'

import Layout from './Components/Layout/Layout'
import BasicInfo from './Components/BasicInfo/BasicInfo'
import Column from './Column/Column'

function App(): JSX.Element {
  return (
    <Layout>
      <BasicInfo />
      <Column />
    </Layout>
  )
}

export default App
