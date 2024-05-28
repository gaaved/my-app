import { Navigate } from 'react-router-dom';

interface SecureProps {
  page: React.JSX.Element;
}

const Router = ({ page }: SecureProps) => {
  const isAuthJSON = localStorage.getItem('isAuth');
  let isAuth = false;

  if (isAuthJSON) {
    isAuth = JSON.parse(isAuthJSON);
  }

return isAuth ? page : <Navigate to="/login" replace />;
};

export default Router