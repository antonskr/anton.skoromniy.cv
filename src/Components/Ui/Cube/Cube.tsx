import styles from "./Cube.module.scss";
import cn from "classnames";
import React from "react";

const Cube = () => {
    return (
        <div className={styles.scene}>
            <div className={styles.cube}>
                <div className={cn(styles.cube__face, styles.cube__face_front)}>front</div>
                <div className={cn(styles.cube__face, styles.cube__face_back)}>back</div>
                <div className={cn(styles.cube__face, styles.cube__face_right)}>right</div>
                <div className={cn(styles.cube__face, styles.cube__face_left)}>left</div>
                <div className={cn(styles.cube__face, styles.cube__face_top)}>top</div>
                <div className={cn(styles.cube__face, styles.cube__face_bottom)}>bottom</div>
            </div>
        </div>
    )
}

export default Cube;
