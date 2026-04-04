<#
.SYNOPSIS
  Dev Studio status.json 업데이트 스크립트

.PARAMETER AgentId
  에이전트 ID (orchestrator, game-designer, developer, qa-tester, content-writer, devops, art-director)

.PARAMETER Status
  에이전트 상태 (idle, planning, researching, building, verifying, blocked, syncing)

.PARAMETER Task
  현재 작업 설명

.PARAMETER Push
  git commit + push 수행 여부

.EXAMPLE
  ./scripts/update-agent-status.ps1 -AgentId developer -Status building -Task "UI 구현 중"
  ./scripts/update-agent-status.ps1 -AgentId developer -Status building -Task "UI 구현" -Push
#>

param(
  [Parameter(Mandatory=$true)]
  [ValidateSet('orchestrator','game-designer','developer','qa-tester','content-writer','devops','art-director')]
  [string]$AgentId,

  [Parameter(Mandatory=$true)]
  [ValidateSet('idle','planning','researching','building','verifying','blocked','syncing')]
  [string]$Status,

  [Parameter(Mandatory=$true)]
  [string]$Task,

  [switch]$Push
)

$statusPath = Join-Path $PSScriptRoot '..' 'public' 'status.json'
$statusPath = (Resolve-Path $statusPath -ErrorAction SilentlyContinue) ?? $statusPath

if (Test-Path $statusPath) {
  $json = Get-Content $statusPath -Raw | ConvertFrom-Json
} else {
  $json = [PSCustomObject]@{
    lastUpdated = ""
    source = "cli-script"
    agents = [PSCustomObject]@{}
  }
}

$json.lastUpdated = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
$json.source = "cli-script"

$agentObj = [PSCustomObject]@{
  status = $Status
  task = $Task
}

if ($json.agents.PSObject.Properties[$AgentId]) {
  $json.agents.$AgentId = $agentObj
} else {
  $json.agents | Add-Member -NotePropertyName $AgentId -NotePropertyValue $agentObj
}

$json | ConvertTo-Json -Depth 4 | Set-Content $statusPath -Encoding UTF8
Write-Host "Updated $AgentId -> $Status : $Task"

if ($Push) {
  $repoRoot = Join-Path $PSScriptRoot '..'
  Push-Location $repoRoot
  git add public/status.json
  git commit -m "chore: update agent status ($AgentId=$Status)"
  git push
  Pop-Location
  Write-Host "Pushed to remote."
}
