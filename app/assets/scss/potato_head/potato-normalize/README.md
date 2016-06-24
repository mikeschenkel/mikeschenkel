# normalize.css v3.0.3

The `normalize.css` module is an exact clone of normalize.css at version v3.0.3.
normalize.css makes browsers render all elements more consistently and in
line with modern standards. It is developed and maintained by [Nicolas
Gallagher](https://twitter.com/necolas).

* Project homepage: [necolas.github.io/normalize.css](http://necolas.github.io/normalize.css/)
* GitHub repo: [github.com/necolas/normalize.css](https://github.com/necolas/normalize.css/)

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/generic.normalize.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-normalize/ https://mikeschenkel@bitbucket.org/potato_head/generic.normalize.git master --squash
