import Particles from "react-tsparticles";
import styles from "./TsParticles.module.scss";
import { loadFull } from "tsparticles";
import { IParticles, IParticlesPositions } from "./TsParticles.props";
import cn from "classnames";

const TsParticles = ({ position }: IParticles) => {
  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div
      className={cn(styles.particlesWrapper, {
        [styles.particlesWrapper__position_left]:
          position === IParticlesPositions.LEFT,
        [styles.particlesWrapper__position_right]:
          position === IParticlesPositions.RIGTH,
      })}
    >
      <Particles
        id={`particles_${position}`}
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 1
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                speed: 3
              },
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: '#008cff'
            },
            links: {
              color: '#008cff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: 'circle'
            },
            size: {
              random: true,
              value: 5
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
};

export default TsParticles;
