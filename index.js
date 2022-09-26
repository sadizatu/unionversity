"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = __importDefault(require("./courses"));
const studyGroups_1 = __importDefault(require("./studyGroups"));
let enrolledEvents = [];
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
const searchResults = searchEvents({ query: 'art', eventType: 'courses' });
enroll(searchResults[0]);
console.log(enrolledEvents);
