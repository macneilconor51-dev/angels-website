# angels-website

Angel's Cleaning Services Website

## How to Update Code from GitHub Desktop

This guide will help you update your code using GitHub Desktop.

### Prerequisites
- Install [GitHub Desktop](https://desktop.github.com/)
- Clone this repository to your local machine

### Updating Code (Pulling Changes)

When others have made changes to the repository and you want to get those updates:

1. **Open GitHub Desktop**
2. **Select the Repository**: Make sure "angels-website" is selected in the "Current Repository" dropdown (top-left)
3. **Fetch Origin**: Click "Fetch origin" button in the top toolbar
   - This checks for new changes from GitHub without downloading them yet
4. **Pull Changes**: If there are new changes, the button will change to "Pull origin"
   - Click "Pull origin" to download and merge the changes into your local copy
5. **Done!** Your local code is now up-to-date

### Making and Uploading Changes (Committing and Pushing)

When you've made changes to files and want to upload them to GitHub:

1. **Make Your Changes**: Edit files in your local folder using your preferred code editor
2. **Open GitHub Desktop**: The app will automatically detect your changes
3. **Review Changes**: 
   - The left panel shows all changed files
   - Click on a file to see what was changed (additions in green, deletions in red)
4. **Write a Commit Message**:
   - In the bottom-left, enter a short summary (e.g., "Update contact information")
   - Optionally, add a longer description
5. **Commit to Branch**: Click "Commit to main" button (or your current branch name)
6. **Push to GitHub**: Click "Push origin" button in the top toolbar
   - This uploads your changes to GitHub
7. **Done!** Your changes are now on GitHub

### Common Scenarios

#### Syncing Before You Start Working
Always pull the latest changes before starting new work:
1. Open GitHub Desktop
2. Click "Fetch origin"
3. If updates are available, click "Pull origin"

#### Checking for Conflicts
If someone else changed the same lines you did:
1. GitHub Desktop will notify you of a merge conflict
2. Click "Open in [your editor]" to resolve conflicts manually
3. Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Keep the changes you want and remove the markers
5. Save the file and return to GitHub Desktop
6. Click "Commit merge"

#### Viewing History
To see past changes:
1. Click the "History" tab in GitHub Desktop
2. Browse through commits to see what was changed and when

### Quick Reference

| Action | Steps |
|--------|-------|
| Get latest updates | Fetch origin → Pull origin |
| Upload your changes | Make changes → Commit → Push origin |
| Switch branches | Click "Current Branch" → Select branch |
| Create new branch | Click "Current Branch" → "New Branch" |
| Discard changes | Right-click file → "Discard Changes" |

### Troubleshooting

**"Push origin" is grayed out**
- You need to commit your changes first
- Or there are no new commits to push

**"You have uncommitted changes"**
- Commit or discard your changes before switching branches

**"Failed to push"**
- Someone else may have pushed changes first
- Click "Fetch origin" then "Pull origin" first, then try pushing again

### Need More Help?
- [GitHub Desktop Documentation](https://docs.github.com/en/desktop)
- [GitHub Desktop Keyboard Shortcuts](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/keyboard-shortcuts)