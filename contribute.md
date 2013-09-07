---
title: "Contribute"
layout: page
wiki: https://github.com/chocolatey/chocolatey/wiki#packages
---

- Creating Chocolatey packages
{: toc }

## Creating Chocolatey packages

There are three main elements to a Chocolatey package:

- The `.nuspec` file.
- The `chocolateyInstall.ps1` file.
- Any application files to include.

The `.nuspec` file is the only element that's required for a package.

### The `.nuspec` file

For more information about the `.nuspec` file, please refer to the [Nuspec reference](http://docs.nuget.org/docs/reference/nuspec-reference).
{: .print--secondary }

The `.nuspec` file is a manifest that uses XML to describe a package. The manifest is used to build a package and is also stored in the package after the package is built.

In the `.nuspec` file, the top-level package element contains a metadata element that describes the package and its dependencies. Optionally, the package element can include a files element that specifies files to be included in the package. If the files element is omitted, all files and folders that are in the same folder as the `.nuspec` file are included in the package.

**The `.nuspec` file might look like this:**

    <?xml version="1.0"?>
    <package xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <metadata>
        <id>yourPackage</id>
        <title>Your Package</title>
        <version>1.0</version>
        <authors>John Doe</authors>
        <owners>Your name</owners>
        <summary>A short summary.</summary>
        <description>A longer description of the package.</description>
        <projectUrl>http://markdownpad.com/</projectUrl>
        <tags>tag tag tag</tags>
        <licenseUrl>http://example.com/license.txt</licenseUrl>
        <requireLicenseAcceptance>false</requireLicenseAcceptance>
        <iconUrl>http://example.com/logo.png</iconUrl>
        <releaseNotes>A release note.</releaseNotes>
      </metadata>
      <files>
        <file src="tools\**" target="tools" />
      </files>
    </package>
{: .xml }

### The `chocolateyInstall.ps1` file

Chocolatey uses the PowerShell and will look for a `chocolateyInstall.ps1` file in the package. If it finds it, it will execute the contents of the file by attaching the helper modules.

**The `chocolateyInstall.ps1` file might look like this:**

    Install-ChocolateyPackage 'yourPackage' 'msi' '/quiet' 'http://www.example.com/yourpackage.msi'
{: .php }

### Main helpers

For more information on all available helper modules, please refer to the [the official wiki](https://github.com/chocolatey/chocolatey/wiki/HelpersReference).
{: .print--secondary }

#### `Install-ChocolateyPackage`

    Install-ChocolateyPackage $packageName $fileType $silentArgs $url [$url64bit]
{: .php }

#### `Install-ChocolateyZipPackage`

    Install-ChocolateyZipPackage $packageName $url [$url64bit] $unzipLocation
{: .php }

#### `Install-ChocolateyPowershellCommand`

    Install-ChocolateyPowershellCommand $packageName $psFileFullPath $url [$url64bit]
{: .php }

#### `Install-ChocolateyVsixPackage`

    Install-ChocolateyVsixPackage $packageName $vsixUrl $vsVersion
{: .php }

### Error and success helpers

If do anything besides using the main helpers, it is strongly suggested you format your `chocolateyInstall.ps1` as follows:

    try {
      # Your code here...
      Write-ChocolateySuccess '__NAME__'
    } catch {
      Write-ChocolateyFailure '__NAME__' $($_.Exception.Message)
      throw
    }
{: .php }

### Building a Chocolatey package

Package a Chocolatey package.

**Full command:**

    chocolatey pack yourpackage.nuspec
{: .bash }

**Shorthand command:**

    cpack yourpackage.nuspec
{: .bash }

You can also just open a command prompt in the directory where the `.nuspec` file is and type `cpack`.

### Testing a Chocolatey package

To test the package you just built, with the command line still open (and in the current working directory in the same folder as the newly created `yourpackage.nupkg` file) type:

     cinst yourPackage -source %cd%
{: .bash }
