module.exports = 'var assert = require(\'chai\').assert,\n    $ = require(\'jquery-browserify\'),\n    sinon = require(\'sinon\');\n\ndescribe(\'problem\', function() {\n\n  before(function() {\n    google = {\n      load: function() { }\n    }\n    sinon.spy(google, \'load\');\n    var js = $(code).find(\'script\').last().text();\n    eval(js);\n  });\n\n  it(\'It looks like the Google Loader was not invoked.\', function() {\n    assert(google.load.callCount > 0);\n  });\n\n  it(\'The API and version were not passed in to `google.load()`.\', function() {\n\n  });\n  it(\'The correct API and version were not passed in to `google.load()`.\', function() {\n\n  });\n  it(\'The correct API was not passed in to `google.load()`.\', function() {\n\n  });\n  it(\'The correct version was not passed in to `google.load()`.\', function() {\n\n  });\n})\n';