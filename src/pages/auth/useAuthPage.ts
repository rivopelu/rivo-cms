import { useGoogleLogin } from '@react-oauth/google';
import { HttpService } from '../../services/http.service';
import { ENDPOINT } from '../../constants/endpoint';
import { BaseResponse } from '../../models/response/BaseResponse';
import AuthServices from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from '../../routes/routes';

export default function useAuthPage() {
  const httpService = new HttpService();
  const authService = new AuthServices();

  const navigate = useNavigate()


  useEffect(() => {
    if( authService.authCheck !== undefined) {
        navigate(ROUTES.HOME())
    } 
  }, [])
  
  
  const onLoginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse.access_token);
      httpService.POST(ENDPOINT.SIGN_IN(), { email: 'rivopelu12@gmail.com', password: 'rivopelu123' }).then((res: BaseResponse<any>) => {
       authService.successLogin(res.data?.response_data?.token)
      });
    },
    flow: 'implicit',
  });
  return { onLoginGoogle };
}
