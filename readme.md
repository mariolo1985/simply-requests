# Simply Paging

A simple module that handles requests.

A work-in-progress Javascript module.

Built by: [Mario Lo](https://github.com/mariolo1985)

## Install

```
yarn add simply-requests
```

## Functions

### httpRequest

```javascript
import { xmlHttpRequest } from 'simply-requests';

const myCallback = (response) => {
    console.log('response: ', response);
};

(() => {
    xmlHttpRequest('/data/menu.json', myCallback);
})();

```

#### Parameters

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| filePath | string | true | null | relative path to your file |
| callBackFn | function | true | null | function to call and return request in callback parameter |

**filePath**

`type: string`

The path to your file

**callBackFn**

`type: function`

Function to call when a response happens

#### Return value

| Response State | Value |
| --- | --- |
| Done | Response |
| Error | undefined |
| Completed but not done | null |


### xmlHttpRequestOnSuccess

```javascript
import {xmlHttpRequestOnSuccess} from 'simply-requests';

const myCallback = (response) => {
    console.log('response: ', response);
};

(() => {
    xmlHttpRequestOnSuccess('/data/menu.json', myCallback);
})();

```

#### Parameters

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| filePath | string | true | null | relative path to your file |
| callBackFn | function | true | null | function to call and return request in callback parameter |

**filePath**

`type: string`

The path to your file

**callBackFn**

`type: function`

Function to call when a response happens

#### Return value

This only returns a response on success

| Response State | Value |
| --- | --- |
| Done | Response |

## Future Features

- [ ] Have future features

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.

[Bug List](https://github.com/mariolo1985/simply-requests/issues)
