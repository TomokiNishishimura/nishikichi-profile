import { Heading } from "@aws-amplify/ui-react"
import { RequireAuth } from "components/requireAuth"
import awsExports from 'src/aws-exports';
import Amplify, { I18n } from 'aws-amplify';
Amplify.configure(awsExports);

const New = () => {
  return (
    <RequireAuth>
      <Heading>ブログを作成</Heading>
    </RequireAuth>
  )
}

export default New