/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type App_IssuesQueryVariables = {
    name: string;
    owner: string;
};
export type App_IssuesQueryResponse = {
    readonly repository: {
        readonly " $fragmentRefs": FragmentRefs<"IssueList_repository">;
    } | null;
};
export type App_IssuesQuery = {
    readonly response: App_IssuesQueryResponse;
    readonly variables: App_IssuesQueryVariables;
};



/*
query App_IssuesQuery(
  $name: String!
  $owner: String!
) {
  repository(owner: $owner, name: $name) {
    ...IssueList_repository
    id
  }
}

fragment IssueList_repository on Repository {
  issues(last: 5) {
    nodes {
      ...Issues_issue
      id
    }
  }
}

fragment Issues_issue on Issue {
  id
  title
  author {
    __typename
    avatarUrl(size: 80)
    url
    ... on Node {
      __isNode: __typename
      id
    }
  }
  url
  state
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
    "name": "App_IssuesQuery",
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
            "name": "IssueList_repository"
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
    "name": "App_IssuesQuery",
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
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 5
              }
            ],
            "concreteType": "IssueConnection",
            "kind": "LinkedField",
            "name": "issues",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Issue",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
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
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "state",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "issues(last:5)"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "be14a6ab8736c77e46ebeca927bdd330",
    "id": null,
    "metadata": {},
    "name": "App_IssuesQuery",
    "operationKind": "query",
    "text": "query App_IssuesQuery(\n  $name: String!\n  $owner: String!\n) {\n  repository(owner: $owner, name: $name) {\n    ...IssueList_repository\n    id\n  }\n}\n\nfragment IssueList_repository on Repository {\n  issues(last: 5) {\n    nodes {\n      ...Issues_issue\n      id\n    }\n  }\n}\n\nfragment Issues_issue on Issue {\n  id\n  title\n  author {\n    __typename\n    avatarUrl(size: 80)\n    url\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  url\n  state\n}\n"
  }
};
})();
(node as any).hash = '11a704706185e2c6f04fa5c1e9b45363';
export default node;
