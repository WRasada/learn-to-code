var configValue = require('./config');

module.exports = {

  getDbConnectionString: function() {
    return 'mongodb://' + configValue.dbname;
  }

}
