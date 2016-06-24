# generic.shared

The `shared` module contains several high-level rulesets which apply a
consistent, shared declaration (typically `margin`s) across a number of
elements.

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/generic.shared.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-shared/ https://mikeschenkel@bitbucket.org/potato_head/generic.shared.git master --squash
