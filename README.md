# jquery.textWrapper.js

TextWrapper is a jQuery plugin that allows to automatically wrap a 
textarea content to a specific column width. 

This allows to write properly wrapped email from a webinterface.


## Usage

You can initialize TextWrapper against your textarea like this :

    $('textarea').textWrapper();

A few options are available :

    colWidth:         72,
    autoWrap:         true,
    codeLineTest:     null

`colWidth` sets the column width for your textarea. `autoWrap` sets the 
initial state for automatic wrapping. `codeLineTest` allows you to set 
a custom function to tell if a line is a code line and shouldn't be 
automatically wrapped (default is to not wrap line if it begins with 
four spaces).

So, if you want 50 characters width column instead :

    $('textarea').textWrapper({ colWidth: 50 });


## Automatic wrapping

When automatic wrapping is on (the default), a line break will 
automatically be inserted if you type a character at the end of the 
line past the `colWidth` threshold. If this would break a word, the 
whole word is displaced to next line.

Note this will not happen if you're not at the end of line, to avoid 
disturbance to the writer while she edits a line.

Automatic wrapping can be toggled on and off using `C-m` (for : control
mute).


## Manual wrapping

Manual wrapping can be triggered for the current paragraph using `C-l` 
(for : control line). A paragraph is a group of lines separated from 
other paragraphs with blank lines.

The automatic wrapping state has not effect on manual wrapping.


## Quotes

If you quote your paragraph using "> ", wrapping (either manual or
automatic) will add the same character at the beginning of any new
line.


## Events

Three events are fired on the original textarea element :

* `wrap` : fired when text is automatically wrapped
* `manualWrap` : fired when user trigger manual wrap
* `toggleAutoWrap` : fired when user change autowrap state

Only the last one receive a specific parameter, which is the current 
state of automatic wrapping.

You are encouraged to build your interface so that user is aware if 
he's currently in autowrap mode or not.


## Disabling wrapping

There are four ways to avoid wrapping :

* disabling it using `C-m`
* pasting content (use `C-l` if you want to wrap it)
* editing in the middle of a line
* prefixing line with four spaces (or anything that makes custom `codeLineTest` function to return true)


## Browser support

Tested on :

* chrome-27.0.1453.110
* firefox-17.0.7
* ie-9 (known not to work on ie-8)


## Demo

You can [see demo here](http://oelmekki.github.io/jquery.textWrapper.js/).
