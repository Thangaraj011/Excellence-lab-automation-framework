# Team Dashboard Test Plan

## Application Overview

Test the manager team dashboard screen in Learning Buddy using auth/managerindirect.json to bypass the SSO cookie and verify dashboard flows, filters, exports, and navigation.

## Test Scenarios

### 1. Team Dashboard

**Seed:** `tests/specs/seed.spec.ts`

#### 1.1. Manager Team Dashboard - Load and verify main sections

**File:** `tests/specs/team-dashboard-load.spec.ts`

**Steps:**
  1. Set the browser context cookie from auth/managerindirect.json for the app domain and open https://learning-buddy-dev-frontend-service-346514237201.us-central1.run.app/.
    - expect: The app bypasses the Google sign-in page and lands on the authenticated homepage or dashboard.
    - expect: Page title is Excellence Lab.
    - expect: The URL resolves to /homepage or /team-dashboard.
  2. Verify the sidebar menu includes Homepage, Learning Records, Team dashboard, My profile, Feedback, Minimize, and Logout.
    - expect: All expected sidebar navigation links are visible.
  3. Confirm the Team dashboard heading and summary widgets are displayed.
    - expect: The page heading shows Team dashboard.
    - expect: Dashboard summary cards include Assigned Courses, Overdue, Not Started, In Progress, Completed, Total, Overall Progress, and AI Suggestions/Trend content.

#### 1.2. Team Dashboard - Search and reportee filters

**File:** `tests/specs/team-dashboard-search.spec.ts`

**Steps:**
  1. Enter a reportee name or partial name into the Direct or all reportees search field.
    - expect: The table filters to matching reportees.
    - expect: Non-matching rows are hidden.
  2. Clear the search field.
    - expect: The full reportee table returns.
    - expect: At least one row is visible again.

#### 1.3. Team Dashboard - Use status and priority quick filters

**File:** `tests/specs/team-dashboard-status-priority.spec.ts`

**Steps:**
  1. Click the Assigned quick filter button, then In Progress, then Completed.
    - expect: The reportee list updates for each selected status.
    - expect: Summary counts and row content correspond to the selected status.
  2. Click the Optional and Mandatory priority filters.
    - expect: The list updates to show reportees matching the selected priority.
    - expect: The dashboard reflects the filter state.

#### 1.4. Team Dashboard - Assigned by and content filters

**File:** `tests/specs/team-dashboard-filters.spec.ts`

**Steps:**
  1. Apply Assigned by filter values such as Manager and Admin.
    - expect: The table refreshes to show matching assignments.
  2. Apply content filters for Job Category, Squad, Pro/Grow skill, Skill category, and Skill name.
    - expect: Only rows meeting the selected content criteria remain.
    - expect: Filter behavior is consistent across the dashboard.
  3. Switch the time period filter between Month, Quarter, and Year.
    - expect: The trend or summary data updates accordingly if applicable.

#### 1.5. Team Dashboard - Export, pagination, and row details

**File:** `tests/specs/team-dashboard-export-pagination.spec.ts`

**Steps:**
  1. Click the Export CSV button.
    - expect: A CSV export action occurs or a download is initiated.
  2. Inspect the reportee table header and first row.
    - expect: Columns include Name, Role, Assigned, In Progress, Completed, Overall Progress, Pro skills, and Grow skills.
    - expect: The first row displays data for a reportee.
  3. Use pagination controls or the page size selector to move between pages.
    - expect: The row set updates when the page changes.
    - expect: Pagination reflects current page and record counts.

#### 1.6. Team Dashboard - Navigation and logout

**File:** `tests/specs/team-dashboard-navigation.spec.ts`

**Steps:**
  1. Click the Learning Records sidebar link, then return to Team dashboard.
    - expect: Navigation to Learning Records works.
    - expect: Returning to Team dashboard restores the dashboard screen.
  2. Click Logout.
    - expect: The session ends and the app returns to the login screen.
    - expect: Dashboard access requires re-authentication or cookie injection after logout.
