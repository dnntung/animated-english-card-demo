import { AnimatedObject } from "../AnimatedObject"
import styles from "./styles.module.scss"

export const AnimatedEnglishCard = ({word, bgUrl, pronounce, translation1, translation2, animatedData}) => {
    return <div className={styles["card"]} style={{backgroundImage: `url(${bgUrl})`}}>
        <div className={styles["header"]}>
            <div className={styles["word"]}>{word}</div>
            <div className={styles["pronounce"]}>
                <span className={styles["pronounce-text"]}>
                    {pronounce}
                </span>
                <span className={styles["pronounce-icon"]}>
                    <img src="/icons/speaker.png" alt=""/>
                </span>
            </div>
        </div>
        <div className={styles["body"]}>
            <div className={styles["animated-object-wrapper"]}>
                <AnimatedObject {...animatedData}/>
            </div>
            <div className={styles["translation"]}>
                <span>{translation1}</span>
                <span>-</span>
                <span>{translation2}</span>
            </div>
        </div>
    </div>
}