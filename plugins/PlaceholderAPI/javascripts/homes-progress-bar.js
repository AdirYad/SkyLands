var homesbar1 = "%player_has_permission_homes.bar.1%";
var homesbar2 = "%player_has_permission_homes.bar.2%";
var homesbar3 = "%player_has_permission_homes.bar.3%";

function homesbar() {
   if (homesbar3 === "yes") {
       return "&a███";
   } else if (homesbar2 === "yes") {
       return "&a██&c█";
   } else if (homesbar1 === "yes") {
       return "&a█&c██";   
   } else {
       return "&c███";      
   }
}
homesbar();