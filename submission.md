# Project Submission Report

## 1. Student Details

- **Full Name:** Emmanuel Gichigo Mukira
- **GitHub Username:** emmanuel-mukira
- **Email:** emmanuel.mukira@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/expense-tracker-166146/  

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/expense-tracker-166146/commit/9ce30993053d8291fc25790d40cfd2b609aa7a42 
- **Why this one?** This commit turns the previously static expense form into a usable validated workflow by combining native required-field checks with JavaScript validation for positive amounts and non-future dates, provides visible success/error feedback, and resets only after valid submission. Its `feat(form)` subject, explanatory body and `Closes #4` footer make both the implementation scope and issue traceability clear.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/expense-tracker-166146/commit/ddb054388c6e4a19b10a6e555544969b85c35007 
- **What happened and how did you recover?** I committed the Issue #5 expense-management work with the non-conventional message `save expense changes`. I preserved the commit for transparency, then recovered with a separate Conventional Commit that documented the correction and linked the completed work to Issue #5. Correct commit recovery: https://github.com/IS-PROJECT-2026/expense-tracker-166146/commit/baf9b4416d31c91be989da1310b23a9b83c7af0c  

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/expense-tracker-166146/pull/13 
- **What did you check before merging?** I reviewed the six changed files to confirm that the landing page links correctly to the expense form, the shared stylesheet works on both pages, and the form fields are labelled and responsive. I also tested empty submissions, invalid amounts, missing categories, future dates, valid submission feedback, form reset behavior, and ran `git diff --check`.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would replace the separate board-and-branch-protection issue with a functional application issue that produces a direct code change and user-visible result. The board and branch-protection setup was important, but tracking it as a development issue made the implementation history less focused. 
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/expense-tracker-166146/issues/3 

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*


[PASTE YOUR MILESTONE SCREENSHOT DIRECTLY HERE]

* **Caption:** The repository is organized into three milestones—Project Foundation, Expense Tracking Features, and Delivery, Evidence, and Assessment—with granular issues assigned to each milestone. 

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

[PASTE YOUR PROJECT BOARD SCREENSHOT DIRECTLY HERE]

* **Caption:** The project board shows realistic workflow movement, with Issues #4–#6 in progress, Issues #7–#9 awaiting work, and completed pull requests #10–#12 recorded in Done. 

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

[PASTE YOUR BRANCHING SCREENSHOT DIRECTLY HERE]

* **Caption:** The branch list demonstrates issue-linked development using lowercase kebab-case names and category prefixes such as `feat/`, `docs/`, `chore/`, `test/`, and `conflict/`, with both local and remote branches preserved for project history. 

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

[PASTE YOUR PULL REQUEST SCREENSHOT DIRECTLY HERE]

* **Caption:** Pull Request #10 links the `feat/1-project-structure` branch to `main` and closes Issue #1 while showing the project foundation changes for review.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** SAME LINE EDITS 

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

[PASTE SCREENSHOT OF ATTEMPTED MERGE / TERMINAL WARNING HERE]

* **Caption:** Branches `conflict/1-readme-a` and `conflict/1-readme-b` collided when Branch B was merged into Branch A. Git reported a content conflict in `README.md` because both branches edited the same line. 

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

[PASTE SCREENSHOT OF RAW CONFLICT MARKERS HERE]

* **Caption:** Git inserted conflict markers because both branches changed the exact same README line. I reviewed the current change from `conflict/1-readme-a` and the incoming change from `conflict/1-readme-b`, then selected a single clearer description for the project. 

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

[PASTE SCREENSHOT OF CLEAN RESOLUTION HERE]

* **Caption:** The README conflict was resolved by removing all conflict markers and keeping only the incoming project description. Git recorded the completed merge resolution, and the working tree is clean. 

---

### Conflict 2 — Different Cause

**What cause did you use?** THE "APPENDED LIST"

**Why does this cause trigger a conflict?** Both branches started from the same version of `docs/workflow.md` and independently added different items at the very bottom of the file. Because both additions targeted the same final position, Git could not automatically determine how to combine them and inserted conflict markers.

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 2 HERE]

* **Caption:** Branches `conflict/2-appended-list-a` and `conflict/2-appended-list-b` independently appended different workflow items to the bottom of `docs/workflow.md`, creating an overlapping appended-list conflict. 

---

### Conflict 3 — Different Cause

**What cause did you use?** FILE RENAMES 

**Why does this cause trigger a conflict?** Both branches renamed the same original file, `docs/verification.md`, to different destination paths. Git could not determine which renamed path should be retained, so it stopped the merge with a rename/rename conflict. 

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 3 HERE]

* **Caption:** Branch `conflict/3-file-rename-a` renamed `docs/verification.md` to `docs/deployment-verification.md`, while `conflict/3-file-rename-b` renamed it to `docs/profile-verification.md`. Git reported a rename/rename conflict because both branches assigned different final paths to the same file. 

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
