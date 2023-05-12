---
to: "<%= addGraphqlFragment ? `${absPath}/${fullComponentName}Fragment.graphql` : null %>"
---
fragment <%= fullComponentName %>Fragment on <%= fullComponentName %> {
  __typename
  id
}