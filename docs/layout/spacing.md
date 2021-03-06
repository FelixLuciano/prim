# SPACING

[Header](/spacing.html ':include :type=iframe width=100% height=400px')


## USAGE

Separate things with a set of `margins` and `paddings`.


## HTML STRUCTURE

```html
<div class="m-3"></div>         // Margin 12pt

<div class="p-2"></div>         // Padding 6pt

<div class="mt-4"></div>        // Margin top 24pt

<div class="px-sm-3"></div>     // Padding left and right 12pt at small size

```


## CSS CLASSES

### MARGIN

| Class | Description |
|:-|:-|
| `.m-<value>` | Apply `padding` equal the value of the chosen preset. |
| `.m<side>-<value>` | Apply `padding` of the specified side equal the value of the chosen preset. |
| `.m-<breakpoint>-<value>` | Apply `padding` equal the value of the chosen preset after screen breakpoint size. |
| `.m<side>-<breakpoint>-<value>` | Apply `padding` of the specified side equal the value of the chosen preset after screen breakpoint size. |


### PADDING

| Class | Description |
|:-|:-|
| `.p-<value>` | Apply `padding` equal the value of the chosen preset |
| `.p<side>-<value>` | Apply `padding` of the specified side equal the value of the chosen preset |
| `.p-<breakpoint>-<value>` | Apply `padding` equal the value of the chosen preset after screen breakpoint size |
| `.p<side>-<breakpoint>-<value>` | Apply `padding` of the specified side equal the value of the chosen preset after screen breakpoint size |


## SIDES

| Name | Side                        |
|:----:|:----------------------------|
| `t`  | Top                         |
| `b`  | Bottom                      |
| `l`  | Left                        |
| `r`  | Right                       |
| `x`  | Horizontal (left and right) |
| `y`  | Vertical (top and bottom)   |


## SIZES

| Name | Values                          | Size |
|:----:|:--------------------------------|:----:|
| `0`  | `0`                             | 0    |
| `1`  | `calc(var(--spacing-base) / 4)` | 3pt  |
| `2`  | `calc(var(--spacing-base) / 2)` | 6pt  |
| `3`  | `var(--spacing-base)`           | 12pt |
| `4`  | `calc(var(--spacing-base) * 2)` | 24pt |
| `5`  | `calc(var(--spacing-base) * 4)` | 48pt |


### VARIABLES

| Name         | SASS            | CSS                   |
|:-------------|:----------------|:----------------------|
| Spacing base | `$spacing-base` | `var(--spacing-base)` |
| Spacing 0    | `$spacing-0`    | `var(--spacing-0)`    |
| Spacing 1    | `$spacing-1`    | `var(--spacing-1)`    |
| Spacing 2    | `$spacing-2`    | `var(--spacing-2)`    |
| Spacing 3    | `$spacing-3`    | `var(--spacing-3)`    |
| Spacing 4    | `$spacing-4`    | `var(--spacing-4)`    |
| Spacing 5    | `$spacing-5`    | `var(--spacing-5)`    |
