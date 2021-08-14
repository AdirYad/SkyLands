var memberbar1 = "%player_has_permission_member.bar.1%";
var memberbar2 = "%player_has_permission_member.bar.2%";
var memberbar3 = "%player_has_permission_member.bar.3%";

function memberbar() {
   if (memberbar3 === "yes") {
       return "&a███";
   } else if (memberbar2 === "yes") {
       return "&a██&c█";
   } else if (memberbar1 === "yes") {
       return "&a█&c██";   
   } else {
       return "&c███";      
   }
}
memberbar();