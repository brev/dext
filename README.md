Dext
====

Text with Depth, Dimension, and Dexterity. 
A small JS effects library.

Demo
----
http://brev.name

Example Source
--------------

### Easy way, auto-parse based on spacing characters
Simple text only

```js
<link rel="stylesheet" type="text/css" href="dext.css" />
<ul class="dext-sentence">
  <li>This is frame One</li>
  <li>This is frame Two</li>
  <li>This is frame Three</li>
</ul>
<script src="dext.js"></script>
```

### Regular way, manually group based on child nodes
Use this mode for putting in links, multiple words per register, etc.

```js
<link rel="stylesheet" type="text/css" href="dext.css" />
<div class="dext-sentence">
  <div>
    <span>This</span>
    <span>is<span>
    <span>frame<span>
    <span>
      <a href="http://google.com">One</a>
    </span>
  </div>
  <div>
    <span>This</span>
    <span>is<span>
    <span>frame<span>
    <span>
      <a href="http://yahoo.com">Two</a>
    </span>
  </div>
</div>
<script src="dext.js"></script>
```

Why?
----
* Larger text, easier to read.
* Say more with less space.
* Wraps nicely with resize.
* Works great for mobile.
* Very wide browser compatability.
* Fun and Art, mostly, probably.

