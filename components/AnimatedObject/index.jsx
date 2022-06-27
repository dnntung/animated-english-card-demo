import { SpinePlayer } from "@esotericsoftware/spine-player";
import React from "react";
import styles from "./styles.module.scss"

export const AnimatedObject = ({jsonUrl, atlasUrl, animation}) => {
    const objRef = React.useRef();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);

        let player
        new SpinePlayer("spine-player-container", {
            jsonUrl,
            atlasUrl,
            alpha: true,
            animation,
            backgroundColor: '#00000000',
            viewport: {
                debugRender: false,
                x: 0,
                y: 0,
            },
            
            showControls: false ,
            showLoading: false,
            success: (spinePlayer) => {
                setLoading(false);

                console.log(spinePlayer)

                player = spinePlayer;
                player?.play();
            },
        });

        return () => {
            player?.dispose();
        };
    }, []);

    return <div className={styles["animated-object"]}>
        <div
            id="spine-player-container"
            className={styles['spine-player-container']}
            ref={objRef}
        >
            {/* {loading && (
                <div>
                    Loading...
                </div>
            )} */}
        </div>
    </div>
}