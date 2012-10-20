Dext
----
Text with depth, dimension, and dexterity. 
A small Javascript niche effect library to add frames to sentences.

Demo
----
http://brev.name

Why?
----
* Large text, easy to read.
* Say more with less space.
* Wraps nicely with resize.
* Works great on mobile.
* Extreme browser compatability.
* Mostly just Fun and Art, probably, though.

Example Source
--------------

### Pre-Reqs
* JQuery

### Easy way, auto-parse based on spacing characters
Simple text only.

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
    <span>is</span>
    <span>frame</span>
    <span>
      <a href="http://google.com">One</a>
    </span>
  </div>
  <div>
    <span>This</span>
    <span>is</span>
    <span>frame</span>
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

### How does it work?
* Just tag any node with the *.dext-sentence* class.
* Child nodes become the frames.
* Child node text gets either automatically split into registers based on spacing characters, or if Grandchild nodes are detected, those are use for splitting.

### Speed class names
* .dext-speed-ludicrous
* .dext-speed-fastest
* .dext-speed-fast
* .dext-speed-medium
* .dext-speed-slow
* .dext-speed-slowest

### Other special class names
* .dext-after = Show this sentence only after the others have started playing.

