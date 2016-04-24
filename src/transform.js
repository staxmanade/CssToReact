import cssParser from 'css';

//
// Transform implementation or originally thanks to
// https://github.com/raphamorim/native-css
//

function transformRules(self, rules, result) {
    rules.forEach(function (rule) {
        var obj = {};
        if (rule.type === 'media') {
            var name = mediaNameGenerator(rule.media);
            var media = result[name] = result[name] || {
                "__expression__": rule.media
            };
            transformRules(self, rule.rules, media)
        } else if (rule.type === 'rule') {
            rule.declarations.forEach(function (declaration) {
                if (declaration.type === 'declaration') {
                    obj[declaration.property] = declaration.value;
                }
            });
            rule.selectors.forEach(function (selector) {
                var name = nameGenerator(selector.trim());
                result[name] = obj;
            });
        }
    });
}

var mediaNameGenerator = function (name) {
    return '@media ' + name;
};

var nameGenerator = function (name) {
    name = name.replace(/\s\s+/g, ' ');
    name = name.replace(/[^a-zA-Z0-9]/g, '_');
    name = name.replace(/^_+/g, '');
    name = name.replace(/_+$/g, '');
    return name;
};

export function transform (inputCssText) {

  if(!inputCssText) {
    throw new Error('missing css text to transform');
  }

  // If the input "css" doesn't wrap it with a css class (raw styles) 
  // we need to wrap it with a style so the css parser doesn't choke.
  var bootstrapWithCssClass = false;
  if(inputCssText.indexOf("{") === -1) {
    bootstrapWithCssClass = true;
    inputCssText = `.bootstrapWithCssClass { ${inputCssText} }`;
  }

  var css = cssParser.parse(inputCssText);
  var result = {};
  transformRules(this, css.stylesheet.rules, result);

  // Don't expose the implementation detail of our wrapped css class.
  if(bootstrapWithCssClass) {
    result = result.bootstrapWithCssClass;
  }

  return result;
}
