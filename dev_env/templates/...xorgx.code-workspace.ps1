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
$output = ConvertFrom-Json (Get-Content -Path './...xorgx.code-workspace.template' -Raw)

# Loop over each client
foreach ($client in $clients) {
  $name = $client.name

  # Generate folder record
  $record = @{
    name = "client/$name"
    path = "client/$name"
  }

  # Check if the record already exists
  if (($output.folders | Where-Object { $_.name -eq $record.name }).Count -eq 0) {
    # Add the record to the output
    $output.folders += $record
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
$outputWithSortedProperties | ConvertTo-Json -Depth 100 | Set-Content -Path '../../xorgx.code-workspace'

Write-Output "code workspace file updated successfully."

Read-Host
