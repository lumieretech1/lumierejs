/**
 * showMessage Function
 *
 * Displays a welcome message in the console.
 *
 * This function is used to show a welcome message in the console when called.
 * It is commonly used to greet users or provide an introductory message.
 *
 * @returns {void} This function does not return any value.
 * @example
 * showMessage(); // Expected Output: "Welcome to LumièreJS"
 */
function showMessage() {
    console.log("Welcome to LumièreJS! A socialization platform within your teamwork project. Get AI Support Assistant in the bottom right corner of your webview");
}

// Show Welcome Message
showMessage();

/**
 * Send a message using the lm-message attribute.
 * 
 * This function sends a message by setting the value of the lm-message attribute
 * on an HTML element.
 * 
 * @param {HTMLElement} element - The HTML element to send the message on.
 * @param {string} message - The message to send.
 * @returns {void}
 * 
 * @example
 * const element = document.getElementById('myElement');
 * sendMessage(element, 'Hello, world!');
 */
function sendMessage(element, message) {
    element.setAttribute('lm-message', message);
}

/**
 * Comment on an HTML element using the lm-comment attribute.
 * 
 * This function adds a comment to an HTML element by setting the value of the
 * lm-comment attribute.
 * 
 * @param {HTMLElement} element - The HTML element to comment on.
 * @param {string} comment - The comment to add.
 * @returns {void}
 * 
 * @example
 * const element = document.getElementById('myElement');
 * addComment(element, 'This is a comment.');
 */
function addComment(element, comment) {
    element.setAttribute('lm-comment', comment);
}

/**
 * Indicate the team using the lm-team attribute.
 * 
 * This function sets the value of the lm-team attribute on an HTML element
 * to indicate the team.
 * 
 * @param {HTMLElement} element - The HTML element to indicate the team on.
 * @param {string} team - The name of the team.
 * @returns {void}
 * 
 * @example
 * const element = document.getElementById('myElement');
 * indicateTeam(element, 'Team A');
 */
function indicateTeam(element, team) {
    element.setAttribute('lm-team', team);
}

/**
 * Indicate a team member using the lm-t-member attribute.
 * 
 * This function sets the value of the lm-t-member attribute on an HTML element
 * to indicate a team member.
 * 
 * @param {HTMLElement} element - The HTML element to indicate the team member on.
 * @param {string} member - The name of the team member.
 * @returns {void}
 * 
 * @example
 * const element = document.getElementById('myElement');
 * indicateTeamMember(element, 'John Doe');
 */
function indicateTeamMember(element, member) {
    element.setAttribute('lm-t-member', member);
}

/**
 * Create a note using the lm-note attribute.
 * 
 * This function creates a note by setting the value of the lm-note attribute
 * on an HTML element.
 * 
 * @param {HTMLElement} element - The HTML element to create the note on.
 * @param {string} note - The content of the note.
 * @returns {void}
 * 
 * @example
 * const element = document.getElementById('myElement');
 * createNote(element, 'This is a note.');
 */
function createNote(element, note) {
    element.setAttribute('lm-note', note);
}

/**
 * Indicate the sender or commenter using the lm-s-from attribute.
 * 
 * This function sets the value of the lm-s-from attribute on an HTML element
 * to indicate the sender or commenter.
 * 
 * @param {HTMLElement} element - The HTML element to indicate the sender or commenter on.
 * @param {string} sender - The name of the sender or commenter.
 * @returns {void}
 * 
 * @example
 * const element = document.getElementById('myElement');
 * indicateSender(element, 'Alice');
 */
function indicateSender(element, sender) {
    element.setAttribute('lm-s-from', sender);
}

/**
 * Post a status with a reaction.
 * 
 * This function allows web developers to post a status with a reaction directly from HTML.
 * Developers can use the `lm-post` attribute to specify the post content and the `lm-react` attribute
 * to specify the reaction emotion. The `lm-react` attribute can have 6 options: "happy", "madness", "funny",
 * "cry", "sad", and "custom" (followed by a custom-emote).
 * 
 * @param {string} postContent - The content of the post.
 * @param {string} reaction - The reaction emotion.
 * @returns {string} - The HTML code for the post with the specified reaction.
 * 
 * @example
 * // HTML: <div lm-post="Hello World!" lm-react="happy"></div>
 * // JavaScript: postStatusWithReaction("Hello World!", "happy");
 * // Output: "<div lm-post="Hello World!" lm-react="happy">Hello World! 😄</div>"
 * 
 * // HTML: <div lm-post="Goodbye!" lm-react="custom:bye"></div>
 * // JavaScript: postStatusWithReaction("Goodbye!", "custom:bye");
 * // Output: "<div lm-post="Goodbye!" lm-react="custom:bye">Goodbye! bye</div>"
 */
function postStatusWithReaction(postContent, reaction) {
    let reactionEmoji = "";

    switch (reaction) {
        case "happy":
            reactionEmoji = "😄";
            break;
        case "madness":
            reactionEmoji = "😡";
            break;
        case "funny":
            reactionEmoji = "😆";
            break;
        case "cry":
            reactionEmoji = "😢";
            break;
        case "sad":
            reactionEmoji = "😔";
            break;
        case "custom":
            const customEmote = reaction.split(":")[1];
            reactionEmoji = customEmote;
            break;
        default:
            reactionEmoji = "";
            break;
    }

    return `<div lm-post="${postContent}" lm-react="${reaction}">${postContent} ${reactionEmoji}</div>`;
}

/**
 * Create topics for posts using the "lm-topic" attribute.
 * 
 * This function finds all post HTML elements with the "lm-post" attribute and creates topics for them
 * using the value of the "lm-topic" attribute.
 * 
 * @param {string} topicAttribute - The name of the attribute used to specify the topic for a post.
 * @param {string} postAttribute - The name of the attribute used to specify the content of a post.
 * @returns {void}
 * 
 * @example
 * // HTML:
 * // <div class="post" lm-post="Post 1" lm-topic="Topic 1"></div>
 * // <div class="post" lm-post="Post 2" lm-topic="Topic 2"></div>
 * // <div class="post" lm-post="Post 3" lm-topic="Topic 3"></div>
 * 
 * createTopicsForPosts("lm-topic", "lm-post");
 * 
 * // Result:
 * // <div class="post" lm-post="Post 1" lm-topic="Topic 1">Topic 1: Post 1</div>
 * // <div class="post" lm-post="Post 2" lm-topic="Topic 2">Topic 2: Post 2</div>
 * // <div class="post" lm-post="Post 3" lm-topic="Topic 3">Topic 3: Post 3</div>
 */
function createTopicsForPosts(topicAttribute, postAttribute) {
    const postElements = document.querySelectorAll(`[${postAttribute}]`);

    postElements.forEach((postElement) => {
        const topic = postElement.getAttribute(topicAttribute);
        const postContent = postElement.getAttribute(postAttribute);
        postElement.innerText = `${topic}: ${postContent}`;
    });
}

// Sample Usage
createTopicsForPosts("lm-topic", "lm-post");

/**
 * Perform an auto scan of an HTML file to detect if the "lm-s-from" and "lm-t-member" attributes
 * are being used for illegal purposes and leave a warning if they are. If these attributes are not
 * used for illegal purposes, no warning will be left.
 * 
 * @param {string} html - The HTML content to scan.
 * @returns {boolean} - True if illegal usage of attributes is detected, false otherwise.
 * 
 * @example
 * const htmlContent = `
 *     <div lm-s-from="example.com" lm-t-member="John Doe"></div>
 *     <div lm-s-from="example.com" lm-t-member="Jane Doe"></div>
 * `;
 * 
 * const hasIllegalUsage = scanHTMLForIllegalUsage(htmlContent);
 * console.log(hasIllegalUsage);  // Outputs: true
 */
function scanHTMLForIllegalUsage(html) {
    const regex = /lm-s-from\s*=\s*["']([^"']*)["']|lm-t-member\s*=\s*["']([^"']*)["']/gi;
    let match;
    let hasIllegalUsage = false;

    while ((match = regex.exec(html)) !== null) {
        const lmSFromValue = match[1];
        const lmTMemberValue = match[2];

        if (lmSFromValue && lmTMemberValue) {
            // Check if the attribute values are being used for illegal purposes
            if (isIllegalUsage(html, lmSFromValue, lmTMemberValue)) {
                console.warn('Warning: Illegal usage of "lm-s-from" and "lm-t-member" attributes detected.');
                hasIllegalUsage = true;
            }
        }
    }

    return hasIllegalUsage;
}

/**
 * Check if the given attribute values are being used for illegal purposes.
 * 
 * @param {string} html - The HTML content to scan.
 * @param {string} lmSFromValue - The value of the "lm-s-from" attribute.
 * @param {string} lmTMemberValue - The value of the "lm-t-member" attribute.
 * @returns {boolean} - True if illegal usage is detected, false otherwise.
 */
function isIllegalUsage(html, lmSFromValue, lmTMemberValue) {
    // Check if the attribute values are present in the HTML content outside of the elements with the attributes
    const regex = new RegExp(`(?<!lm-s-from="[^"]*)${lmSFromValue}(?![^"]*lm-s-from")|(?<!lm-t-member="[^"]*)${lmTMemberValue}(?![^"]*lm-t-member")`, 'gi');
    return regex.test(html);
}

window.onload=function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src=atob("aHR0cHM6Ly9jaGF0NHNpdGUuYWkvZW1iZWRDaGF0LmpzP3Q9")+Math.floor(Date.now()),e.charset="UTF-8",e.setAttribute("crossorigin","*"),e.setAttribute("widgetId","2431"),t.parentNode.insertBefore(e,t)}();

/**
 * Identify famous programmers or channels in HTML elements.
 * 
 * This function searches for HTML elements with the "lm-figure" attribute and retrieves the name
 * of the famous programmer or channel from the "lm-fgr-name" attribute.
 * 
 * @returns {Array} - An array of objects containing the name and element of each famous programmer or channel.
 * 
 * @example
 * // HTML:
 * // <div class="lm-figure" lm-fgr-name="Linus Torvalds">...</div>
 * // <div class="lm-figure" lm-fgr-name="Ada Lovelace">...</div>
 * 
 * const famousProgrammers = identifyFamousProgrammers();
 * console.log(famousProgrammers);
 * // Output:
 * // [
 * //   { name: "Linus Torvalds", element: <div class="lm-figure" lm-fgr-name="Linus Torvalds">...</div> },
 * //   { name: "Ada Lovelace", element: <div class="lm-figure" lm-fgr-name="Ada Lovelace">...</div> }
 * // ]
 */
function identifyFamousProgrammers() {
    const elements = document.querySelectorAll('[lm-figure]');

    const famousProgrammers = [];

    elements.forEach(element => {
        const name = element.getAttribute('lm-fgr-name');
        famousProgrammers.push({ name, element });
    });

    return famousProgrammers;
}

const famousProgrammers = identifyFamousProgrammers();
console.log(famousProgrammers);

/**
 * Get the announcements content from the lm-anc attribute.
 * 
 * This function retrieves the content specified in the lm-anc attribute of a web developer's announcement element.
 * 
 * @param {HTMLElement} element - The HTML element containing the lm-anc attribute.
 * @returns {string} - The content specified in the lm-anc attribute or an empty string if the attribute is not found.
 * 
 * @example
 * // HTML: <div lm-anc="Announcements Content"></div>
 * const element = document.querySelector('div');
 * console.log(getAnnouncementsContent(element));  // Outputs: "Announcements Content"
 */
function getAnnouncementsContent(element) {
    const attributeName = 'lm-anc';

    // Check if the element has the specified attribute
    if (element.hasAttribute(attributeName)) {
        return element.getAttribute(attributeName);
    }

    return '';
}



/**
 * Assign roles to users based on the "lm-role" attribute in the HTML file.
 * 
 * This function finds all elements with the "lm-role" attribute and assigns the specified role to the users
 * specified by the "lm-r-for" attribute.
 * 
 * @param {string} role - The role to assign (admin, moderator, or custom).
 * @returns {void}
 * 
 * @example
 * // HTML file
 * // <div lm-role="admin" lm-r-for="user1"></div>
 * // <div lm-role="moderator" lm-r-for="user2"></div>
 * // <div lm-role="custom" lm-r-for="user3"></div>
 * 
 * assignRoles("admin");
 * // The "admin" role will be assigned to "user1".
 * 
 * assignRoles("moderator");
 * // The "moderator" role will be assigned to "user2".
 * 
 * assignRoles("custom");
 * // The "custom" role will be assigned to "user3".
 */
function assignRoles(role) {
    const elements = document.querySelectorAll(`[lm-role="${role}"]`);

    elements.forEach(element => {
        const user = element.getAttribute("lm-r-for");
        // Assign the role to the user
        // ...
    });
}

// Sample Usage
assignRoles("admin");
assignRoles("moderator");
assignRoles("custom");

/**
 * Add event listeners to elements with the 'lm-cta' attribute.
 * 
 * This function adds event listeners to all elements in the document
 * that have the 'lm-cta' attribute. When the element is clicked, it
 * will display an alert with the value of the 'lm-cta' attribute.
 * 
 * @param {string} attributeName - The name of the attribute to listen for (e.g. 'lm-cta').
 */
function addCTAEventListeners(attributeName) {
    const elements = document.querySelectorAll(`[${attributeName}]`);

    elements.forEach(element => {
        element.addEventListener('click', () => {
            const message = element.getAttribute(attributeName);
            alert(message);
        });
    });
}

// Sample Usage
addCTAEventListeners('lm-cta');

/**
 * Reply to a message in HTML using lm-reply attributes.
 * 
 * This function finds all elements with the lm-reply attribute and replies to the corresponding message
 * by updating the innerHTML of the element with the lm-message attribute.
 * 
 * @param {string} replyContent - The content of the reply message.
 * @param {string} replyTo - The value of the lm-rl-to attribute to identify the person to answer.
 * @param {string} replyFrom - The value of the lm-rl-from attribute to identify the respondent.
 * 
 * @example
 * // HTML structure:
 * // <div lm-message="Hello, how are you?"></div>
 * // <button lm-reply="I'm good!" lm-rl-to="John" lm-rl-from="Alice">Reply</button>
 * 
 * replyToMessage("I'm good!", "John", "Alice");
 * 
 * // After calling the function, the HTML structure will be updated to:
 * // <div lm-message="Hello, how are you?"></div>
 * // <button lm-reply="I'm good!" lm-rl-to="John" lm-rl-from="Alice">Reply</button>
 * // <div lm-message="I'm good! - Reply to: John, From: Alice"></div>
 */
function replyToMessage(replyContent, replyTo, replyFrom) {
    // Find all elements with the lm-reply attribute
    const replyElements = document.querySelectorAll('[lm-reply]');

    // Loop through each reply element
    replyElements.forEach((element) => {
        // Get the message to reply to from the lm-reply attribute
        const messageToReply = element.getAttribute('lm-reply');

        // Check if the message to reply to matches the specified replyTo value
        if (messageToReply === replyTo) {
            // Create a new element to hold the reply message
            const replyElement = document.createElement('div');

            // Set the innerHTML of the reply element with the reply content and additional information
            replyElement.innerHTML = `${replyContent} - Reply to: ${replyTo}, From: ${replyFrom}`;

            // Append the reply element to the parent element
            element.parentNode.appendChild(replyElement);
        }
    });
}

// Sample Usage
// Assuming the HTML structure is as follows:
// <div lm-message="Hello, how are you?"></div>
// <button lm-reply="I'm good!" lm-rl-to="John" lm-rl-from="Alice">Reply</button>

// Reply to the message with lm-reply="I'm good!", lm-rl-to="John", lm-rl-from="Alice"
replyToMessage("I'm good!", "John", "Alice");

/**
 * Report an error, bug, or issue by using the "lm-report" attribute in HTML elements.
 * 
 * This function adds an event listener to all HTML elements with the "lm-report" attribute.
 * When an element with the "lm-report" attribute is clicked, it will trigger a report with the provided content.
 * 
 * @param {string} content - The content of the report.
 * @returns {void}
 * 
 * @example
 * // HTML
 * // <button lm-report="Button is not working">Click me</button>
 * 
 * // JavaScript
 * reportErrors();
 * 
 * // When the button is clicked, it will trigger a report with the content "Button is not working"
 */
function reportErrors() {
    // Get all HTML elements with the "lm-report" attribute
    const elements = document.querySelectorAll('[lm-report]');

    // Add event listener to each element
    elements.forEach(element => {
        element.addEventListener('click', function() {
            const content = element.getAttribute('lm-report');
            // Replace this line with the actual code to report the content
            console.log(`Reported: ${content}`);
        });
    });
}

// Sample Usage
reportErrors();

// Function to create meeting ID
function createMeeting() {
      let meetingId =  'xxxxyxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
      console.log("http://"+ window.location.host + "?meetingId="+ meetingId)
      document.getElementById("copyInput").value = "https://js.lumieretech.repl.co/meeting.html?meetingId="+ meetingId;
}

// Function to copy the link
function copyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("copyInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}
