import { graphql, useFragment } from "react-relay/hooks";

function Project() {
  const data = useFragment(
    graphql`
      fragment Project_project on Project {
        name
        url
        thumbnailUrl
        comments {

        }
        likes {

        }
        author {
          name
          profilePhotoUrl
          userType
        }
      }
    `
  )
  
  return (
    <div>
    </div>
  );
}

export default Project
