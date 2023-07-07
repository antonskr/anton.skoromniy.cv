import "./Fonts/index.scss";

import Layout from "./Components/Layout/Layout";
import BasicInfo from "./Components/BasicInfo/BasicInfo";
import Column from "./Components/Column/Column";

export function App(): JSX.Element {
  return (
    <Layout>
      <BasicInfo />
      <Column />
    </Layout>
  );
}
