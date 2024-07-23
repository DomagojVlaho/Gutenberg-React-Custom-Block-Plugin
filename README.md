# Gutenberg-React-Custom-Block-Plugin
A flexible plugin for WordPress that leverages the Gutenberg editor to create custom blocks using React.

* [Quick start](#quick-start)


## Quick start

To quickly create a running local development environment, I suggest using [Local by Flywheel](https://localwp.com/) to set up a basic Wordpress installation.

After the installation is complete and you can open the site in browser, navigate to the local site folder and follow the sturcture to the main wp-content->plugins folder.  
Use this command list to quickly set up this project locally and start developing more custom components:

```
// Clone this repo
$ git clone git@github.com:DomagojVlaho/Gutenberg-React-Custom-Block-Plugin.git

# Access
$ cd Gutenberg-React-Custom-Block-Plugin

# Install dependencies
$ npm install

# Run the project
$ npm start

# The server will initialize, Flywheel will monitor your development changes real time and apply them directly to the test site
```

After you've created and tested all of your new components, run the plugin build script to build everything for production:
```
$ npm run build
```

After the build process is done, run the plugin build script to build a plugin zip folder which you can install to any other Wordpress installation:
```
$ npm run plugin-zip
```
