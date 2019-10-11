# test-staticgiftbag

This is a test site based on [David Efhan](https://freezerbox.dev/) ([@frzrbox](https://github.com/frzrbox))'s [Static Gift Bag](https://github.com/frzrbox/staticGiftBag) starter base.

- My Test Demo:
- David's repo: https://github.com/frzrbox/staticGiftBag
- David's demo: https://trusting-kowalevski-cdbce7.netlify.com

## Get Started

Install dependencies

```js
npm install
```

Run development

```js
npm run dev
```

## Make use of helper classes to speed up dev time

### All helper classes will be in the src/partials/helpers.scss file but here are some important ones

#### auto-grid

```css
.auto-grid
```

Attach this class to the parent element and all the children will have an equally distributed grid

#### center-block

```css
.center-block
```

Attach this to the parent if there is only one child, it will center the child element (if there are more use `center-content`)

#### center-content

```css
.center-content
```

Attach this to the parent if there are multiple children elements

#### full-img

```css
.full-img
```

Attach this to an imaage and it will take up the entire parent element (similar to `background-size: cover`, but you can keep your alt tags!)

## Use the Event-Group

#### You can bind events to elements using data attributes only in html

1. Add the class `use-event` to the element you want to use the `Event-Group` on

2. Add these data-attribute to the element you want to add and event listener to

- `data-event='event'` : add the event you want to listent for (i.e click, `mouseover`);
- `data-event-element='element'` : add the class of the element you want event to effect
- `data-event-add='class'` : add the class you would like to add the the data element (i.e. `nav-active`)

3. Use css to toggle between the initial class and the new class added from the `Event-Group`

```css
.example {
  opacity: 0;
}

.example-active {
  opacity: 1;
}
```

### example

```html
<button
  data-event="click"
  data-event-element="show-me"
  data-event-add="show-me-active"
  class="use-event"
>
  click here
</button>

<div class="show-me center-block">
  <h2>I'm active</h2>
</div>
```

```css
.show-me {
  height: 50vh;
  margin: 0 auto;
  opacity: 0;
  padding: 40px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.show-me-active {
  opacity: 1;
}
```

## Parallax PG

Create parallax events with multiple elements using parallax pg

### Add the class `pg-mouse` to the parent

```html
<div class="pg-mouse">
  <div>hi</div>
  <div>yo</div>
</div>
```

### Add the data-attribute `data-pg-speed` and assign it a value from 0 - 1

```html
<div class="pg-mouse">
  <div data-pg-speed="0.5">hi</div>
  <div data-pg-speed="0.8">yo</div>
</div>
```

- passing in `0` will cause the element to not move while `1` will move it the fastest
- you can adjust the speed by increasing or decreasing the value of the `data-pg-speed`

## Other Libraries Used

- Lax.js - https://github.com/alexfoxy/laxxx
- Swup - https://swup.js.org/

## Deployment

Netlify is the only way to go!!!!!

- https://www.netlify.com/
- set the entry point to dist/index.html
