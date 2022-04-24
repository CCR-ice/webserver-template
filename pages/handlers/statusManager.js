module.exports = class {
    constructor(res, statusCode){
      this.response = res;
      this.stat = statusCode;
      res.status(statusCode)
    }
    handleStatus(){
      if (require(`../statusCodes/${this.stat}.js`)[1]){
        this.response.redirect(`/${this.stat}`);
      }
    }
    getStatus(){
      return this.stat;
    }
}