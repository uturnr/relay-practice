/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type App_CommitsQueryVariables = {
    name: string;
    owner: string;
};
export type App_CommitsQueryResponse = {
    readonly repository: {
        readonly " $fragmentRefs": FragmentRefs<"CommitList_repository">;
    } | null;
};
export type App_CommitsQuery = {
    readonly response: App_CommitsQueryResponse;
    readonly variables: App_CommitsQueryVariables;
};



/*
query App_CommitsQuery(
  $name: String!
  $owner: String!
) {
  repository(owner: $owner, name: $name) {
    ...CommitList_repository
    id
  }
}

fragment CommitList_repository on Repository {
  defaultBranchRef {
    target {
      __typename
      ... on Commit {
        history(first: 5) {
          edges {
            ...Commits_edges
          }
        }
      }
      id
    }
    id
  }
}

fragment Commits_edges on CommitEdge {
  node {
    abbreviatedOid
    url
    message
    committedDate
    author {
      user {
        avatarUrl(size: 80)
        url
        id
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "App_CommitsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommitList_repository"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "App_CommitsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Ref",
            "kind": "LinkedField",
            "name": "defaultBranchRef",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 5
                          }
                        ],
                        "concreteType": "CommitHistoryConnection",
                        "kind": "LinkedField",
                        "name": "history",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommitEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Commit",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "abbreviatedOid",
                                    "storageKey": null
                                  },
                                  (v3/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "message",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "committedDate",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "GitActor",
                                    "kind": "LinkedField",
                                    "name": "author",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "User",
                                        "kind": "LinkedField",
                                        "name": "user",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": [
                                              {
                                                "kind": "Literal",
                                                "name": "size",
                                                "value": 80
                                              }
                                            ],
                                            "kind": "ScalarField",
                                            "name": "avatarUrl",
                                            "storageKey": "avatarUrl(size:80)"
                                          },
                                          (v3/*: any*/),
                                          (v2/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "history(first:5)"
                      }
                    ],
                    "type": "Commit",
                    "abstractKey": null
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "88bed22b392cc0bdba6ed08c918d981f",
    "id": null,
    "metadata": {},
    "name": "App_CommitsQuery",
    "operationKind": "query",
    "text": "query App_CommitsQuery(\n  $name: String!\n  $owner: String!\n) {\n  repository(owner: $owner, name: $name) {\n    ...CommitList_repository\n    id\n  }\n}\n\nfragment CommitList_repository on Repository {\n  defaultBranchRef {\n    target {\n      __typename\n      ... on Commit {\n        history(first: 5) {\n          edges {\n            ...Commits_edges\n          }\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment Commits_edges on CommitEdge {\n  node {\n    abbreviatedOid\n    url\n    message\n    committedDate\n    author {\n      user {\n        avatarUrl(size: 80)\n        url\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '5bd812224c041e1054565c624aee8a06';
export default node;
