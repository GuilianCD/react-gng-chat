
import Link from 'next/link'


import { Navbar, NavElement } from '@components/navbar';
import { AboutIcon, ChatBubbleIcon, SettingsIcon } from '@components/icons';

import styles from '@styles/Navbar.module.css'


export default function MainNavbar() {
    return (
        <Navbar>
            <NavElement>
                <Link href="/chat" passHref>
                    <a>
                        <ChatBubbleIcon />
                    </a>
                </Link>
            </NavElement>

            <NavElement>
                <Link href="/about" passHref>
                    <a>
                        <AboutIcon />
                    </a>
                </Link>
            </NavElement>


            <NavElement className={styles.lastIcon}>
                <Link href="/settings" passHref>
                    <a>
                        <SettingsIcon />
                    </a>
                </Link>
            </NavElement>
        </Navbar>
    );
}