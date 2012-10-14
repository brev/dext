
/**
 * Class for a Dext multi-frame sentence
 * @class DextSentence 
 */
var DextSentence = function(opts) {
  this.id = opts.id;
  this.node = opts.node;
  this.frames = opts.frames;
  
  this.speed = 3000;
  if($(this.node).hasClass('dext-speed-ludicrous')) this.speed = 94;
  if($(this.node).hasClass('dext-speed-fastest'))   this.speed = 188;
  if($(this.node).hasClass('dext-speed-fast'))      this.speed = 375;
  if($(this.node).hasClass('dext-speed-medium'))    this.speed = 750;
  if($(this.node).hasClass('dext-speed-slow'))      this.speed = 1500;
  if($(this.node).hasClass('dext-speed-slowest'))   this.speed = 3000;

  this.maxWidths = [];
  this.counter = 0; 
  this.interval = null;
  
  // calc max column widths 
  for(i=0; i<this.frames.length; i++) {
    for(j=0; j<this.frames[i].widths.length; j++) {
      if(
        (! this.maxWidths[j]) || 
        (this.maxWidths[j] < this.frames[i].widths[j])
      ) {
        this.maxWidths[j] = this.frames[i].widths[j];
      }
    }
  }
};

/**
 * Draw original frames
 */
DextSentence.prototype.drawSeed = function() {
  if(this.frames.length <= 0) return;
  for(i=0; i<this.frames[0].words.length; i++) {
    var newEl = $('<span />');
    newEl.attr('id', 'dext-sentence' + this.id + '-word' + i);
    newEl.html(this.frames[0].words[i]);
    $(this.node).append(newEl);
    newEl.width(this.maxWidths[i] + 'px');
  }
};

/**
 * Loop through one step of animation between frames
 */
DextSentence.prototype.step = function() {
  // loop+step through frames in current sentence
  this.counter++;
  if(this.counter >= this.frames.length) this.counter = 0;
 
  // do frame change for current sentence
  for(x=0; x<=this.frames[this.counter].words.length; x++) {
    var onode = $('#dext-sentence' + this.id + '-word' + x);
    if(
      this.frames[this.counter].words[x] && 
      this.frames[this.counter].words[x] !== onode.html()
    ) {
      var nnode = onode.clone(true);
      nnode.addClass('dext-off dext-change');
      nnode.css('border-color', '#000');
      nnode.html(this.frames[this.counter].words[x]);
      if(this.speed >= 375) {
        nnode.fadeIn(function() {
          $(this).css('border-color', '#999');
        });
      }
      else {
        nnode.show(); 
        nnode.css('border-color', '#999');
      }
      onode.before(nnode);
      onode.remove();

      // update progress meters  
      var sel = $(this.node).children('.dext-info'); 
      $(sel).html((this.counter+1) + ' / ' + this.frames.length);
    } 
  } 
};

/**
 * Begin looping through frames
 */
DextSentence.prototype.start = function() {
  var that = this;
  this.interval = setInterval(function() { that.step() }, that.speed);
}

/**
 * Pause looping through frames
 */
DextSentence.prototype.stop = function() {
  clearInterval(this.interval);
}

/**
 * Init a Dext multi-frame sentence
 */
DextSentence.prototype.init = function() {
  this.drawSeed();
  this.start();
};





/**
 * Class for a single frame of a multi-frame sentence
 * @class DextFrame
 */
var DextFrame = function(opts) {
  this.text = opts.text || null;
  if(this.text) this.words = this.text.split(/\s+/);
  else this.words = opts.words;
  this.widths = [];
  
  // calc word widths 
  for(i=0; i<this.words.length; i++) {
    var newEl = $('<span />');
    newEl.addClass('dext-sentence dext-hide');
    newEl.html(this.words[i]);
    $(document.body).append(newEl);
    this.widths[i] = newEl.width();
    newEl.remove();
  }
};





/**
 * Class for Runtime Dext code
 * @class Dext
 */
var Dext = function() {
  this.nodes = $(".dext-sentence");
};

/**
 * Hide source markup _then_ show the container
 */
Dext.prototype.clearSource = function() {
  this.nodes.children().hide();
  this.nodes.show();
};

/**
 * Convert markup into fully functional Dext Frames and Sentences
 */
Dext.prototype.processMarkup = function() {
  this.nodes.each(function(idx, ea) {
    var sentence = [];
    $(ea).children().each(function(idx2, ea2) {
      var words = [];
      var node = $(ea2);
      if(node.children().length > 0) {
        // "<span>this</span> <span>form</span>" 
        node.children().each(function(idx3, ea3) {
          words.push($(ea3).html());
        });
      }
      else {
        // "this form"
        words = node.html().split(/\s+/);
      }
      sentence.push(words);
    });
    
    var frames = [];
    for(j in sentence) {
      frames.push(new DextFrame({ words: sentence[j] }));
    }
    (new DextSentence({ id: idx, node: this, frames: frames })).init();
  });
};

/**
 * Show progress meters in front of each sentence
 */
Dext.prototype.addMeters = function() {
  var infonode = $(document.createElement('div'));
  infonode.addClass('dext-info');
  infonode.html('1 / 1');
  this.nodes.prepend(infonode);
};

/**
 * Init Dext runtime
 */
Dext.prototype.init = function() {
  this.clearSource();
  this.processMarkup();
  this.addMeters();
};





(new Dext()).init();

