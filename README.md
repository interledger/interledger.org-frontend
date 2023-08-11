# Interledger Frontend Next.js

## Setup

- `yarn`
- Add `.env.local`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode and watches for any changes to .graphql files which will automatically update the types.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production

### `yarn start`

Runs the production build

### `yarn codegen`

You will need the drupal cms running with graphql as this will create all the type and hooks required for using graphql

## Code Generator

### `yarn new component`

Generates a functional component. For code organisation this can be output to components, layouts or a custom directory. You can also select a graphql fragment to be generated for the component, which will result in a matching fragment type being added to the props

### `yarn new page`

Generates a Next JS page

### `yarn new hook`

Generates a custom hook function

### `yarn new model`

Generates a typescript interface

### `yarn new store`

Generates a new redux store with minimal boilerplate

## Import Paths

For convenience aliases have been added to all the main features

```
import { ComponentName } from '@components';
import { HookName } from '@hooks';
import { ModelName } from '@models';
import { ActionName, SelectorName } from '@store/store-name';
```

## SASS

For convenience variables, mq, and helpers are automatically imported to all sass files.

If needed styles can be imported using

```
@import '@styles/styleName';
```

## Debugging

Debug your Next.js application using the regular Chrome DevTools, all you have to do now is open a new tab in Chrome with the url being: chrome://inspect.
