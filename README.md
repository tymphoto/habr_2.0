<h1>Habr 2.0</h1>
<h3>It is my pet project and my version of habr.com</h3>

*Made on Feature-Sliced Design (FSD) architectural methodology.*

Stack of technologies: React, TypeScript, Redux-toolkit, NodeJS, Webpack, Vite, SCSS, Eslint, Stylelint, Jest, Cypress, Storybook, i18n, husky pre-comit, loki.
<p>
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png" width="50px" height="50px" alt="react" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png" width="50px" height="50px" alt="TS" />
<img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" width="50px" height="50px" alt="Redux" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" width="80px" height="50px" alt="NodeJS" />
<img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" width="50px" height="50px" alt="Webpack" />
<img src="https://vitejs.dev/logo-with-shadow.png" width="50px" height="50px" alt="Vite" />
<img src="https://sass-lang.com/assets/img/styleguide/seal-color-reversed.png" width="50px" height="50px" alt="Sass" />
<img src="https://images.credly.com/images/e6eebd0c-6a17-4c06-b172-02ca9f6beb06/eslint.png" width="50px" height="50px" alt="Eslint" />
<img src="https://avatars.githubusercontent.com/u/10076935?s=280&v=4" width="50px" height="50px" alt="stylelint" />
<img src="https://user-images.githubusercontent.com/10525473/50372432-95dcd880-0611-11e9-9432-58de9be26b3b.png" width="50px" height="50px" alt="Jest"/>
<img src="https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg" width="50px" height="50px" alt="Cypress"/>
<img src="https://avatars.githubusercontent.com/u/22632046?s=280&v=4" width="50px" height="50px" alt="storybook" />

</p>

## Start the project
```
npm install - install dependencies
npm run start:dev:vite - start server + frontend in dev mode
```

----

## Scripts

- `npm run start` - Start frontend project on webpack dev server
- `npm run start:vite` - Start frontend project on vite
- `npm run start:dev` - Start frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Start frontend project on vite + backend
- `npm run start:dev:server` - Start backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Lint ts files
- `npm run lint:ts:fix` - Fix ts files by linter
- `npm run lint:scss` - Lint scss files by stylelint
- `npm run lint:scss:fix` - Fix scss files by stylelint
- `npm run test:unit` - Start unit tests by Jest
- `npm run test:ui` - Start screenshot tests with loki
- `npm run test:ui:ok` - Approve new screenshots
- `npm run test:ui:ci` - Start screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Start Storybook
- `npm run storybook:build` - Build storybook
- `npm run prepare` - precommit hooks

----

## Project architecture

Project made on metoology Feature sliced design

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Work with transalate

In projest using library i18next for translates.
Files with translates stored in public/locales.

For comfortable work use plugin for webstorm/vscode

Documentation i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

In project using 4 kind of tests:
1) Unit tests by jest - `npm run test:unit`
2) Component tests by React testing library -`npm run test:unit`
3) Screenshot test by loki `npm run test:ui`
4) e2e tests by Cypress `npm run test:e2e`

More about tests - [tests documentation](/docs/tests.md)

----

## Linting

In project using eslint for check typesctipt code an stylelint for check scss files

Also for strict control main architecture rules using eslint plugin *eslint-plugin-ulbi-tv-plugin*,
wichone has 3 rules
1) path-checker - prohibits the use of absolute imports within the same module
2) layer-imports - checks the correct use of FSD layers
   (for example widgets not allowed to use in features and entitites)
3) public-api-imports - allow import from another modules only from public api. Have auto fix

##### Start linting
- `npm run lint:ts` - Lint ts files
- `npm run lint:ts:fix` - Fix ts files by linter
- `npm run lint:scss` - Lint scss files by stylelint
- `npm run lint:scss:fix` - Fix scss files by stylelint

----

## Storybook

In project using storycases for every component.
Requests mocked by storybook-addon-mock.

Files with storycases created near component with extention  .stories.tsx

Storybook start with command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

For example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project configuration 

For developing project has 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both of them adapted for main features of app.

Configs stored in /config
- /config/babel - babel
- /config/build - webpack
- /config/jest - jest
- /config/storybook - storybook

In folder `scripts` are various scripts for refactoring\simplification of writing code\report generation, etc.

----

## CI pipeline and pre commit hooks

Configturation of github actions stored in /.github/workflows.
CI run all kind of tests, build project and storybook, lint.

Precommit hooks lintinig project, config stored in /.husky

----

### Work wuth data

Interaction with data is done using the redux toolkit.

Requests to server using by [RTK query](/src/shared/api/rtkApi.ts)

For async reducers using (so as not to insert them into a common bundle)
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Work wuth feature-flag

Allowed to use feature flags only with the help of the toggleFeatures helper.

An object with options is passed to it:

{
name: feature flag name,
on: function that will be executed after enabling the feature,
off: function that will be executed after disabling the feature
}

To automatically remove a feature, use the script remove-feature.ts, which accepts 2 arguments:

Name of the feature flag to be removed
State (on/off)

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
