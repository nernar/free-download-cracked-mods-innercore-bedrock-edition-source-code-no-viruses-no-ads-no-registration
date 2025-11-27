New-Item -ItemType Directory -Path "temp-git-backup" -Force | Out-Null

Get-ChildItem -Recurse -Directory -Filter ".git" | Where-Object {$_.FullName -ne "$pwd\.git" -and $_.FullName -notlike "$pwd\temp-git-backup\*"} | ForEach-Object {
    $relativePath = $_.Parent.FullName.Replace($pwd, "").TrimStart("\")
    $targetPath = "temp-git-backup\$relativePath\.git"
    New-Item -ItemType Directory -Path (Split-Path $targetPath) -Force
    Move-Item -Path $_.FullName -Destination $targetPath
}

Compress-Archive -Path "temp-git-backup\*" -DestinationPath "mods-git.zip" -Force
Remove-Item -Path "temp-git-backup" -Recurse -Force
