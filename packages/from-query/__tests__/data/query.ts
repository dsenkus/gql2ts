/**
 * Here's an example of a few different types of fragments.
 * original source: https://github.com/BinaryMuse/gql2ts-bug
 */
export default `
  query MyTestQuery {
    resource(url: "https://github.com/atom/atom") {
      __typename
      ... on Repository {
        id name owner { login }
      }

      ...PullRequest

      ... on Issue {
        ... Issue
      }
      ... on Organization {
        __typename
        ... Organization
      }
    }
  }

  fragment Issue on Issue {
    id title author { login }
  }

  fragment Organization on Organization {
    orgName:name
  }

  fragment PullRequest on Resource {
    ... on PullRequest {
      id title author { login }
    }
  }
`;
