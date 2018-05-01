const args = require('args');
const mv = require('mv');

args
    .option('source', 'The source to rename from')
    .option('dest', 'The destination to rename to')
    .example('node ./bin/rename -s build -d docs', 'To rename the file/folder "build" to "docs"');

let {source, dest} = args.parse(process.argv);

if (!source || !dest){
    args.showHelp();
}

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