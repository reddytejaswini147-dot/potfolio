# Nandyala Naga Tejaswini — Portfolio (Git Practice Project)

A personal portfolio site built from your resume, and set up as a project
to practice the Git/GitHub workflow end to end.

## Files
- `index.html` — page structure and content
- `styles.css` — styling
- `script.js` — small JS behavior

## Get this into a GitHub repo

1. Create a new empty repository on GitHub (no README, no .gitignore — this
   folder already has files).
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## Practice plan

**Round 1 — basic workflow**
1. `git checkout -b update-about` — new branch
2. Edit the About paragraph in `index.html` with your real bio
3. `git add . && git commit -m "Update about section"`
4. `git push -u origin update-about`
5. Open a Pull Request on GitHub, merge it into `main`
6. `git checkout main && git pull` to bring the merge down locally

**Round 2 — add a project**
1. `git checkout -b add-project`
2. Duplicate one `<article class="project">` block in `index.html` and fill
   in a real project of yours
3. Commit, push, PR, merge — same as Round 1

**Round 3 — cause and resolve a real conflict (safe, on purpose)**
1. On `main`, change the `<h1>` text in `index.html`, commit, and push directly to `main`.
2. Now check out an *older* branch that doesn't have that change (or create
   one from an earlier commit with `git checkout -b conflict-practice HEAD~2`).
3. Change that *same* `<h1>` line to something different, commit.
4. `git checkout main && git pull` — main now has the first change.
5. `git checkout conflict-practice && git merge main` — this will conflict,
   because both branches touched the same line.
6. Open `index.html`, look for the `<<<<<<<` / `=======` / `>>>>>>>` markers,
   pick or blend the final text, delete the markers.
7. `git add index.html && git commit` to finish the merge.
8. `git push` — you've now resolved a real conflict.

Once this feels natural, do the same practice loop on a real project.
