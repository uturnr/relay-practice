/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommitList_repository = {
    readonly defaultBranchRef: {
        readonly target: {
            readonly history?: {
                readonly edges: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"Commits_edges">;
                } | null> | null;
            };
        };
    } | null;
    readonly " $refType": "CommitList_repository";
};
export type CommitList_repository$data = CommitList_repository;
export type CommitList_repository$key = {
    readonly " $data"?: CommitList_repository$data;
    readonly " $fragmentRefs": FragmentRefs<"CommitList_repository">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommitList_repository",
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
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "Commits_edges"
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
(node as any).hash = '91e6796b1c0204f1c9aac71a9bdf88fb';
export default node;
