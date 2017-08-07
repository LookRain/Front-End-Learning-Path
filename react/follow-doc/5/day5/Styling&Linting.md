After I made my switch from Sublime Text 3 to VS Code (for features like the awesome integrated terminal that I have been dreaming for), I have been trying to configure the new editor to what I was used to with ST3. So far, apart from a decent advanced new file extension, the transition has been pretty smooth. Features like linting with Eslint extension works pretty good as well, but React cli does not include many rules especially for styling as this is one of their <a href="https://github.com/facebookincubator/create-react-app/issues/808" target="_blank">philosophy</a>

<blockquote>We don’t plan to allow custom rules in the coming months, but we may revisit this in the future.</blockquote>

Yeah, so we have to stick to with configuring our own rules or extend existing config rules like eslint-config-airbnb.

To set up linting in VS Code:
1. Install Eslint extension
2. Scaffold React app using `create-react-app you-app-name`
3. https://github.com/standard/standard
4. Create `.eslintrc` file to extend airbnb eslint config:
```
{
  "extends": ["standard", "react-app"],
  "rules": {
    // Additional rules
  }
}
```


Another style using airbnb config:
1. Install Eslint extension
2. Scaffold React app using `create-react-app you-app-name`
3. https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1
4. Create `.eslintrc` file to extend airbnb eslint config:
```
{
  "extends": "airbnb"
}
```