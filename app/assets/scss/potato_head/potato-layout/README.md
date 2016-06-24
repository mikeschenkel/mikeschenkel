# objects.layout

The `layout` system is a powerful, flexible, highly advanced evolution of the
traditional grid system. It is based on
[csswizardry-grids](http://csswizardry.com/csswizardry-grids/).

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/objects.layout.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-layout/ https://mikeschenkel@bitbucket.org/potato_head/objects.layout.git master --squash
