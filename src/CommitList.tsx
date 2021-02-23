import graphql from 'babel-plugin-relay/macro';
import {
  Suspense,
} from 'react';
import {
  useFragment,
} from 'react-relay/hooks';

import type {
  CommitList_repository$key,
} from './__generated__/CommitList_repository.graphql';
import type {
  Commits_edges$key,
} from './__generated__/Commits_edges.graphql';
import Commits from './Commits';
import Loading from './Loading';

type Props = {
  repository: CommitList_repository$key,
};

const fragmentSpec = graphql`
  fragment CommitList_repository on Repository {
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 5) {
            edges {
              ...Commits_edges
            }
          }
        }
      }
    }
  }
`;

const CommitList = (props: Props) => {
  const respository = useFragment(
    fragmentSpec,
    props.repository,
  );

  const edges = respository.defaultBranchRef?.target.history?.edges as Commits_edges$key;

  return (
    <Suspense fallback={<Loading />}>
      <div className='CommitList'>
        {
          edges && <Commits edges={edges} />
        }
      </div>
    </Suspense>
  );
};

export default CommitList;
