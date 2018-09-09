{
	// Place your snippets for javascriptreact here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
  // }
  
  "MUIreactClassComponentPropTypes": {
    "prefix": "mrc",
    "body": "import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\n\nconst styles = (theme) => {\n\treturn ({\n\n\t});\n};\nclass ${1:${TM_FILENAME_BASE}} extends Component {\n\tcomponentDidMount() {\n\t\t\n\t}\n\trender() {\n\t\tconst { classes } = this.props;\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n${1:${TM_FILENAME_BASE}}.propTypes = {\n\n};\n\nexport default withStyles(styles)(${1:${TM_FILENAME_BASE}});\n",
    "description": "Creates a React component class with PropTypes and ES6 module system"
  },
  "MUIreactStatelessProps": {
    "prefix": "mrs",
    "body": "import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\n\nconst styles = (theme) => {\n\treturn ({\n\n\t});\n};\nconst ${1:${TM_FILENAME_BASE}} = (props) => {\n\tconst { classes } = props;\n\treturn (\n\t\t<div>\n\t\t\t\n\t\t</div>\n\t);\n};\n\n${1:${TM_FILENAME_BASE}}.propTypes = {\n\t$0\n};\n\nexport default withStyles(styles)(${1:${TM_FILENAME_BASE}});\n",
    "description": "Creates a stateless React component with PropTypes and ES6 module system"
  },
}

