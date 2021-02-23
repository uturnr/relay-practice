/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type IssueList_repository = {
    readonly issues: {
        readonly nodes: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Issues_issue">;
        } | null> | null;
    };
    readonly " $refType": "IssueList_repository";
};
export type IssueList_repository$data = IssueList_repository;
export type IssueList_repository$key = {
    readonly " $data"?: IssueList_repository$data;
    readonly " $fragmentRefs": FragmentRefs<"IssueList_repository">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueList_repository",
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
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Issues_issue"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "issues(last:5)"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
(node as any).hash = '8ee97c51c24accf043c712b124f680e3';
export default node;
