# generic.reset

the `reset` module is a considered approach to resetting elements. it selectively
removes margins and paddings from certain elements, and provides some sensible
defaults for some others.

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/generic.reset.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-reset/ https://mikeschenkel@bitbucket.org/potato_head/generic.reset.git master --squash
