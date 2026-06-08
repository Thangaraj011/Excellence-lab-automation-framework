
const LP_NAME = 'Test sample Learning path Magic 2026';
const CONTENT = 'Confusion magic sample test 2026';
const ENT_LP_NAME = 'Test sample learning 28723';
const STATUS_COMPLETED = 'Completed';


export const learningPathData = {
  individualInProgress: { 
    learningPathName: LP_NAME,
    contentName: CONTENT, 
    expectedStatus: 'In Progress' },

  individualCompleted:  { 
    learningPathName: LP_NAME,
    contentName: CONTENT, 
    expectedStatus: STATUS_COMPLETED },

  entirePathCompleted:  { 
    learningPathName: ENT_LP_NAME,
    expectedStatus: STATUS_COMPLETED },



};