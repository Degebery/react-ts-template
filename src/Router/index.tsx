import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Redirect } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import { Auth } from '../store';
import PrivateRoute from './components/PrivateRoute';

export default observer(() => {
  const { getProfile, user, isLoading } = Auth;

  useEffect(() => {
    getProfile();
  }, []);

  return (
    isLoading ? <Box maxW="xl">Загрузка</Box>
      : (
        <BrowserRouter>
          <PrivateRoute path="/login" exact noAuth>
            <LoginPage />
          </PrivateRoute>
          <PrivateRoute exact path="/" redirectTo="/login" hasAccess>
            <AppLayout>
              <MainPage />
            </AppLayout>
          </PrivateRoute>
          <Redirect exact path="*" to={user ? '/' : '/login'} />
        </BrowserRouter>
      )
  );
});
