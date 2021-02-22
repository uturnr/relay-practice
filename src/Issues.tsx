import graphql from 'babel-plugin-relay/macro';
import {
  Suspense,
} from 'react';
import {
  useFragment,
} from 'react-relay/hooks';

import type {
  Issues_repository$key,
} from './__generated__/Issues_repository.graphql';
import Loading from './Loading';

type Props = {
  repository: Issues_repository$key,
};

const Issues = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment Issues_repository on Repository {
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
    `,
    props.repository,
  );

  return (
    <Suspense fallback={<Loading />}>
      <code className='Issues' style={{maxWidth: '80%'}}>
        {JSON.stringify(data, null, 2)}
      </code>
    </Suspense>
  );
};

export default Issues;
