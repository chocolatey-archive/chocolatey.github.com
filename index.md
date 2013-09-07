---
title: "Home"
layout: home
---

# Chocolatey — kind of like `apt-get`, but for Windows

"I'm a tools enabler, I'm a global silent application installer, I configure stuff. Some people want to call me `apt-get` for Windows, but I just want to get Chocolatey!"
{: .print--secondary }

## Chocolatey?

Chocolatey is a global [PowerShell](http://technet.microsoft.com/en-us/library/cc731851(v=WS.10).aspx) execution engine using the [NuGet](http://www.nuget.org/) packaging infrastructure. Think of it as the ultimate automation tool for Windows.

Chocolatey is like `apt-get`, but built with Windows in mind. For those unfamiliar with `apt-get`, think about Chocolatey as a global silent installer for applications and tools. It can also do configuration tasks and anything that you can do with PowerShell. The power you hold with a tool like Chocolatey is only limited by your imagination!

You can develop your tools and applications with NuGet, and release them with Chocolatey. But Chocolatey is not just for [.NET](http://www.microsoft.com/net) tools, it's for nearly any Windows application!

## Requirements

- Windows XP/Vista/7/2003/2008
- [.NET Framework 4.0](http://www.microsoft.com/en-us/download/details.aspx?id=17718)
- [PowerShell 2.0](http://www.microsoft.com/en-us/download/details.aspx?id=20430)

## Install

To install Chocolatey, open a command prompt and paste the text from the box below and press <code>Enter</code>:

    @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
{: .bash }
