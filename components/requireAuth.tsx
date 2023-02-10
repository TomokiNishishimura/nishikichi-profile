import { useAuthenticator } from '@aws-amplify/ui-react';
import Link from 'next/link';

interface Props {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
  const { route } = useAuthenticator((context) => [context.route]);
  console.log(route)
  if (route !== 'authenticated') {
    return (
      <>
        <p>ログインしないと使えません</p>
        <Link href={"/"} >戻る</Link>
      </>
    );
  }
  return children;
}