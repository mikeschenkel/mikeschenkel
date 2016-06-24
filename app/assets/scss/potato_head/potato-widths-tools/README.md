# tools.widths

Potato Head's widths tooling allows you to generate a suite of utility classes
for sizing pieces of UI responsively, e.g.:

    @include potato-widths(12);

…will generate a series of classes in the format `.u-7/12` to be used for
sizing.

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/tools.widths.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-widths-tools/ https://mikeschenkel@bitbucket.org/potato_head/tools.widths.git master --squash
