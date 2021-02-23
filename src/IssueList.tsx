import graphql from 'babel-plugin-relay/macro';
import {
  Suspense,
} from 'react';
import {
  useFragment,
} from 'react-relay/hooks';

import type {
  IssueList_repository$key,
} from './__generated__/IssueList_repository.graphql';
import type {
  Issues_issue$key,
} from './__generated__/Issues_issue.graphql';
import Issues from './Issues';
import Loading from './Loading';

type Props = {
  repository: IssueList_repository$key,
};

const fragmentSpec = graphql`
  fragment IssueList_repository on Repository {
    issues(last: 5) {
      nodes {
        ...Issues_issue
      }
    }
  }
`;

const IssueList = (props: Props) => {
  const respository = useFragment(
    fragmentSpec,
    props.repository,
  );

  const issues = respository.issues.nodes as Issues_issue$key;

  return (
    <Suspense fallback={<Loading />}>
      <div className='IssueList'>
        {
          issues && <Issues issues={issues} />
        }
      </div>
    </Suspense>
  );
};

export default IssueList;
