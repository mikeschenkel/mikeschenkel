# tools.functions

The functions module—like mixins—contains a few framework functions that are
required for using any of the rest of Potato Head.

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/tools.functions.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-functions/ https://mikeschenkel@bitbucket.org/potato_head/tools.functions.git master --squash
