# generic.box-sizing

The `box-sizing` module causes all elements to use the more useful `border-box`
box model.

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/generic.box-sizing.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-box-sizing/ https://mikeschenkel@bitbucket.org/potato_head/generic.box-sizing.git master --squash
