# settings.defaults

The `defaults` module contains a few variables and settings that are
**required** for using any of the rest of the framework.

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/settings.defaults.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-defaults/ https://mikeschenkel@bitbucket.org/potato_head/settings.defaults.git master --squash
