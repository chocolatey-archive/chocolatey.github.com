---
title: "Usage"
layout: page
wiki: https://github.com/chocolatey/chocolatey/wiki#using-chocolatey
---

- Installing Chocolatey
{: toc }

## Installing Chocolatey

For more alternatives on how to install Chocolatey, please refer to the [official wiki](https://github.com/chocolatey/chocolatey/wiki/Installation).
{: .print--secondary }

This really is the easiest method because it requires no configuration of the PowerShell prior to executing it. Open the command prompt, paste the following and press `Enter`:

    @powershell -NoProfile -ExecutionPolicy Unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
{: .bash }

## Using Chocolatey

### Installing packages

Install a package or a list of packages in a `packages.config`, even if it or they already exists.

**Full command:**

    chocolatey install packageName [-prerelease] [-source ...] [-version ...] [-installArguments ...] [-overrideArguments ...] [-notSilent]
{: .bash }

**Shorthand command:**

    cinst packageName
{: .bash }

**Via a `packages.config` file:**

    cinst packages.config

#### The `packages.config` file

`packages.config` is an alternative to using "packageName". This is a list of packages in an XML manifest for Chocolatey to install.

    <?xml version="1.0" encoding="utf-8"?>
      <packages>
        <package id="aPackage" />
        <package id="anotherPackage" version="1.1" />
        <package id="chocolateyTestPackage" version="0.1" source="someLocation" />
      </packages>
    </xml>
{: .xml }

### Install missing packages

Install a package if it doesn't already exist.

**Full command:**

    chocolatey installmissing packageName [-source ...] [-version ...]
{: .bash }

**Shorthand command:**

    cinstm packageName
{: .bash }

### Uninstalling packages

Uninstall a package.

**Full command:**

    chocolatey uninstall packageName [-version ...]
{: .bash }

**Shorthand command:**

    cuninst PackageName
{: .bash }

#### Known limitations

- There are no functions defined in the Chocolatey PowerShell module that would help with uninstall.
- There is no automatic removal of `msi` files.
- It only removes the most current version of a package in the machine repository.
- It requires a `chocolateyUninstall.ps1` in the package itself, of which many of the currently available packages don't have.

### Updating packages

Update an existing package to the latest version, if there is a newer version available.

**Full command:**

    chocolatey update packageName [-source ...] [-prerelease]
{: .bash }

**Shorthand command:**

    cup packageName
{: .bash }

**Update all packages to the latest version:**

    cup all
{: .bash }

### Listing packages

List packages available from a remote source.

**Full command:**

    chocolatey list packageName [-allversions] [-source ...] [-prerelease]
{: .bash }

**Shorthand command:**

    clist packageName
{: .bash }

### Listing versions

Compare an installed package to the version available from a remote feed.

**Full command:**

    chocolatey version packageName [-source ...] [-prerelease] [-localonly]
{: .bash }

**Shorthand command:**

    cver packageName
{: .bash }

**Compare all packages to the latest version:**

    cver all
{: .bash }

### Getting help

Print out the help text.

    chocolatey /?
{: .bash }
