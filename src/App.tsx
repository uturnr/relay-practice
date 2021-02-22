import './App.css';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import type {
  PreloadedQuery,
} from 'react-relay/hooks';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import type {
  OperationType,
} from 'relay-runtime';

import type {
  AppRepositoryNameQueryResponse,
} from './__generated__/AppRepositoryNameQuery.graphql';
import {
  repoQueryVariables,
} from './constants';
import Issues from './Issues';
import RelayEnvironment from './RelayEnvironment';

const Commits = React.lazy(() => {
  return import('./Commits');
});

const {Suspense} = React;

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery($name: String!, $owner: String!) {
    repository(owner: $owner, name: $name) {
      name
      url
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(
  RelayEnvironment,
  RepositoryNameQuery,
  repoQueryVariables,
);

type AppProps = {
  preloadedQuery: PreloadedQuery<OperationType, Record<string, unknown>>,
};

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React is isn't
//   ready to render yet). This will show the nearest <Suspense> fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
const AppInner = (props: AppProps) => {
  const data = usePreloadedQuery(
    RepositoryNameQuery,
    props.preloadedQuery,
  ) as AppRepositoryNameQueryResponse;

  // Need to determine how to properly type URI - it is coming back as
  // unknown.
  const repoUrl = data.repository?.url as string;

  return (
    <Router>
      <div className='App'>
        <header className='App__header'>
          <div className='App__header-content'>
            <a
              href={repoUrl}
              rel='noreferrer nofollow'
              target='_blank'
            >
              <h1 className='App__header-title'>{data.repository?.name ?? 'Repo not found'}</h1>
            </a>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/commits'>Commits</Link>
                </li>
                <li>
                  <Link to='/something'>Issues</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className='App__body'>
          <Suspense fallback={'Loading...'}>
            <Switch>
              <Route path='/commits'>
                <Commits />
              </Route>
              <Route path='/something'>
                <Issues />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <AppInner preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
