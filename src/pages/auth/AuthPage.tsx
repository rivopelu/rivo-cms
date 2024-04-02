import { Button } from '@nextui-org/react';
import { ASSETS } from '../../constants/assets';
import useAuthPage from './useAuthPage';

export default function AuthPage() {
  const page = useAuthPage();
  function googleIcon() {
    return <img style={{ height: 20, width: 20 }} src={ASSETS.ICON.IC_GOOGLE} alt="google icon" />;
  }

  return (
    <div className="flex items-center justify-center h-full w-full min-h-screen">
      <div>
        <div className="text-center">
          <h1 className="font-semibold text-5xl">Hello Rivo Pelu</h1>
          <div className="text-2xl mt-3">Welcome to admin dashboard</div>
          <Button onPress={() => page.onLoginGoogle()} className="w-full mt-10" startContent={googleIcon()}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
