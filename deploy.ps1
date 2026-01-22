# NovaZphere Website Deployment Script
# This script will help you deploy your website to Vercel

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "NovaZphere Website Deployment Helper" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking for Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Node.js not found" -ForegroundColor Red
    Write-Host "  Installing Node.js is optional for Vercel deployment" -ForegroundColor Yellow
    Write-Host "  You can deploy directly from GitHub without Node.js!" -ForegroundColor Yellow
}

Write-Host ""

# Check if Git is installed
Write-Host "Checking for Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version 2>$null
    if ($gitVersion) {
        Write-Host "✓ Git found: $gitVersion" -ForegroundColor Green
        $hasGit = $true
    }
} catch {
    Write-Host "✗ Git not found" -ForegroundColor Red
    Write-Host "  You'll need to use GitHub Desktop instead" -ForegroundColor Yellow
    $hasGit = $false
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DEPLOYMENT OPTIONS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Option 1: Deploy via GitHub + Vercel (Recommended)" -ForegroundColor Green
Write-Host "  Step 1: Download GitHub Desktop from https://desktop.github.com/" -ForegroundColor White
Write-Host "  Step 2: Open GitHub Desktop → File → Add Local Repository" -ForegroundColor White
Write-Host "  Step 3: Select this folder and publish to GitHub" -ForegroundColor White
Write-Host "  Step 4: Go to https://vercel.com and import your GitHub repo" -ForegroundColor White
Write-Host ""

Write-Host "Option 2: Deploy via Vercel CLI (If Node.js is installed)" -ForegroundColor Green
if ($hasGit) {
    Write-Host "  I can help you set up Git repository..." -ForegroundColor Yellow
    $setupGit = Read-Host "  Would you like me to initialize Git? (y/n)"
    if ($setupGit -eq "y" -or $setupGit -eq "Y") {
        Write-Host "  Initializing Git repository..." -ForegroundColor Yellow
        git init
        git add .
        git commit -m "Initial commit - NovaZphere website"
        Write-Host "  ✓ Git repository initialized!" -ForegroundColor Green
        Write-Host "  Next: Push to GitHub and deploy to Vercel" -ForegroundColor Yellow
    }
} else {
    Write-Host "  Install Git first, or use Option 1 (GitHub Desktop)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "QUICK DEPLOYMENT GUIDE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Install GitHub Desktop: https://desktop.github.com/" -ForegroundColor White
Write-Host "2. Add this folder as a repository in GitHub Desktop" -ForegroundColor White
Write-Host "3. Publish to GitHub (make it PUBLIC)" -ForegroundColor White
Write-Host "4. Go to https://vercel.com and sign up with GitHub" -ForegroundColor White
Write-Host "5. Import your repository and deploy!" -ForegroundColor White
Write-Host ""
Write-Host "Your website will be live in 5 minutes!" -ForegroundColor Green
Write-Host ""
Write-Host "For detailed instructions, see: START_HERE.md" -ForegroundColor Cyan
Write-Host ""

# Open helpful files
$openFiles = Read-Host "Would you like me to open the deployment guide? (y/n)"
if ($openFiles -eq "y" -or $openFiles -eq "Y") {
    Start-Process "START_HERE.md"
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
