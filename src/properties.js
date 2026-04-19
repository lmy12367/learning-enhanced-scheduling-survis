/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'Learning-Enhanced Personnel Scheduling for Flexible Multi-Skilled Workforces';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 * field: BibTeX field used for generating the tag clouds,
 * title: Title displayed as headline
 * minTagFrequency: minimum frequency of a tag to be displayed
 * @type {{field: string, title: string, minTagFrequency: number}[]}
 */
var tagCloudOptions = [{
    field: 'keywords',
    title: 'Framework Tags',
    minTagFrequency: 1
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}, {
    field: 'journal',
    title: 'Venues',
    minTagFrequency: 1
}];

/**
 * If BibTeX entries (and tags) should be editable
 * @type {boolean}
 */
var editable = false;

/**
 * Subtitle describing the paper the data is referring to (set to null to deactivate)
 * @type {{html: string, id: string}}
 */
var paper = {
    html: 'SurVis companion page for the COMP4126 Coursework 3 literature review, organised by review categories and cross-cutting research themes.',
    id: 'xue2025'
};

/**
 * Extra pages like an about page that will be listed in the footer an can be opened on demand (page name -> path)
 */
var extraPages = {};

/**
 * Custom style as path to an extra css file (leave empty if not applicable)
 * @type {string}
 */
var customStyle = '';
/* Example for simplified entries */
//var customStyle = 'styles/custom_entries_simplified.css';

/**
 * Options for showing citation information (set to null to avoid showing any citation information)
 * minCitationCount: minimum number of citations of a paper to be displayed in the visualization
 * @type {{minCitationCount: number}}
 */
/* var citations = {
    minCitationCount: 5
}; */
var citations = null;
