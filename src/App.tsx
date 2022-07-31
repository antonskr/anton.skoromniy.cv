import React from 'react';
import './App.scss';


import Layout from './Layout/Layout';
import BasicInfo from "./Components/BasicInfo/BasicInfo";
import Summary from "./Components/Summary/Summary";

function App() {

  return (
    <Layout>
        <BasicInfo />
        <Summary />
    </Layout>
  );
}

export default App;
