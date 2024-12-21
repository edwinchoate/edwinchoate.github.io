# edwinchoate.github.io

## Installation

1. Ensure all jekyll dependencies are on the system:

```shell
$ ruby -v
$ gem -v
$ gcc -v
$ g++ -v
$ make -v
```

(For C compilers, [MSYS2](https://www.msys2.org/) is a good way to go on Windows.)

2. Clone site and install ruby gems

```shell
$ git clone https://github.com/edwinchoate/edwinchoate.github.io.git
$ cd edwinchoate.github.io
$ bundle update
```

## Server

Quickstart (on Windows)

```powershell
> .\run-server.bat
```

Run server

```shell
bundle exec jekyll serve
```

Run server with live reload

```shell
bundle exec jekyll serve --livereload
```

Run server as if `_draft` posts were regular posts

```shell
bundle exec jekyll serve --drafts
```

Build site 

```shell
bundle exec jekyll build
```

Clean build files 

```shell
bundle exec jekyll clean
```

## Theme

This site uses the [minima theme](https://github.com/jekyll/minima) (v2.5) by jekyll. 

[Minima v2.5 README](https://github.com/jekyll/minima/blob/v2.5.0/README.md)
