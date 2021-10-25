import {
    src,
    dest
} from "gulp";
import {
    readFileSync
} from "graceful-fs";

export const copyImage = () => {
    return src("./src/img/**/**.{svg,png,jpg,speg,gif,jpge,PNG,JPGE,JPG,SVG,GIF,SPEG,mp4}")
        .pipe(dest("dist/assets/img"))
}

export const copyFonts = () => {
    let glob = JSON.parse(readFileSync("config.json"));
    return src(glob.font, {
            allowEmpty: true
        })
        .pipe(dest("dist/assets/fonts"));
}

export const copyFavicon = () => {
    return src("src/favicon.ico", {
            allowEmpty: true
        })
        .pipe(dest("dist/assets"));
}

export const copyFancyboxCss = () => {
    return src("bower_components/fancybox/dist/jquery.fancybox.min.css", {
            allowEmpty: true
        })
        .pipe(dest("dist/assets/css"));
}

export const copyFancyboxJs = () => {
    return src("bower_components/fancybox/dist/jquery.fancybox.min.js", {
            allowEmpty: true
        })
        .pipe(dest("dist/assets/js"));
}

module.exports = {
    copyFonts,
    copyImage,
    copyFavicon,
    copyFancyboxCss,
    copyFancyboxJs
};