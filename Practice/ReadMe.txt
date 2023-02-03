Node JS
- Node Version - v16.13.0
- Npm Version - 8.1.0

npm - It is package manager for nodejs
Example : How Python Have PIP as package manager.

1) First add package.json file
- Command : npm init

2) To add packages in node-module folder 
- Command : npm install [package_name] --save
- Example : npm install express --save

Note :  1) If You Want Some Packages Only For Development
          Then Add That In DevDependencies
          - command : npm install --save-dev [package_name]
        2) You Can Uninstall Unused Packages
          - command : npm uninstall [package_name]

package-lock.json -> It Contains All Dependencies Details (Dependencies Tree).

NON-BLOCKING I/O Model -> It Complete All Task Without Waiting For Other Processes.
