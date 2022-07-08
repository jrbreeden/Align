import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Layout from '../../components/Layout/Layout';

export default function SignUpPage({ user, setUser }) {
  return (
      <>
        <SignUpForm setUser={setUser} />
      </>
  );
}
