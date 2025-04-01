ethbox
=================

Ethereum CLI toolkit


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ethbox.svg)](https://npmjs.org/package/ethbox)
[![Downloads/week](https://img.shields.io/npm/dw/ethbox.svg)](https://npmjs.org/package/ethbox)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ethbox
$ ethbox COMMAND
running command...
$ ethbox (--version)
ethbox/0.0.0 linux-x64 node-v20.19.0
$ ethbox --help [COMMAND]
USAGE
  $ ethbox COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ethbox hello PERSON`](#ethbox-hello-person)
* [`ethbox hello world`](#ethbox-hello-world)
* [`ethbox help [COMMAND]`](#ethbox-help-command)
* [`ethbox plugins`](#ethbox-plugins)
* [`ethbox plugins add PLUGIN`](#ethbox-plugins-add-plugin)
* [`ethbox plugins:inspect PLUGIN...`](#ethbox-pluginsinspect-plugin)
* [`ethbox plugins install PLUGIN`](#ethbox-plugins-install-plugin)
* [`ethbox plugins link PATH`](#ethbox-plugins-link-path)
* [`ethbox plugins remove [PLUGIN]`](#ethbox-plugins-remove-plugin)
* [`ethbox plugins reset`](#ethbox-plugins-reset)
* [`ethbox plugins uninstall [PLUGIN]`](#ethbox-plugins-uninstall-plugin)
* [`ethbox plugins unlink [PLUGIN]`](#ethbox-plugins-unlink-plugin)
* [`ethbox plugins update`](#ethbox-plugins-update)

## `ethbox hello PERSON`

Say hello

```
USAGE
  $ ethbox hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ ethbox hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/malawarecreator/ethbox/blob/v0.0.0/src/commands/hello/index.ts)_

## `ethbox hello world`

Say hello world

```
USAGE
  $ ethbox hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ ethbox hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/malawarecreator/ethbox/blob/v0.0.0/src/commands/hello/world.ts)_

## `ethbox help [COMMAND]`

Display help for ethbox.

```
USAGE
  $ ethbox help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ethbox.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.27/src/commands/help.ts)_

## `ethbox plugins`

List installed plugins.

```
USAGE
  $ ethbox plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ethbox plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/index.ts)_

## `ethbox plugins add PLUGIN`

Installs a plugin into ethbox.

```
USAGE
  $ ethbox plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ethbox.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ETHBOX_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ETHBOX_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ethbox plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ethbox plugins add myplugin

  Install a plugin from a github url.

    $ ethbox plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ethbox plugins add someuser/someplugin
```

## `ethbox plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ethbox plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ethbox plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/inspect.ts)_

## `ethbox plugins install PLUGIN`

Installs a plugin into ethbox.

```
USAGE
  $ ethbox plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ethbox.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ETHBOX_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ETHBOX_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ethbox plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ethbox plugins install myplugin

  Install a plugin from a github url.

    $ ethbox plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ethbox plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/install.ts)_

## `ethbox plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ ethbox plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ethbox plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/link.ts)_

## `ethbox plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ethbox plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ethbox plugins unlink
  $ ethbox plugins remove

EXAMPLES
  $ ethbox plugins remove myplugin
```

## `ethbox plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ ethbox plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/reset.ts)_

## `ethbox plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ethbox plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ethbox plugins unlink
  $ ethbox plugins remove

EXAMPLES
  $ ethbox plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/uninstall.ts)_

## `ethbox plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ethbox plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ethbox plugins unlink
  $ ethbox plugins remove

EXAMPLES
  $ ethbox plugins unlink myplugin
```

## `ethbox plugins update`

Update installed plugins.

```
USAGE
  $ ethbox plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/update.ts)_
<!-- commandsstop -->
