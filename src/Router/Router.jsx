import React from 'react';
// import string from 'prop-types';
import { Route, Switch, Router } from 'react-router';
import { MainPage } from '../pages/MainPage/MainPage';
import { NewsPage } from '../pages/NewsPage/NewsPage';

const Routes = {
  mainPage: {
    path: '/',
    component: MainPage
  },
  news: {
    path: '/news',
    component: NewsPage
  },
}

export class AppRouter extends React.Component {

  renderComponent(Component, path) {
    return (props) => <Component {...props} />;
  }

  render() {
    const result = [];

    for (const key in Routes) {
      if (Routes.hasOwnProperty(key)) {
        // @ts-ignore
        const route = Routes[key];

        result.push(
          <Route
            key={key}
            exact
            path={route.path}
            render={this.renderComponent(route.component, route.path.toString(), this.props.userInfo)}
          />
        );
      }
    }

    return (
        <Switch>{result}</Switch>
    );
  }
}