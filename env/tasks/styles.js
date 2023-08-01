const { src, dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

module.exports = styles = () => {
    return src("src/scss/style.scss")
        .pipe(
            sass({
                outputStyle: "compressed",
                includePaths: ["node_modules"],
            })
        )
        .pipe(dest("web/assets/css/"));
};
