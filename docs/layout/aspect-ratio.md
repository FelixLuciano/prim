# ASPECT RATIO

[Header](/aspect-ratio.html ':include :type=iframe width=100% height=400px')


## USAGE

Leaves element height by width ratio.


## HTML STRUCTURE

```html
<div class="ratio">   // Ratio container
  <div></div>         // Content wapper
</div>
```


## CSS CLASSES

| Class | Description |
|:-|:-|
| `.ratio` | Required, to leaves the height of the element by the width relation using the variable `--ratio`. |
| `.ratio-<breakpoint>` | Required, to leaves the height of the element by the width relation using the variable `--ratio-<breakpoint>` after screen breakpoint size. |
| `.ratio-<name>` | Required, to leaves the height of the element by the width relation using predefined ratios. |


## RATIO NAMES

| Name | Class | Ratio |
|:-|:-|:-:|
| `square` | `.ratio-square` | 1/1 |
| `wide` | `.ratio-wide` | 16/9 |
