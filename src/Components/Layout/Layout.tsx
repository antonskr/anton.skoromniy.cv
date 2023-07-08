import { ReactNode } from "react";
import "../../Fonts/index.scss";
import "../../global.scss";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
import TsParticles from "../Ui/TsParticles/TsParticles";
import { IParticlesPositions } from "../Ui/TsParticles/TsParticles.props";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { width } = useWindowDimensions();
  const isParticles = width >= 1150;

  return (
    <div className={"container"}>
      {isParticles && (
        <>
          <TsParticles position={IParticlesPositions.LEFT} />
          <TsParticles position={IParticlesPositions.RIGTH} />
        </>
      )}
      {children}
    </div>
  );
};

export default Layout;
