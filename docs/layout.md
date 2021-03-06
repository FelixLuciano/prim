# LAYOUT

[Header](/layout/layout.html ':include :type=iframe width=100% height=400px')


## USAGE

Construction of responsive layouts, which transform to screen size.


## HTML STRUCTURE

```html
<body>
  <div class='container'>        // Container
    <div class='row'>            // Row
      <div class='col'></div>    // Column
      <div class='col'></div>    // Column
      <div class='col'></div>    // Column
    </div>
  </div>
<body>
```


## CSS CLASSES

### CONTAINER

| Class | Description |
|:-|:-|
| `.container` | Required, for the layout element. |
| `.fill-height` | Optional, styles the container to fill the view height. |


### ROW

| Class | Description |
|:-|:-|
| `.row` | Required, for the layout row. |
| `.full-row` | Optional, styles the row to fill the view width. |


### COLUMN

| Class | Description |
|:-|:-|
| `.col` | Required, for column with its width defined by the content. |
| `.col-fill` | Required, for column with its width defined by available space. |
| `.col-<size>` | Required, for column with its width defined by `100% * size / 12`. |
| `.col-<breakpoint>-<size>` | Required, for column with its width defined by `100% * size / 12` after screen breakpoint size. |


## SASS VARIABLES

| Class | Description |
|:-|:-|
| `$max-layout-width` | Maximum size of rows inside containers. |
| `$layout-step` | Number of column divisions. |
