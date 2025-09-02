#!/bin/bash

# Autonique Website Deployment Script
# This script runs all tests and prepares the project for deployment

set -e  # Exit on any error

echo "🚀 Starting Autonique Website Deployment Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

# Step 1: Install dependencies
print_status "Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 2: Run ESLint
print_status "Running ESLint..."
npm run lint

if [ $? -eq 0 ]; then
    print_success "ESLint passed"
else
    print_warning "ESLint found issues. Attempting to fix..."
    npm run lint:fix
    if [ $? -eq 0 ]; then
        print_success "ESLint issues fixed"
    else
        print_error "ESLint issues could not be fixed automatically"
        exit 1
    fi
fi

# Step 3: Run tests
print_status "Running tests..."
npm run test:run

if [ $? -eq 0 ]; then
    print_success "All tests passed"
else
    print_error "Tests failed"
    exit 1
fi

# Step 4: Run test coverage
print_status "Running test coverage..."
npm run test:coverage

if [ $? -eq 0 ]; then
    print_success "Test coverage completed"
else
    print_warning "Test coverage failed, but continuing..."
fi

# Step 5: Build the project
print_status "Building the project..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Step 6: Check build output
if [ -d "dist" ]; then
    print_success "Build output directory created"

    # Check build size
    BUILD_SIZE=$(du -sh dist | cut -f1)
    print_status "Build size: $BUILD_SIZE"

    # List build files
    print_status "Build files:"
    ls -la dist/
else
    print_error "Build output directory not found"
    exit 1
fi

# Step 7: Create deployment package
print_status "Creating deployment package..."
DEPLOY_DIR="deploy-$(date +%Y%m%d-%H%M%S)"
mkdir -p $DEPLOY_DIR
cp -r dist/* $DEPLOY_DIR/
cp package.json $DEPLOY_DIR/
cp README.md $DEPLOY_DIR/ 2>/dev/null || true
cp TESTING_GUIDE.md $DEPLOY_DIR/ 2>/dev/null || true

print_success "Deployment package created: $DEPLOY_DIR"

# Step 8: Generate deployment report
print_status "Generating deployment report..."
cat > $DEPLOY_DIR/deployment-report.txt << EOF
Autonique Website Deployment Report
==================================
Date: $(date)
Node.js Version: $(node --version)
npm Version: $(npm --version)
Build Size: $BUILD_SIZE

Pre-deployment Checks:
- ✅ Dependencies installed
- ✅ ESLint passed
- ✅ Tests passed
- ✅ Build successful
- ✅ Deployment package created

Next Steps:
1. Upload contents of $DEPLOY_DIR to your GoDaddy hosting
2. Configure domain settings
3. Set up SSL certificate
4. Test the live website

Files to upload:
$(ls -la $DEPLOY_DIR/)

EOF

print_success "Deployment report generated: $DEPLOY_DIR/deployment-report.txt"

# Step 9: Final checklist
print_status "Final deployment checklist:"
echo "1. ✅ All tests passed"
echo "2. ✅ Code quality checks passed"
echo "3. ✅ Build successful"
echo "4. ✅ Deployment package ready"
echo ""
echo "📁 Deployment package location: $DEPLOY_DIR"
echo "📄 Deployment report: $DEPLOY_DIR/deployment-report.txt"
echo ""
print_warning "Next steps for GoDaddy deployment:"
echo "1. Upload files from $DEPLOY_DIR to your GoDaddy hosting"
echo "2. Configure your domain in GoDaddy"
echo "3. Set up SSL certificate"
echo "4. Test the live website"
echo "5. Configure Firebase for production"

print_success "🎉 Deployment preparation completed successfully!"
print_status "Ready to upload to GoDaddy hosting"

# Optional: Open deployment directory
if command -v open &> /dev/null; then
    open $DEPLOY_DIR
elif command -v xdg-open &> /dev/null; then
    xdg-open $DEPLOY_DIR
fi