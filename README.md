# Personal Web Page

Based on the [Hydeout](https://github.com/fongandrew/hydeout),
which updates the original [Hyde](https://github.com/poole/hyde)
theme for [Jekyll](http://jekyllrb.com) 3.x and 4.x and adds new functionality.

## Local Build

Jekyll installation instructions are [here](https://jekyllrb.com/docs/installation/ubuntu/).

After jekyll has been successfully installed, do:

    bundle exec jekyll serve

You might also need to run `bundle install` due to `jekyll-theme-hydeout` requirements (see [here](https://github.com/fongandrew/hydeout)).
Hydeout is available as the `jekyll-theme-hydeout` Ruby Gem.
Add `gem "jekyll-theme-hydeout", "~> 4.1"` to your Gemfile and run
`bundle install`.

2020: might need to do the following:

* remove `Gemfile.lock`;
* add `gem "kramdown-parser-gfm"` to `Gemfile`;
* run `bundle install`.

2022: might need to run `bundle add webrick` after `bundle install`

## Notes

The list of research profiles is unfortunately copied in 2 places:
homepage and papers.

Some links are also copied twice in `_data/link.yml`
because `mdlinks` is like a cache for often-used links.

**Merging with Hydeout.** Turn off rebase before pulling from the main fork.
