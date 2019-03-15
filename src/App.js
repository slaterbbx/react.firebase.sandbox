import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// Global theme / Variables
import { ThemeProvider } from 'styled-components/macro';
import { defaultTheme } from './assets/styles/base/_global-theme';
// Global styling
import GlobalBaseStyle from './assets/styles/base/_global-baseStyle';
import GlobalUtilities from './assets/styles/utilities/_global-utilities';
// App containers
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import User from './containers/User/User';
import Tos from './components/Pages/TermsOfService/TermsOfService';

// Lazy Loading Error Page
// as of time trying this, SSR not in yet, Allow for use with
// toggled components for lazy loading, very usefull
const ErrorPage = React.lazy(() => import('./components/Pages/404/404'))

class App extends Component {

    render() {

		return (
		<ThemeProvider theme={defaultTheme}>
		<>
		<GlobalBaseStyle />
		<GlobalUtilities />
				<Layout>
					<Switch>
						<Route path="/" exact component={BurgerBuilder}/>
						<Route path="/user" exact component={User}/>
						<Route path="/user/tos" exact component={Tos}/>
						<Route render={() => <Suspense fallback={<div>Loading...</div>}><ErrorPage /></Suspense>} />
					</Switch>
				</Layout>
		</>
		</ThemeProvider>
		);
  }
}

export default App;

// found out about update blocking, happens with redux and react-router on the same level
// https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
