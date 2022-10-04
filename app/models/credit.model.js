module.exports = (sequelize, Sequelize) => {
    const Credit = sequelize.define("credit", {
      _id: {
        type: Sequelize.NUMBER
      },
      gwnumber: {
        type: Sequelize.NUMBER
      },
      status: {
        type: Sequelize.STRING
      },
      partner: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      partnernumber: {
        type: Sequelize.STRING
      },
      clientnumber: {
        type: Sequelize.NUMBER
      },
      clientname: {
        type: Sequelize.STRING
      },
      issuedate: {
        type: Sequelize.STRING
      },
      status2: {
        type: Sequelize.STRING
      },
      receiptnumber: {
        type: Sequelize.NUMBER
      },
      reviewcompletiondate: {
        type: Sequelize.STRING
      },
      cancelstatus: {
        type: Sequelize.STRING
      },
    });
    return Credit;
  };