$ErrorActionPreference = 'Stop'

$catRushSourceRoot = 'C:\CatRush\Assets\Resources\Sprites\Cats'
$runningCatSourceRoot = 'C:\Unity\CatRace\Assets\@Sprites\Cat\7. RunningCat'
$targetRoot = Join-Path $PSScriptRoot 'public\catrush-cats'

$indexByCharacterKey = @{
  ember = '01'
  leaf = '04'
  bloom = '07'
  spark = '10'
  wave = '13'
  moon = '16'
}

$assetByStatus = @{
  idle = @{ Folder = 'SleepingCat'; SourceRoot = Join-Path $catRushSourceRoot 'SleepingCat'; FileName = { param($index) "$index`_Sleep.png" } }
  planning = @{ Folder = 'WinkCat'; SourceRoot = Join-Path $catRushSourceRoot 'WinkCat'; FileName = { param($index) "$index`_Wink.png" } }
  researching = @{ Folder = 'WinkCat'; SourceRoot = Join-Path $catRushSourceRoot 'WinkCat'; FileName = { param($index) "$index`_Wink.png" } }
  building = @{ Folder = 'RunningCat'; SourceRoot = $runningCatSourceRoot; FileName = { param($index) "$index.png" } }
  verifying = @{ Folder = 'Cat'; SourceRoot = Join-Path $catRushSourceRoot 'Cat'; FileName = { param($index) "$index.png" } }
  blocked = @{ Folder = 'Cat'; SourceRoot = Join-Path $catRushSourceRoot 'Cat'; FileName = { param($index) "$index.png" } }
  syncing = @{ Folder = 'RunningCat'; SourceRoot = $runningCatSourceRoot; FileName = { param($index) "$index.png" } }
}

if (-not (Test-Path $catRushSourceRoot)) {
  throw "CatRush source folder not found: $catRushSourceRoot"
}

if (-not (Test-Path $runningCatSourceRoot)) {
  throw "RunningCat source folder not found: $runningCatSourceRoot"
}

New-Item -ItemType Directory -Path $targetRoot -Force | Out-Null

foreach ($status in $assetByStatus.Keys) {
  $statusConfig = $assetByStatus[$status]
  $targetStatusFolder = Join-Path $targetRoot $statusConfig.Folder
  New-Item -ItemType Directory -Path $targetStatusFolder -Force | Out-Null

  foreach ($characterKey in $indexByCharacterKey.Keys) {
    $index = $indexByCharacterKey[$characterKey]
    $fileName = & $statusConfig.FileName $index
    $sourceFile = Join-Path $statusConfig.SourceRoot $fileName
    $targetFile = Join-Path $targetStatusFolder $fileName

    if (-not (Test-Path $sourceFile)) {
      throw "Missing sprite for ${characterKey} / ${status}: $sourceFile"
    }

    Copy-Item $sourceFile $targetFile -Force
    Write-Host "Copied $characterKey / $status -> $targetFile"
  }
}

Write-Host ''
Write-Host 'CatRush cat assets synced to public\catrush-cats.'
Write-Host 'Next: run push-to-agent-office.ps1 or publish-agent-office.ps1.'
