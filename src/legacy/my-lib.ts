import * as api from "../my-lib";

declare global {
  /**
   * @deprecated
   * Legacy MyLib API
   * 
   * Import `dist/legacy/my-lib.js` to use this.
   * Consider to use `dist/my-lib.js`
   */
  var MyLib: typeof api;
}

export default api;
