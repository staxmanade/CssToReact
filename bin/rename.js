let mv = require('mv');

let source = 'build', dest = 'docs';
mv(source, dest, function (err) {
    // done. it tried fs.rename first, and then falls back to
    // piping the source file to the dest file and then unlinking
    // the source file.
    if (err) {
        console.error(err);
    } else {
        console.log(`Renamed from "${source}" to "${dest}"`);
    }
});