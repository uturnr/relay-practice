import graphql from 'babel-plugin-relay/macro';
import {
  useFragment,
} from 'react-relay/hooks';

import type {
  Issues_issue$key,
} from './__generated__/Issues_issue.graphql';
import './Issues.scss';

type Props = {
  issues: Issues_issue$key,
};

const fragmentSpec = graphql`
  fragment Issues_issue on Issue @relay(plural: true) {
    id
    title
    author {
      avatarUrl(size: 80)
      url
    }
    url
    state
  }
`;

const Issues = (props: Props) => {
  const issues = useFragment(fragmentSpec, props.issues);

  return (
    <>
      {issues.map((issue) => {
        if (issue === null) {
          return (
            <div className='Issues__commit'>
              Issue not found.
            </div>
          );
        }

        return (
          <div className='Issues__commit' key={issue.id}>
            <a
              href={(issue.author?.url ?? '') as string}
              rel='noreferrer nofollow'
              target='_blank'
            >
              <img
                className='Issues__author-image'
                src={(issue.author?.avatarUrl ?? '') as string}
              />
            </a>
            <div className='Issues__details'>
              <a
                className='Issues__details-title'
                href={issue.url as string}
                rel='noreferrer nofollow'
                target='_blank'
              >
                {issue.title}
              </a>
              <div className='Issues__details-state'>
                {issue.state}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Issues;
