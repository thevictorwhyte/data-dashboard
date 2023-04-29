import { Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant="contained" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }

  return (
    <>
      Please log in <br />
      <Button variant="contained" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;
