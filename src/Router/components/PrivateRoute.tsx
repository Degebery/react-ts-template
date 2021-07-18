import { observer } from 'mobx-react-lite';
import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import { Auth } from '../../store';

export interface IPrivateRouteProps {
  path: string;
  hasAccess?: boolean;
  redirectTo?: string;
  noAuth?: boolean;
  children?: JSX.Element | JSX.Element[];
  exact?: boolean;
}

export default observer((props: IPrivateRouteProps) => {
  const { path, redirectTo, hasAccess, noAuth, children, exact = true } = props;

  const { user } = Auth;

  const isRedirect = (!user && !noAuth) || (!hasAccess && !noAuth);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isRedirect ? (
          <Redirect
            to={{
              pathname: redirectTo || '/login',
            }}
          />
        ) : (
          children
        )
      )}
    />
  );
});
