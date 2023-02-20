import { Heading } from "@aws-amplify/ui-react"
import { RequireAuth } from "components/requireAuth"
import awsExports from 'src/aws-exports';
import Amplify, { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql'
import { createPost } from 'src/graphql/mutations';
import { CreatePostMutation } from 'src/API';
Amplify.configure(awsExports);

const handleCreatePost = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);

  try {
    const result = await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: createPost,
      variables: {
        input: {
          title: form.get("title"),
          content: form.get("content"),
        },
      },
    });
    if ("data" in result && result.data){
      const data = result.data as CreatePostMutation
      window.location.href = `/blogs/${data.createPost!.id}`;

    }
  } catch ({ errors }) {
    console.error(errors);
    throw errors;
  }
}

const New = () => {
  return (
    <RequireAuth>
      <>
        <Heading>ブログを作成</Heading>
        <form onSubmit={handleCreatePost}>
          <fieldset>
            <legend>タイトル</legend>
            <input
              defaultValue={`Today, ${new Date().toLocaleTimeString()}`}
              name="title"
            />
          </fieldset>
          <fieldset>
            <legend>メッセージ</legend>
            <textarea
              defaultValue="Amplify + Next.js + Typescriptでアプリつくってみた!"
              name="content"
            />
          </fieldset>

          <button>投稿する</button>
        </form>
      </>
    </RequireAuth>
  )
}

export default New