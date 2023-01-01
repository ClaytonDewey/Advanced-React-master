import styled from 'styled-components';
import RequestReset from '../components/RequestReseet';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const SignInPage = () => {
  console.log('Something');
  return (
    <GridStyles>
      <SignIn />
      <SignUp />
      <RequestReset />
    </GridStyles>
  );
};

export default SignInPage;
