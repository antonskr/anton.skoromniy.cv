import React from 'react';
import './App.scss';

import Layout from './Layout/Layout';
import BasicInfo from "./Components/BasicInfo/BasicInfo";
import Column from "./Column/Column";

function App():JSX.Element {
  return (
    <Layout>
        <BasicInfo />
        <Column />
    </Layout>
  );
}

export default App;
