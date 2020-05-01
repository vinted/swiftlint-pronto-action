# Swiftlint pronto action

This action runs swiftlint via pronto on pull requests.

## Inputs

### `github-token`

**Required** Github API token.

## Example usage
```
on:
  pull_request:
    paths:
      - '.swiftlint.yml'
      - '**/*.swift'
jobs:
  build:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@v2
    - uses: vinted/swiftlint-pronto-action@v1
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
```
