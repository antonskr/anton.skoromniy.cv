import styles from "./Basickinfo.module.scss";
import Contacts from "../Contacts/Contacts";
import MyPhoto from "../Ui/MyPhoto/MyPhoto";
import cn from "classnames";
import TextReveral from "../Ui/TextReveral/TextReveral";

const BasicInfo = (): JSX.Element => {
  return (
    <div className={cn(styles.basicInfo)}>
      <div className={styles.basic}>
        <h1 className={styles.fullName}>
          <TextReveral text="Anton skoromniy" />
        </h1>
        <p className={cn("blue", styles.description)}>
        <TextReveral text="Front-end Developer" delay={0.5} />
        </p>
        <Contacts />
      </div>
      <MyPhoto />
    </div>
  );
};

export default BasicInfo;
