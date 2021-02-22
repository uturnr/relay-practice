import graphql from 'babel-plugin-relay/macro';
import {
  Suspense,
} from 'react';
import {
  useFragment,
} from 'react-relay/hooks';

import type {
  Commits_repository$key,
} from './__generated__/Commits_repository.graphql';
import Loading from './Loading';

type Props = {
  repository: Commits_repository$key,
};

const Commits = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment Commits_repository on Repository {
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
    `,
    props.repository,
  );

  return (
    <Suspense fallback={<Loading />}>
      <code className='Commits' style={{maxWidth: '80%'}}>
        {JSON.stringify(data, null, 2)}
      </code>
    </Suspense>
  );
};

export default Commits;
