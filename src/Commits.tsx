import graphql from 'babel-plugin-relay/macro';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  useFragment,
} from 'react-relay/hooks';

import type {
  Commits_edges$key,
} from './__generated__/Commits_edges.graphql';

import './Commits.scss';

type Props = {
  edges: Commits_edges$key,
};

dayjs.extend(relativeTime);

const fragmentSpec = graphql`
  fragment Commits_edges on CommitEdge @relay(plural: true) {
    node {
      abbreviatedOid
      url
      message
      committedDate
      author {
        user {
          avatarUrl(size: 80)
          url
        }
      }
    }
  }
`;

const Commits = (props: Props) => {
  const edges = useFragment(fragmentSpec, props.edges);
  const nodes = edges ?
    Object.values(edges).map((edge) => {
      return edge.node;
    }) :
    [];

  return (
    <>
      {nodes.map((commit) => {
        if (commit === null) {
          return (
            <div className='Commits__commit'>
              Commit not found.
            </div>
          );
        }

        return (
          <div className='Commits__commit' key={commit.abbreviatedOid}>
            <a
              href={(commit.author?.user?.url ?? '') as string}
              rel='noreferrer nofollow'
              target='_blank'
            >
              <img
                className='Commits__author-image'
                src={(commit.author?.user?.avatarUrl ?? '') as string}
              />
            </a>
            <a
              className='Commits__id'
              href={commit.url as string}
              rel='noreferrer nofollow'
              target='_blank'
            >
              {commit.abbreviatedOid}
            </a>
            <div className='Commits__details'>
              <div className='Commits__details-message'>
                {commit.message}
              </div>
              <div className='Commits__details-date'>
                {dayjs(commit.committedDate as string).fromNow()}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Commits;
