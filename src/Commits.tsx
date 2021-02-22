import graphql from 'babel-plugin-relay/macro';
import {
  Suspense,
} from 'react';
import {
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';

import type {
  CommitsRepositoryCommitsQueryResponse,
} from './__generated__/CommitsRepositoryCommitsQuery.graphql';
import {
  repoQueryVariables,
} from './constants';
import RelayEnvironment from './RelayEnvironment';

const RepositoryCommitsQuery = graphql`
  query CommitsRepositoryCommitsQuery($name: String!, $owner: String!) {
    repository(owner: $owner, name: $name) {
      name
      nameWithOwner
      url
      defaultBranchRef {
        target {
          ... on Commit {
            history(first: 5) {
              edges {
                node {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(
  RelayEnvironment,
  RepositoryCommitsQuery,
  repoQueryVariables,
);

// type CommitsProps = {
//   preloadedQuery: PreloadedQuery<OperationType, Record<string, unknown>>,
// };

// For testing code-splitting
// console.log('Commits.tsx');

const Commits = () => {
  const data = usePreloadedQuery(
    RepositoryCommitsQuery,
    preloadedQuery,
  ) as CommitsRepositoryCommitsQueryResponse;

  return (
    <Suspense fallback={'Loading...'}>
      <code className='Commits' style={{maxWidth: '80%'}}>
        {JSON.stringify(data)}
      </code>
    </Suspense>
  );
};

export default Commits;
