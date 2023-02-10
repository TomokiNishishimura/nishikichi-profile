import { Text, Heading, useTheme, View } from '@aws-amplify/ui-react'
import styles from '../styles/AuthenticatorComponent.module.css'

const AuthenticatorComponent = {
  Header() {
    const { tokens } = useTheme()
    return <View padding={tokens.space.xxxl} />
  },
  Footer() {
    const { tokens } = useTheme()
    return (
      <View textAlign="center" padding={tokens.space.xxxl}>
        <Text color={`${tokens.colors.neutral['80']}`}>
          &copy; All Rights Reserved
        </Text>
      </View>
    )
  },
  SignIn: {
    Header() {
      return <Heading className={styles.loginHeader}>ログインヘッダー</Heading>
    },
  },
  ConfirmSignIn: {
    Header() {
      return <Heading>ログイン</Heading>
    },
  },
  ResetPassword: {
    Header() {
      return <Heading>パスワード再交付</Heading>
    },
  },
  ConfirmResetPassword: {
    Header() {
      return <Heading>パスワード再交付</Heading>
    },
  },
}

export default AuthenticatorComponent