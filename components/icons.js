
import Bananas from '@public/banana.svg';

import styles from "@styles/icons.module.css"

export function ChatBubbleIcon(props) {
    const stroke = props.stroke || "currentColor";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="3" stroke={stroke} fill="none">
            <path d="M56.58,28.81c0,10.72-11,19.41-24.58,19.41A29.53,29.53,0,0,1,28.33,48c-2.08-.24-7.92,7.19-9.79,6.56-1.51-.51.9-9-.43-9.73-6.46-3.5-10.69-9.37-10.69-16,0-10.72,11-19.4,24.58-19.4S56.58,18.09,56.58,28.81Z" strokeLinecap="round" />
            <polyline points="23.38 28.55 23.38 28.55 23.88 28.55" strokeLinecap="round" />
            <polyline points="32 28.55 32 28.55 32.5 28.55" strokeLinecap="round" />
            <polyline points="40.36 28.55 40.36 28.55 40.86 28.55" strokeLinecap="round" />
        </svg>
    )
}

export function HyperBananasIcon(props) {

    const stroke = props.stroke || "currentColor";

    return (
        <Bananas className={styles.bananasvg}/>
    );
}

export function AboutIcon(props) {
    const stroke = props.stroke || "currentColor";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke={stroke} fill="none">
            <path strokeLinecap="round" d="M32.06 17.55v-.67M32.06 45.3V24.87"></path>
            <circle cx="32" cy="32" r="24.25" strokeLinecap="round"></circle>
        </svg>
    )
}

export function SettingsIcon(props) {
    const stroke = props.stroke || "currentColor";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke={stroke} fill="none">
            <path d="M45 14.67l-2.76 2a1 1 0 01-1 .11l-3.59-1.48a1 1 0 01-.61-.76l-.66-3.77a1 1 0 00-1-.84h-4.86a1 1 0 00-1 .77l-.93 3.72a1 1 0 01-.53.65l-3.3 1.66a1 1 0 01-1-.08l-3-2.13a1 1 0 00-1.31.12l-3.65 3.74a1 1 0 00-.13 1.26l1.87 2.88a1 1 0 01.1.89L16.34 27a1 1 0 01-.68.63l-3.85 1.06a1 1 0 00-.74 1v4.74a1 1 0 00.8 1l3.9.8a1 1 0 01.72.57l1.42 3.15a1 1 0 01-.05.92l-2.13 3.63a1 1 0 00.17 1.24L19.32 49a1 1 0 001.29.09L23.49 47a1 1 0 011-.1l3.74 1.67a1 1 0 01.59.75l.66 3.79a1 1 0 001 .84h4.89a1 1 0 001-.86l.58-4a1 1 0 01.58-.77l3.58-1.62a1 1 0 011 .09l3.14 2.12a1 1 0 001.3-.15l3.45-3.7a1 1 0 00.09-1.27l-2.08-3a1 1 0 01-.09-1l1.48-3.43a1 1 0 01.71-.59l3.66-.77a1 1 0 00.8-1v-4.58a1 1 0 00-.8-1l-3.72-.78a1 1 0 01-.73-.62l-1.45-3.65a1 1 0 01.11-.94l2.15-3.14A1 1 0 0050 18l-3.71-3.25a1 1 0 00-1.29-.08z"></path>
            <circle cx="32.82" cy="31.94" r="9.94"></circle>
        </svg>
    );
}



export default {
    ChatBubbleIcon,
    HyperBananasIcon,
    AboutIcon,
    SettingsIcon,
};