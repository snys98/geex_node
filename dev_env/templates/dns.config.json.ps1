cd $PSScriptRoot
# Check if YamlDotNet module is installed
if (!(Get-Module -ListAvailable -Name powershell-yaml)) {
  # Install YamlDotNet module
  Install-Module -Name powershell-yaml -Force -Scope CurrentUser
}
# Load JSON file
$clientNames = Get-ChildItem "../../client" -Directory | Select-Object -Property Name;
$clients = $clientNames | ForEach-Object { 
  $name = $_.Name
  if (Test-Path -Path "../../client/$($_.Name)/docker-compose.yml") {
    ConvertFrom-Yaml(Get-Content -Path "../../client/$($_.Name)/docker-compose.yml" -Raw) | foreach { 
      return [PSCustomObject]@{
        name     = $name
        hostname = $_.services[$name].hostname
        port     = $_.services[$name].ports.split(":")[0]
      };
    }
  }
};
# Load DNS config template file
$output = ConvertFrom-Json (Get-Content -Path './dns.config.json.template' -Raw)

# Get the index of the "api.dev.xorgx.tech" record
$index = $output.envs[0].hostnames | Where-Object { $_.hostname -eq "api.dev.xorgx.tech" } | Select-Object -First 1 | ForEach-Object { $_.id }

# Loop over each client
foreach ($client in $clients) {
  $name = $client.name
  $hostname = $client.hostname

  # Generate hostname record
  $record = @{
    id       = ++$index
    hostname = "$hostname"
    ip       = "127.0.0.1"
    target   = "acme.com"
    ttl      = 10
    type     = "A"
  }

  # Check if the record already exists
  if (($output.envs[0].hostnames | Where-Object { $_.hostname -eq $record.hostname }).Count -eq 0) {
    # Add the record to the output
    $output.envs[0].hostnames += $record
  }
}

# Build an ordered hashtable of the property-value pairs.
$sortedProps = [ordered] @{}
Get-Member -Type  NoteProperty -InputObject $output | Sort-Object Name |
% { $sortedProps[$_.Name] = $output.$($_.Name) }

# Create a new object that receives the sorted properties.
$outputWithSortedProperties = New-Object PSCustomObject
Add-Member -InputObject $outputWithSortedProperties -NotePropertyMembers $sortedProps

# Write output to file
$outputWithSortedProperties | ConvertTo-Json -Depth 100 | Set-Content -Path '../dns/config/config.json'

Write-Output "DNS config file updated successfully."

Read-Host
