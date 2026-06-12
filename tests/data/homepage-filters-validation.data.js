const SORT_TITLE_ASCENDING = "Title A–Z";
const SORT_TITLE_DESCENDING = "Title Z–A";
const SORT_MANDATORY_FIRST = "Priority (Mandatory first)";
const SORT_EARLY_FIRST = "Due date (soonest first)";
const SORT_LATE_FIRST = "Due date (latest first)";
const SORT_TO_DESC = "desc";
const SORT_TO_ASC = "asc";
const OPTIONAL_PRIORITY = "Optional";
const MANDATORY_PRIORITY = "Mandatory";
const ASSIGNED_STATUS = "Assigned";
const INPROGRESS_STATUS = "In Progress";
const ASSIGNED_INDENTIFIER = "yet_to_start";
const IN_PROGRESS_INDENTIFIER = "in_progress";


export const filtersTestData = {
  searchFilters: {
    searchContentText: "linkedin",
    skillCategoryValue: "Consulting & Business Development Initiatives",
    skillNameValue: "Agile/Scrum Methodologies",
    dueDateStart: "2026-05-04",
    dueDateEnd: "2026-06-09",
  },

  quickFilters: {
    priorityLevel: MANDATORY_PRIORITY,
    contentStatus: INPROGRESS_STATUS,
    apiUrlIdentifier: IN_PROGRESS_INDENTIFIER,
  },

  sortByFilters: {
    sortByTitleAscending: SORT_TITLE_ASCENDING,
    sortByTitleDescending: SORT_TITLE_DESCENDING,
    sortByMandatoryFirst: SORT_MANDATORY_FIRST,
    sortByDueDateEarlyFirst: SORT_EARLY_FIRST,
    sortByDueDateLateFirst: SORT_LATE_FIRST,
    sortToAscending: SORT_TO_ASC,
    sortToDescending: SORT_TO_DESC,
  },

  multipleFilters: {
    searchContentText: "sample",
    skillCategoryValue: "Consulting & Business Development Initiatives",
    skillNameValue: "Agile/Scrum Methodologies",
    dueDateStart: "2026-05-30",
    dueDateEnd: "2026-06-30",

    priorityLevel: MANDATORY_PRIORITY,
    contentStatus: INPROGRESS_STATUS,
    apiUrlIdentifier: IN_PROGRESS_INDENTIFIER,

    sortByTitleAscending: SORT_TITLE_ASCENDING,
    sortByTitleDescending: SORT_TITLE_DESCENDING,
    sortByMandatoryFirst: SORT_MANDATORY_FIRST,
    sortByDueDateEarlyFirst: SORT_EARLY_FIRST,
    sortByDueDateLateFirst: SORT_LATE_FIRST,
    sortToAscending: SORT_TO_ASC,
    sortToDescending: SORT_TO_DESC,
  },

};
