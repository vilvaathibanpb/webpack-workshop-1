

module.exports = function addReactLoader (content) {
    console.log(content);
    return `import React from 'react'; 
    ${content}`;
}