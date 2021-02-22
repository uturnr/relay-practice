import styled from 'styled-components';

type LoadingTemplateProps = {
  readonly className?: string,
};

const LoadingTemplate = ({className}: LoadingTemplateProps) => {
  return (
    <div className={className}><div /><div /></div>
  );
};

type LoadingProps = {
  readonly color?: 'dark' | 'light',
};

const Loading = styled(LoadingTemplate)<LoadingProps>`
  display: block;
  position: relative;
  width: 8rem;
  height: 8rem;
  margin: auto;

  div {
    position: absolute;
    border: 0.4rem solid ${(props) => {
    return props.color === 'light' ? '#fff' : '#000';
  }};
    opacity: 0.8;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes ripple {
    0% {
      top: 3.6rem;
      left: 3.6rem;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 7.2rem;
      height: 7.2rem;
      opacity: 0;
    }
  }
`;

export default Loading;
