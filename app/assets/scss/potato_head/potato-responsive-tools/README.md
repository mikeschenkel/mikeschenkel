# tools.responsive

Currently, this module just uses [Sass MQ](https://github.com/sass-mq/sass-mq)

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/tools.responsive.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-responsive-tools/ https://mikeschenkel@bitbucket.org/potato_head/tools.responsive.git master --squash
