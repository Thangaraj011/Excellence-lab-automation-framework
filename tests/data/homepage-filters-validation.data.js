const TITLE_ASCENDING = "Title A–Z";
const TITLE_DESCENDING = "Title Z-A";
const PRIORITY_MANDATORY = "Mandatory";
const EARLY_FIRST = "Due date (soonest first)";
const LATE_FIRST = "Due date (latest first)";
const DESC_SORTTYPE = "desc";
const ASC_SORTTYPE = "asc";

export const filtersTestData = {
  searchFilters: {
    searchContentText: "Learning path new case",
    skillCategoryValue: "Consulting & Business Development Initiatives",
    skillNameValue: "Agile/Scrum Methodologies",
    dueDateStart: "2026-05-04",
    dueDateEnd: "2026-06-09",
  },

  quickFilters: {
    optionalPriority: "Optional",
    mandatoryPriority: PRIORITY_MANDATORY,
    assignedStatus: "Assigned",
    apiUrlIdentifier: "yet_to_start",
    inProgressStatus: "In Progress",
  },

  sortByFilters: {
    sortByTitleAscending: TITLE_ASCENDING,
    sortByTitleDescending: TITLE_DESCENDING,
    sortByMandatoryFirst: PRIORITY_MANDATORY,
    sortByDueDateEarlyFirst: EARLY_FIRST,
    sortByDueDateLateFirst: LATE_FIRST,
    titleSortToAscending: ASC_SORTTYPE,
    titleSortToDescending: DESC_SORTTYPE,
  },
};
