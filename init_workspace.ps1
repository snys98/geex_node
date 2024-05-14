function Test-Admin {  
  $currentUser = New-Object Security.Principal.WindowsPrincipal $([Security.Principal.WindowsIdentity]::GetCurrent())  
  $currentUser.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)  
}  
  
if ((Test-Admin) -eq $false) {  
  if ($elevated) {  
    # tried to elevate, did not work, aborting  
  }   
  else {  
    Start-Process powershell.exe -Verb RunAs -ArgumentList ('-file "{0}" -elevated' -f ($myinvocation.MyCommand.Definition))  
  }  
  exit  
}  
  
'Running as administrator.'

Write-Output "We are going to have several steps done to setup your local dev environment."
Write-Output "1. install necessary tools such as choco, nodejs, openssl, docker, make sure you're having internet access to choco mirrors before execution"
Write-Output "2. stop your local iss service if it's running"
Write-Output "3. a dns server will be add into you docker network, so that *.dev.xorgx.tech can target to your local machine."
Write-Output "4. a dev cert will be installed into you local machine trusted root store, so that you can access https://*.dev.xorgx.tech for local development, you'll need to restart your browser to ensure the cert is loaded."
Write-Output "rerun this script will reset you local dev environment(no duplicate installations)."
$continue = Read-Host -Prompt "enter 'y' to continue";
if ($continue -ne "y") {
  exit
}

$ports = @(<# 9200, 9300, 5044, 50000, 50000, 9600, 5601, 8200,  #>6379, 27017, 53, 5380, 8080, 80, 443)
foreach ($port in $ports) {
  $connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
  if ($connection) {
    $process = Get-Process -Id $connection.OwningProcess -ErrorAction SilentlyContinue
    if ($process.Name -eq "wslrelay" -or $process.Name -like "*docker*") {
      continue;
    }
    Write-Output "Port $port is using by other process $($process.Name) (ID: $($connection.OwningProcess)), execution path: $($process.Path), please release the port and retry."  
  }
}

cd $PSScriptRoot

# register a shared dev server to quick share files if necessary
# if ((Test-Path "Z:")-eq $false) {
#     $dev_user = "dev"
#     $dev_pwd = ConvertTo-SecureString -String "dev" -AsPlainText -Force
#     $dev_cred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $dev_user, $dev_pwd
#     # New-PSDrive -Name "Z" -Root "\\dev\shared" -Persist -PSProvider "FileSystem" -Credential $cred
# }

#region  tools function
if (-not (Get-Module -ListAvailable -Name "Carbon")) {
  Install-Module -Name 'Carbon' -AllowClobber
}
Import-Module 'Carbon'
function Check-Command($cmdname) {
  return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

function Check-Choco(){
  if (-not (Check-Command choco)) {
    $continue = Read-Host -Prompt "choco not installed, enter 'y' to install it, or press any key to exit";
    if ($continue -ne "y") {
      exit
    }
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    Read-Host -Prompt "choco installed, please fully restart current process(vscode or powershell) and run this script again, press any key to exit ";
    exit
  }
}

#endregion



if (-not (Check-Command pwsh)) {
  Check-Choco
  $continue = Read-Host -Prompt "pwsh not installed, enter 'y' to install it, or press any key to exit";
  if ($continue -ne "y") {
    exit
  }
  choco install pwsh -y
  echo "pwsh installed";
}

if (-not (Check-Command node)) {
  Check-Choco
  $continue = Read-Host -Prompt "nodejs not installed, enter 'y' to install it, or press any key to exit";
  if ($continue -ne "y") {
    exit
  }
  choco install nodejs-lts --version=18.19.0 -y
  echo "nodejs installed";
}

if (-not (Check-Command openssl)) {
  Check-Choco
  $continue = Read-Host -Prompt "openssl not installed, enter 'y' to install it, or press any key to exit";
  if ($continue -ne "y") {
    exit
  }
  choco install openssl -y
  echo "openssl installed";
}

wsl --update
wsl --install -d Ubuntu --no-launch

if (-not (Check-Command docker)) {
  Check-Choco
  $continue = Read-Host -Prompt "docker not installed, enter 'y' to install it, or press any key to exit";
  if ($continue -ne "y") {
    exit
  }
  choco install docker-desktop -y
  docker version
  Read-Host -Prompt "docker installed, please start docker manually then fully restart current process(vscode or powershell) and run this script again, press any key to exit ";
  exit
}

#region cert
Write-Output "Please select cert generation mechanism:"
Write-Output "1. use self signed cert"
Write-Output "2. use ACME cert"
$cert_type = Read-Host -Prompt "or directly press enter to skip";
if ($cert_type -ne "1" -and $cert_type -ne "2") {
  $cert_type = $null
}
if ($cert_type -eq "1") {
  $cert = Get-CCertificate -FriendlyName "dev.xorgx.tech" -StoreLocation LocalMachine -StoreName Root
  if ($null -eq $cert) {
    $cert_pwd = ConvertTo-SecureString -String "dev.xorgx.tech" -AsPlainText -Force
    $cert = New-SelfSignedCertificate -CertStoreLocation Cert:\LocalMachine\My -Subject dev.xorgx.tech -DnsName host.docker.internal, dev.xorgx.tech, *.api.dev.xorgx.tech, *.dev.xorgx.tech -FriendlyName "dev.xorgx.tech" -NotAfter (Get-Date).AddYears(1000)
    mkdir ./dev_env/certs -ErrorAction Ignore
    Export-PfxCertificate -Cert "Cert:\LocalMachine\My\$($cert.Thumbprint)" -FilePath "./dev_env/certs/dev.xorgx.tech.pfx" -Password $cert_pwd
    openssl pkcs12 -in "./dev_env/certs/dev.xorgx.tech.pfx" -nodes -out ./dev_env/certs/dev.xorgx.tech.pem -passin pass:dev.xorgx.tech
    openssl pkcs12 -in "./dev_env/certs/dev.xorgx.tech.pfx" -out ./dev_env/certs/dev.xorgx.tech.crt -clcerts -nokeys -passin pass:dev.xorgx.tech
    openssl pkcs12 -in "./dev_env/certs/dev.xorgx.tech.pfx" -out ./dev_env/certs/dev.xorgx.tech.key -nocerts -nodes -passin pass:dev.xorgx.tech
    Install-CCertificate -Path "./dev_env/certs/dev.xorgx.tech.pfx" -StoreLocation LocalMachine -StoreName Root -Password $cert_pwd
  }
}

#endregion

# get all .ps1 files in the templates folder
# $scripts = Get-ChildItem -Path "./dev_env/templates/" -Filter "*.ps1"

# # iterate over all .ps1 files
# foreach ($script in $scripts) {
#     # create a new PowerShell instance and execute the script
#     Start-Process "pwsh" -ArgumentList "-ExecutionPolicy Bypass -File `"$($script.FullName)`""
# }

# docker-compose up setup -d --build
if ($cert_type -eq "2") {
  docker-compose up update-cert -d --build
}
Start-Sleep 10
docker-compose up -d --build

##region dns

$netAdapters = Get-NetAdapter | Where-Object { $_.Status -eq 'up' }

foreach ($netAdapter in $netAdapters) {
  $adapterExists = Get-NetAdapter -InterfaceIndex $netAdapter.ifIndex -ErrorAction SilentlyContinue
  if ($null -eq $adapterExists) {
    continue
  }
    
  $dnsServers = (Get-DnsClientServerAddress -InterfaceIndex $netAdapter.ifIndex -ErrorAction SilentlyContinue).ServerAddresses

  if ('127.0.0.1' -in $dnsServers) {
    Write-Output "DNS server 127.0.0.1 already exists on adapter $($netAdapter.Name). No further config needed..."
    exit
  }
}

$selectedNetAdapter = $null
while ($selectedNetAdapter -eq $null) {
  Write-Output "Please select a network adapter:"
  for ($i = 0; $i -lt $netAdapters.Count; $i++) {
    Write-Output "[$i] $($netAdapters[$i].InterfaceDescription)"
  }

  $selectedIdx = Read-Host "Enter the index of the adapter"
  if ($selectedIdx -ge 0 -and $selectedIdx -lt $netAdapters.Count) {
    $selectedNetAdapter = $netAdapters[$selectedIdx]
  }
  else {
    Write-Output "Invalid index. Please try again."
  }
}

$adapterExists = Get-NetAdapter -InterfaceIndex $selectedNetAdapter.ifIndex -ErrorAction SilentlyContinue
if ($null -eq $adapterExists) {
  Write-Output "The selected adapter does not exist. Exiting..."
  exit
}

$dnsServers = (Get-DnsClientServerAddress -InterfaceIndex $selectedNetAdapter.ifIndex -ErrorAction SilentlyContinue).ServerAddresses
if ($dnsServers -eq $null) {
  Set-DnsClientServerAddress -InterfaceIndex $selectedNetAdapter.ifIndex -ServerAddresses '127.0.0.1'
}
else {
  $dnsServers = , "127.0.0.1" + $dnsServers
  Set-DnsClientServerAddress -InterfaceIndex $selectedNetAdapter.ifIndex -ServerAddresses $dnsServers
}

#endregion
