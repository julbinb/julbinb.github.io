# Personal Web Page

Based on the [Hydeout](https://github.com/fongandrew/hydeout),
which updates the original [Hyde](https://github.com/poole/hyde)
theme for [Jekyll](http://jekyllrb.com) 3.x and adds new functionality.

## Local Build

Jekyll installation instructions are [here](https://jekyllrb.com/docs/installation/ubuntu/).

After jekyll has been successfully installed, do:

    bundle exec jekyll serve

You might also need to run `bundle install` due to `jekyll-theme-hydeout` requirements (see [here](https://github.com/fongandrew/hydeout)).

In 2020, might need to do the following:

* remove `Gemfile.lock`;
* add `gem "kramdown-parser-gfm"` to `Gemfile`;
* run `bunle install`.