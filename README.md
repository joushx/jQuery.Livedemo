#jQuery.Livedemo

Lightweight jQuery-plugin for providing interactive javascript demos. (~1 kb)

##Usage##

###Include Plugin###
Insert the following code into the `head`-section of you page:

```html
<script type="text/javascript" src="jQuery.EAN13.min.js"></script>
```

Make sure to include this AFTER the jQuery-library.

###Run plugin###
Run the plugin on the input (`textarea` element). Set the output element with the `output` option.

```javascript
$("#input").livedemo({
	output: $("#output")
});
```

##Author##
Johannes Mittendorfer (http://jmittendorfer.hostingsociety.com)