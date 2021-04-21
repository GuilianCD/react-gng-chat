
import MainTemplate from "@templates/primary";

import styles from "@styles/About.module.css";

export default function About(){

    return (
        <MainTemplate>
            <div>
                <h3>
                    Icons powered by :
                </h3>

                <ul className={styles.aboutList}>
                    <li>
                        <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                    </li>
                    <li>
                    <a href="https://icons.theforgesmith.com">Forge icons (https://icons.theforgesmith.com)</a>
                    </li>
                </ul>
            </div>
        </MainTemplate>
    );
}