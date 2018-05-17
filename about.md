---
title: "About"
layout: page
wiki: https://github.com/chocolatey/chocolatey/wiki#information
redir_to: 'https://chocolatey.org/about'
---

* Wht is Chocolatey?
{: toc }

## What is Chocolatey?

Chocolatey is kind of like `apt-get`, but for Windows. It is a machine level package manager that is built on top of [NuGet](http://www.nuget.org/) command line and the NuGet infrastructure.

Chocolatey does the same thing that you would do based on the package instructions. This usually means going out and downloading an installer from the official distribution point and then silently installing it on your machine. That means that Chocolatey is not redistributing software because it's mostly likely going to the same distribution point that you yourself would go get the software if you were performing this process manually.

Chocolatey enables you to simply install software with a few keystrokes and go get coffee while your co-workers are downloading and running an installation manually.

How about updates? Wouldn't it be nice to update nearly everything on your machine with a few simple keystrokes? We think so, too. Chocolatey does that!

### What is the purpose of Chocolatey?

How many times do you hear about an awesome tool or application from your friends and want to try it out? How much effort do you go through to set a tool and all of it's requirements up on your machine? Do you realize that all of this manual effort is a pain? And it's a pain that we are used to. It's something we just do and don't realize we are wasting time doing all of this doing manual process. It's even worse when we install applications. *Next, Next, Next, Finish*.

There is a better way. Once you start to use Chocolatey to silently install applications, tools and to quickly set up things on your machine you will start to realize that it is more of a global automation tool. That makes it an enabler, enabling you to do just about anything. And you can repeat it anywhere in the world with no more than an internet connection.

Because Chocolatey is built on top of the NuGet infrastructure it means that you can install packages from Chocolatey.org, NuGet.org, MyGet.org, file shares, directories, custom feeds and private feeds. That means that you can set up your own server (even a private one) with your own internal packages (such as more company specific packages).

### What kind of packages does Chocolatey support?

- **Binary packages:** installable and portable applications. This is 98% of the Chocolatey packages – most are pointers to the real deal installers and zip files.
- **PowerShell command packages:** packages that have the suffix `*.powershell` will install PowerShell scripts as commands for you to call from anywhere.
- **Development packages:** packages that have the suffix `*.dev`, for instance [dropkick.dev](http://nuget.org/list/packages/dropkick.dev).
- **Virtual packages (coming soon!):** packages that are like a category, and you just want one package from that category ([read more...](https://github.com/ferventcoder/nugetpackages/issues/30)).

## How does Chocolatey work?

- When a package has an `exe` file, Chocolatey will create a "shortcut link" to the file so that you can run that tool anywhere on the machine.

- When a package has a `chocolateyInstall.ps1`, it will run the script. The instructions in the file can be anything. This is limited only by the .NET framework and PowerShell. Most of the Chocolatey packages that take advantage of the PowerShell download an application installer and execute it silently.

### Where are Chocolatey packages installed to?

Chocolatey packages are installed to various locations, depending on how the package owner created the package.

Some packages are installed under `ChocolateyInstall\lib` while others, especially packages that are based on Windows installers (`msi`), install to the default path of the original installer (which is most likely within `Program Files`).

There are also packages for which you can set a custom installation path. These packages (like `ruby`) use the `chocolatey_bin_root` environment variable. If this variable does not exist, the packages will be installed directly under the system root (`C:\ruby193`). To change this behaviour, you can set `chocolatey_bin_root` to an existing subfolder of your system partition (leaving out the drive letter), eg: `ChocoPackages`. Packages that use the environment variable, will then be installed in the given subfolder, for example `C:\ChocoPackages\ruby193`.

### Where does Chocolatey install packages from?

By default it installs packages from both [chocolatey.org](http://chocolatey.org) and [nuget.org](http://nuget.org), which enables you to install packages even if they don't exist on [chocolatey.org](http://chocolatey.org).
