const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("basic")
 .readOwn("profile")
 .updateOwn("profile")
 
ac.grant("supervisor")
 .extend("basic")
 .readAny("profile")
 .createOwn("project")
 .createOwn("deadline")
 .updateOwn("project")
 .deleteOwn("project")
 
ac.grant("admin")
 .extend("basic")
 .extend("supervisor")
 .updateAny("profile")
 .deleteAny("profile")
 
return ac;
})();