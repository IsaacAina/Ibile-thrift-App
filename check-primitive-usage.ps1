# check-primitive-usage.ps1
# Fails (exit 1) if --primitive-* variables are referenced or defined anywhere except
# tokens.css, or if raw hex/rgb()/hsl() colour values appear in code/style files
# outside tokens.css. Scans code/style files only (docs are ignored).
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$self = 'check-primitive-usage.ps1'
$failures = @()

$excludeDirs = @('\.git', '\node_modules', '\Evidence', '\scripts')
$codeExts = @('.css', '.scss', '.sass', '.less', '.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte', '.html')

$files = Get-ChildItem -Path $root -Recurse -File -Include ($codeExts | ForEach-Object { "*$_" }) |
  Where-Object {
    $f = $_.FullName
    ($excludeDirs | Where-Object { $f -like "*$_*" }).Count -eq 0 -and
    $_.Name -ne 'tokens.css' -and
    $_.Name -ne $self
  }

foreach ($file in $files) {
  $lineNum = 0
  foreach ($line in (Get-Content -Path $file.FullName -Encoding UTF8)) {
    $lineNum++
    if ($line -match '--primitive-') {
      $failures += "$($file.FullName):$lineNum uses --primitive-* outside tokens.css: $line".Trim()
    }
    if ($line -match '#[0-9a-fA-F]{3,8}\b' -or $line -match '\b(rgba?|hsla?)\(') {
      $failures += "$($file.FullName):$lineNum raw colour value outside tokens.css: $line".Trim()
    }
  }
}

if ($failures.Count -gt 0) {
  Write-Host "FAIL - $($failures.Count) violation(s):"
  $failures | ForEach-Object { Write-Host "  $_" }
  exit 1
}
Write-Host 'PASS - no primitive usage or raw colours outside tokens.css'
exit 0
