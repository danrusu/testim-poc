# POC: testim.io

### Setup

1. Use your own tokens and user from [https://app.testim.io/#/project/${yourProjectId}/settings/cli](https://help.testim.io/docs/integrate-testim-to-your-ci).

```
export TESTIM_ACCOUNT_TOKEN=*****
export TESTIM_PROJECT_TOKEN=*****
export TESTIM_USER=*****
```

2. Install the [dependencies](./package.json)

```
npm install
```

3. [Run the tests](./run.sh)

```
npm test
```
