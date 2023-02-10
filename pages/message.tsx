import { Heading } from "@aws-amplify/ui-react"
import { RequireAuth } from "components/requireAuth"

const Message = () => {
  return (
    <RequireAuth>
      <Heading>メッセージを表示</Heading>
    </RequireAuth>
  )
}

export default Message