# trumps.widths-responsive

The `widths-responsive` module is an extension of the default [`widths`
module](https://mikeschenkel@bitbucket.org/potato_head/trumps.widths.git).

`widths-responsive` loops through the breakpoints defined in
`settings.responsive` to generate prefixed breakpoint-based classes. If you are
using Potato Head's default breakpoints, you will be given classes like
`u-1/4@lap-and-up`, or `u-1-of-2@desk`, etc.

Install using a Git submodule:

    $ cd your/project/sass-folder/potato_head/
    $ git submodule add https://mikeschenkel@bitbucket.org/potato_head/trumps.widths-responsive.git

Or using a Git subtree: (Make sure the `--prefix` path to the `potato_head`
directory is correct for your project)

    $ cd your/project/root
    $ git subtree add --prefix app/assets/scss/potato_head/potato-widths-responsive/ https://mikeschenkel@bitbucket.org/potato_head/trumps.widths-responsive.git master --squash
