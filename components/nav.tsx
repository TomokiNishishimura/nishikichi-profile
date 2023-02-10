import { useAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link"
import styles from "styles/Nav.module.css"
import Logout from "./logout";

const Nav = () => {
  const { route } = useAuthenticator((context) => [context.route]);

  return(
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/message"}>メッセージ</Link>
        </li>
        <li>
          <Link href={"/blogs/new"}>ブログ投稿</Link>
        </li>
        {route == "authenticated" ? <Logout/>  : ''}
      </ul>
    </nav>
  )
}

export default Nav