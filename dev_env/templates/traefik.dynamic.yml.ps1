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
# Load YAML template file
$output = ConvertFrom-Yaml (Get-Content -Path './traefik.dynamic.yml.template' -Raw)

# Loop over each client
foreach ($client in $clients) {
  $name = $client.name
  $hostname = $client.hostname
  $port = $client.port

  # Generate router and service
  $router = @{
    rule        = "Host(``$hostname``)"
    service     = "$name"
    entryPoints = @("https")
    tls         = @{}
  }

  $service = @{
    loadBalancer = @{
      servers = @(
        @{
          url = "https://host.docker.internal:$port"
        }
      )
    }
  }

  # Add router and service to output
  $output.http.routers += @{"$name" = $router }
  $output.http.services += @{"$name" = $service }
}

# Build an ordered hashtable of the property-value pairs.
$sortedProps = [ordered] @{}
$output.Keys | Sort-Object | % { $sortedProps[$_] = $output[$_] }

# Create a new object that receives the sorted properties.
$outputWithSortedProperties = New-Object PSCustomObject
Add-Member -InputObject $outputWithSortedProperties -NotePropertyMembers $sortedProps

# Write output to file
$outputWithSortedProperties | ConvertTo-Yaml | Set-Content -Path '../traefik/dynamic.yml'

Write-Output "Traefik config file updated successfully."

Read-Host
