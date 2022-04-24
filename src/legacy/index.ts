import * as index from "../index";

declare global {
  /**
   * @deprecated
   * Legacy MyLib API
   * 
   * Import `dist/legacy/my-lib.js` to use this.
   * Consider to use `dist/my-lib.js`
   */
  var MyLib: typeof index;
}

export default index;
