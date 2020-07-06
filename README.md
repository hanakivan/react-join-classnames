# react-join-classnames

Adds multiple classes to the className attribute.

## Install

Using npm:

```sh
npm install @ivanhanak_com/react-join-classnames
```

or using yarn:

```sh
yarn add @ivanhanak_com/react-join-classnames
```


## Usage with react-css-modules

**Include global class names:**
```jsx harmony
<p className={classes("global-classname", reactCssModulesStyle.paragraph, shouldIBeTruthful && "then-include-this", andIfThisIsFalse && "will-not-be-included")}>
    Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
</p>
```