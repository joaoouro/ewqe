/**
 * loginsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    loginPage: async function (req, res) {
        return res.view('/pages/loginPage');
      }

};

