import { Authenticator } from "@aws-amplify/ui-react"
import Logo from "./logo"
import Nav from "./nav"

const Header = () => {
  return (
    <header>
      <Logo/>
      <Authenticator.Provider>
        <Nav/>
      </Authenticator.Provider>
    </header>
  )
}

export default Header
