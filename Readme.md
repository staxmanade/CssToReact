

# What is it?

Allows you to paste plain CSS into a &lt;textarea&gt;, it will automatically transform that into something you can copy right into a React component inline style.

# See it in action: [CssToReact](http://staxmanade.com/CssToReact/)

# The story behind it...

So you're working on a React app. It's up and running in you're favorite browser but you notice an issue with some layout. You think, ok, this should be easy to fix. You open up the developer tools, hack on some CSS within the browser till you get it looking just the way you want it to. Maybe it's several CSS properties you added or tweaked so you copy each of them into the clipboard so you can transfer them back to your application.

Then you realize, these styles aren't coming from a CSS style sheet, they're in-line styles right in you're React component.

Now you're like, FINE, I'll manually translate this to React-style-inline-CSS. This is fine if you do it once, but maybe you missed removing a dash and mis-cased a letter or maybe you forgot a comma, or left a semicolon in the converted style translation… Never happened to you? Oh, you are so amazing if only I was as cool as you. For myself and probably another 1 or 2 of you out there I hacked together a little tool that automates this translation. Maybe this should be a plugin to my text editor where I can right click and say "Paste as React Style" instead, but for now it's a single simple little web page that will automate the translation for you.

So one night I was searching the React interwebs thinking someone __had__ to have build this tool already. Unfortunately I didn't find it anywhere but I DID find this handy little tool [raphamorim/native-css](https://github.com/raphamorim/native-css) which is a CLI version of what I wanted in the browser. So thanks to the quick bootstrap based on that tool, I was able to put this little project together in just a short evening...
