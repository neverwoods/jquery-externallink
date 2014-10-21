jquery-externallink
===================

This 'shim' lets [rel='external'] behave like the deprecated [target='_blank']


## Installation

Just use `bower install --save jquery-externallink`

## Usage

You don't have to do anything. On domload jQuery externallink will check all currently available anchors.
When you want to apply juery-externallink on dynamically generated anchors, simply do `$('a').externalLink()` after generating the anchors.

### CHANGELOG

- 1.1     Introduced event namespace '.externallink'. Using this namespace, one can easily 
          unset all externallink-related events on an object using $('a').off('.externallink');
- 1.0     First release

### Copyright & Authors

This package is brought to you by [Neverwoods Internet Technology](http://www.neverwoods.com/)

- [Felix Langfeldt](http://github.com/flangfeldt)
- [Robin van Baalen](http://github.com/rvanbaalen)

