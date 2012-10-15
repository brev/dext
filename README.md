Dext
----

Text with Depth, Dimension, and Dexterity. 
A small Javascript effects library to add frames to text.

Demo
----
http://brev.name

Why?
----
* Larger text, easier to read.
* Say more with less space.
* Wraps nicely with resize.
* Works great for mobile.
* Very wide browser compatability.
* Fun and Art, mostly, probably.

Example Source
--------------

### Pre-Reqs
* JQuery

### Easy way, auto-parse based on spacing characters
Simple text only

```html
<link rel="stylesheet" type="text/css" href="dext.css" />
<ul class="dext-sentence dext-speed-fast">
  <li>This is frame One</li>
  <li>This is frame Two</li>
  <li>This is frame Three</li>
</ul>
<script src="jquery.js"></script>
<script src="dext.js"></script>
```

### Regular way, manually group based on child nodes
Use this mode for putting in links, multiple words per register, etc.

```html
<link rel="stylesheet" type="text/css" href="dext.css" />
<div class="dext-sentence dext-speed-slow">
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
<script src="jquery.js"></script>
<script src="dext.js"></script>
```

Code Help
---------

### Speed Class Names
* .dext-speed-ludicrous
* .dext-speed-fastest
* .dext-speed-fast
* .dext-speed-medium
* .dext-speed-slow
* .dext-speed-slowest

