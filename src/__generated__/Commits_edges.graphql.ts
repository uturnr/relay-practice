/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Commits_edges = ReadonlyArray<{
    readonly node: {
        readonly abbreviatedOid: string;
        readonly url: unknown;
        readonly message: string;
        readonly committedDate: unknown;
        readonly author: {
            readonly user: {
                readonly avatarUrl: unknown;
                readonly url: unknown;
            } | null;
        } | null;
    } | null;
    readonly " $refType": "Commits_edges";
}>;
export type Commits_edges$data = Commits_edges;
export type Commits_edges$key = ReadonlyArray<{
    readonly " $data"?: Commits_edges$data;
    readonly " $fragmentRefs": FragmentRefs<"Commits_edges">;
}>;



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Commits_edges",
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
        (v0/*: any*/),
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
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CommitEdge",
  "abstractKey": null
};
})();
(node as any).hash = 'e97c4e07d6096da889dbe7f98a08fc55';
export default node;
