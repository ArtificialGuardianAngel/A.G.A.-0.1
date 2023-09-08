import Link from "next/link";
import { Button } from "../../components";
import styles from "./WelcomeBlock.module.scss";

const WelcomeBlock = () => {
    return (
        <div className={styles.wrapper}>
            {/* <video className={styles.video} autoPlay muted>
        <source src={video} type='video/mp4' />
      </video> */}
            <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/qnv_tOxIsMM?autoplay=1&controls=0&rel=0&showinfo=0"
            ></iframe>
            {/* <h1 className={styles.title}>NUAH A.G.A.</h1> */}
            <div className={styles.buttons}>
                <Link href="/">
                    <Button type="link">A.G.A. Chat</Button>
                </Link>
                <Link href="/give-and-earn">
                    <Button type="link">Give & Earn</Button>
                </Link>
            </div>
        </div>
    );
};

export default WelcomeBlock;
