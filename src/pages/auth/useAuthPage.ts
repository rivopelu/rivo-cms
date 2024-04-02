import { useGoogleLogin } from "@react-oauth/google"

export default function useAuthPage() {
    const onLoginGoogle = useGoogleLogin({
    onSuccess: (codeResponse ) => {
      console.log(codeResponse.access_token)
    },
    flow: 'implicit',
  })
  return{onLoginGoogle}
}
