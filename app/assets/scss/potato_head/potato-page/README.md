# base.page

The `page` module is a very high-level module which styles very basic, global,
page-level aspects such at the project’s base `font-size` and `line-height`.

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/base.page.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-page/ https://mikeschenkel@bitbucket.org/potato_head/base.page.git master --squash
