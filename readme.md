# Nunjucks Markup


### 🚀 Quick start

1. Open the project's folder in your terminal
2. Install necessary dependencies, you can do that with the following command

```ssh
yarn
```

3. Now you can run the project via

```ssh
yarn start
```

4. Your site is now running at `http://localhost:3000`!

    Note: The BrowserSync's UI is disabled by default. If you would like to use it just go to `env/config/browserSync.config.js` and set ui key to `true`.


### 🔷 Templating HTML files

1. How to start - In this env as you can see there is a src folder, where we put all
     pages that we want to create (about.html, work.html e.g) 

     We have one default layout that holds the whole HTML skeleton and we use that part to 
     create our sections modules inside the block content structure (index.html file)
    
2. In this env we create a few example files, so you can check how its works or 
    improve this code as you like 

### 🔷 Global variables
Inside env folder, you can find markup.config file, where we store the global functions that we can use  inside HTML, those functions fill improve  our coding experience

### 🔷 imageSrc
Dont use img src as you always do, just use {{imageSrc}} function to make your life easier

This just returns the image folder with the base path `web/assets/images/`. We only add a file name or file directory inside assets/images

```
<img src="{{ imageSrc('forest.jpeg') }}" alt="Example forests image">
<img src="{{ imageSrc('directory/image.png') }}" alt="Another example">
```

#### 🔷 SVG
The same for SVG, now we can use any svg that we are put inside assets/icons, and this will automatically return our svg as HTML (IMPORTANT  - always use | safe, otherwise it's not gonna work)

This allows us to add inline svg from `web/assets/icons/*svg` to the template simply by svg `name`.

```
{{ svg('lock') | safe }}
```

If we need to get access only for svg path, we can use

```
{{ svgSrc('lock') | safe }} - return whole path for file

<img src="{{ svgSrc('directory/image.png') }}" alt="Another example">

```

### 🏗 Folder structure

#### 🔷 Images, SVGs & other static files

These files should be placed in `static` directory.

The static directory will be copied automatically to web directory.

If you want an image to be in `web/assets/images/example-image.jpg` then simply place it in `static/assets/images/example-image.jpg`

#### 🔷 SCSS

Source files are located in `src/scss/` and will be transpiled and compiled to `web/assets/css/style.css`.

Vendor/third-party files should be placed in static directory, e.g `static/assets/css/vendor/normalize.css`

#### 🔷 JS

Source files are located in `src/js/` and will be transipled and compiled to `web/assets/js/bundle.js`.

Vendor/third-party files should be placed in `static` directory, e.g `static/assets/js/vendor/slick.min.js`

#### 🔷 Markup files (HTML)

Source files are located in `src`. Files from `src/*.html` will be compiled to `web` directory.

#### 🔷 Package.js

Scripts: 

1. `Start` - start our project on localhost:3000
2. `Build` - Building our whole project to web folder
3. `Filepack` - its take our web files and pack it into zip folder

If you need to add any dependencies, just run yarn [name]
