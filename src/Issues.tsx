import graphql from 'babel-plugin-relay/macro';
import {
  Suspense,
} from 'react';
import {
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';

import type {
  IssuesRepositoryIssuesQueryResponse,
} from './__generated__/IssuesRepositoryIssuesQuery.graphql';
import {
  repoQueryVariables,
} from './constants';
import RelayEnvironment from './RelayEnvironment';

const RepositoryIssuesQuery = graphql`
  query IssuesRepositoryIssuesQuery($name: String!, $owner: String!) {
    repository(owner: $owner, name: $name) {
      name,
      issues(last: 5) {
        nodes {
          title
          author {
            login
          }
          url
          state
        }
      }
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(
  RelayEnvironment,
  RepositoryIssuesQuery,
  repoQueryVariables,
);

// type IssuesProps = {
//   preloadedQuery: PreloadedQuery<OperationType, Record<string, unknown>>,
// };

// For testing code-splitting
// console.log('Issues.tsx');

const Issues = () => {
  const data = usePreloadedQuery(
    RepositoryIssuesQuery,
    preloadedQuery,
  ) as IssuesRepositoryIssuesQueryResponse;

  return (
    <Suspense fallback={'Loading...'}>
      <code className='Issues' style={{maxWidth: '80%'}}>
        {JSON.stringify(data)}
      </code>
    </Suspense>
  );
};

export default Issues;
