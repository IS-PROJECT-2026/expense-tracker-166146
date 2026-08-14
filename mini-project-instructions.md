# Mini-Project Git Workflow Challenge: System of Your Choice

You are tasked with developing a **functional micro-system of your choice** — an e-commerce storefront, a fitness tracker, a clinic landing page, a library catalogue, personal portfolio, or any system that interests you — and shipping it using a professional-grade Git workflow.

This assignment tests whether you can **operate GitHub the way a working engineer does**: planning work in milestones and issues, isolating changes on branches, writing traceable commit histories, managing pull requests, and deploying through a CI/CD pipeline.

> **Reference material:** The slide deck covering Conventional Commits, branching strategy, merge conflict resolution, and GitHub Pages is under the **Resources** tab in your student portal. You are expected to consult it.

---

## What You Are Building

A **static web project** (HTML/CSS/JS, or a compiled frontend framework exported as static assets) deployed live via GitHub Pages. The system must be functional — not a placeholder page. Choose something with enough scope to generate at least 3 distinct development phases and multiple trackable tasks.

---

## Repository Requirements

Your repository must meet **all** of the following conditions. How you achieve them is your responsibility.

| Requirement | Detail |
|---|---|
| **Organisation** | Hosted under the `IS-PROJECT-2026` organisation — not your personal profile |
| **Naming** | `[system-name]-[your-admission-number]` (e.g., `hospital-management-138141`) |
| **Visibility** | Public |
| **Team mapping** | Linked to your assigned class team (`GROUP 4A` through `GROUP 4E`) inside the organisation |
| **README.md** | Your repository must include a `README.md` that describes your system, links to the live deployment, and lists the technologies used |
| **Portability** | After final grading, fork the repository to your personal profile as a portfolio piece |

---

## Project Management

You must demonstrate Agile planning using GitHub's built-in tools:

- **Milestones** — at least 3, each representing a meaningful development phase or epic of your system.
- **Issues** — every milestone broken into granular, actionable tasks. Every issue must be linked to its milestone *before* you begin coding it.
- **Project Board** — a Kanban board with `To Do`, `In Progress`, and `Done` columns. Tasks must move through the board as you work — a board where everything sits in `Done` with no movement history does not demonstrate active project management.

---

## Git Workflow

### Branch Isolation

Committing directly to `main` is **forbidden**. All development happens on feature branches using a naming convention tied to your issues:

```
feat/[issue-number]-[short-description]
fix/[issue-number]-[short-description]
style/[issue-number]-[short-description]
```

### Branch Protection

You must configure a branch protection rule on `main` that requires a pull request before merging.

> ⚠️ **Solo project trap:** If you enable "Require approvals" on a repository where you are the only contributor, you will permanently lock yourself out of merging. Understand what each protection option does before you enable it.

### Conventional Commits

Every commit must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Your commit log will be audited for:

- **Format** — imperative voice, subject line under 50 characters, structured body where appropriate.
- **Type diversity** — you must use at least **4 distinct commit types** across your history (e.g., `feat`, `fix`, `docs`, `style`, `refactor`, `chore`).
- **Traceability** — commits that close an issue should reference it in the footer.

If you are unfamiliar with this specification, research it. The convention is an industry standard with extensive public documentation.

### Pull Requests

Every feature branch must be merged into `main` via a **pull request**. You are both the author and the reviewer — use the PR description and the GitHub review interface to inspect your own changes before merging. PRs should reference the issues they resolve.

---

## Merge Conflict Resolution

In class you learned that merge conflicts arise from several distinct causes — not just two people editing the same line. You must demonstrate that you understand this by engineering **three separate merge conflicts**, each triggered by a **different cause**.

Choose any three distinct causes from those covered in the lecture. How you create each conflict, which branches you use, and which files you modify are your decisions.

**Evidence required:**
- **Conflict 1 (full chronology):** Document the complete resolution lifecycle — the merge attempt, the raw conflict markers in your editor, and the clean resolution. Save the conflict marker screenshot as `/evidence/conflict_evidence_1.png`.
- **Conflict 2:** Save the conflict marker screenshot as `/evidence/conflict_evidence_2.png`. In your `submission.md`, name the cause and explain why it triggered a conflict.
- **Conflict 3:** Save the conflict marker screenshot as `/evidence/conflict_evidence_3.png`. In your `submission.md`, name the cause and explain why it triggered a conflict.

All three conflicts must be resolved cleanly and merged.

---

## Deployment

Your system must be **live on the public internet** via GitHub Pages, deployed from your `main` branch.

> ⚠️ **Common failure:** GitHub Pages serves from the repository root by default. If it cannot find an entry point file at the expected location, your deployment will return a 404. Consult the [GitHub Pages documentation](https://docs.github.com/en/pages) to understand how the pipeline resolves your site's entry point.

---

## Written Assessment

The file **`submission.md`** in the [resources repository](https://github.com/IS-PROJECT-2026/Resources.git) contains the written evaluation questions for this assignment. Copy it into your project repository, complete all questions, and merge it to `main`.

---

## Profile Developer Metrics

Earlier this semester you set up a GitHub profile README with developer stats cards. If you've checked your profile recently, you may have noticed those stats have stopped rendering — the images show broken placeholders or error badges. This is caused by API rate limiting on the shared public instance that everyone's profiles are hitting simultaneously.

Your task is to **diagnose why this is happening and fix it**. The [github-stats-extended](https://github.com/stats-organization/github-stats-extended) repository documents the problem and provides a path to running your own instance. Read through the repository's documentation to understand the architecture, then deploy your own instance so your profile stats render reliably from your own infrastructure.

Your personal GitHub profile must display working stats cards powered by your own deployment — not the shared public URL.

---

## Bonus: Additional Stat Card (+2 marks)

The `github-stats-extended` repository offers several card types (stats, top languages, repo pins). For bonus marks, add a stat card to your GitHub profile that **is not available in the github-stats-extended project** — something sourced from an entirely different open-source tool. You are not told which tool or which stat. Find one, deploy or configure it, and integrate it into your profile README alongside your existing cards.

---

## Final Submission

Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.

> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)

---

## Submission Checklist

Every item must be verifiable in your organisation repository before the deadline.

- [ ] Repository under `IS-PROJECT-2026`, correctly named, public, and linked to your class team.
- [ ] At least 3 milestones with granular issues linked to each.
- [ ] Kanban board showing realistic task progression.
- [ ] Clean commit history using conventional commit types (minimum 4 types).
- [ ] All development on feature branches — zero direct commits to `main`.
- [ ] Pull request history with issue traceability.
- [ ] Three merge conflicts from three distinct causes, with evidence at `/evidence/conflict_evidence_1.png`, `conflict_evidence_2.png`, and `conflict_evidence_3.png`.
- [ ] A `README.md` describing your system, linking to the live deployment, and listing technologies used.
- [ ] Live GitHub Pages deployment with a working public URL.
- [ ] Completed `submission.md` in your repository.
- [ ] GitHub profile stats rendering via your own deployment (not the shared public instance).
- [ ] **Bonus:** An additional stat card from a different open-source project integrated into your profile.