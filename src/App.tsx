import './App.scss';
import graphql from 'babel-plugin-relay/macro';
import {
  BrowserProtocol,
  queryMiddleware,
} from 'farce';
import type {
  RenderErrorArgs,
} from 'found';
import {
  createRender,
  Link,
  Route,
  createFarceRouter,
  makeRouteConfig,
} from 'found';
import {
  Resolver,
} from 'found-relay';
import React, {
  Suspense,
} from 'react';
import {
  loadQuery,
  RelayEnvironmentProvider,
  usePreloadedQuery,
} from 'react-relay/hooks';

import type {
  AppQueryResponse,
} from './__generated__/AppQuery.graphql';
import {
  repoQueryVariables,
} from './constants';
import HomeMessage from './HomeMessage';
import Loading from './Loading';
import RelayEnvironment from './RelayEnvironment';

const CommitList = React.lazy(() => {
  return import('./CommitList');
});
const IssueList = React.lazy(() => {
  return import('./IssueList');
});

type BaseLayoutProps = {
  children?: React.ReactChildren,
};

const AppQuery = graphql`
  query AppQuery($name: String!, $owner: String!) {
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
  AppQuery,
  repoQueryVariables,
);

const BaseLayout = (props: BaseLayoutProps) => {
  // eslint-disable-next-line no-console
  console.log(props);

  const data = usePreloadedQuery(
    AppQuery,
    preloadedQuery,
  ) as AppQueryResponse;

  // Need to determine how to properly type URI - it is coming back as
  // unknown.
  const repoUrl = data.repository?.url as string;

  return (
    <div className='App'>
      <header className='App__header'>
        <div className='App__header-content'>
          <div className='App__header-label'>Repository:</div>
          <a
            href={repoUrl}
            rel='noreferrer nofollow'
            target='_blank'
          >
            <h1 className='App__header-title'>{data.repository?.name ?? 'Repo not found'}</h1>
          </a>
          <nav className='App__nav'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/commits'>Commits</Link>
              </li>
              <li>
                <Link to='/issues'>Issues</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='App__body'>
        <div className='App__body-inner'>
          <Suspense fallback={<Loading />}>
            {props.children}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const Router = createFarceRouter({
  historyMiddlewares: [queryMiddleware],
  historyProtocol: new BrowserProtocol(),
  render: createRender({}),
  renderError: ({error}: RenderErrorArgs) => {
    return <div>{error.status === 404 ? 'Not found' : 'Error'}</div>;
  },
  routeConfig: makeRouteConfig(
    <Route
      Component={BaseLayout}
      path='/'
    >
      <Route Component={HomeMessage} />
      <Route
        Component={CommitList}
        path='/commits'
        prepareVariables={() => {
          return repoQueryVariables;
        }}
        query={graphql`
          query App_CommitsQuery($name: String!, $owner: String!) {
            repository(owner: $owner, name: $name) {
              ...CommitList_repository
            }
          }
        `}
      />
      <Route
        Component={IssueList}
        path='/issues'
        prepareVariables={() => {
          return repoQueryVariables;
        }}
        query={graphql`
          query App_IssuesQuery($name: String!, $owner: String!) {
            repository(owner: $owner, name: $name) {
              ...IssueList_repository
            }
          }
        `}
      />
    </Route>,
  ),
});

const App = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<Loading />}>
        <Router resolver={new Resolver(RelayEnvironment)} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
