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
        <div className={cn("blue", styles.description)}>
          <TextReveral text="Front-end Developer" delay={0.5} />
          <div className={styles.description__additionalText}>
            <TextReveral
              text="- and a cool guy"
              from="bottom"
              delay={1.8}
              afterDelay={0.5}
              desappearAfter={true}
            />
          </div>
        </div>
        <Contacts />
      </div>
      <MyPhoto />
    </div>
  );
};

export default BasicInfo;
