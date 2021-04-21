
import MainTemplate from "@templates/primary";

import {HyperBananasIcon} from "@components/icons";

import styles from "@styles/404.module.css";

export default function Custom404() {
    return (
        <MainTemplate>
            <div className={styles.errorHolder}>
                <h1>404 - Page Not Found (For now ?)</h1>

                <h2>Our team of hyper-intelligent bananas might be working on it !</h2>
                <p>We're not really sure actually. They sure look and act like normal bananas.</p>
            </div>
            <HyperBananasIcon/>
        </MainTemplate>
    );
}