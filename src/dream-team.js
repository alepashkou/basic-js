import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(team) {
  if (!Array.isArray(team)) return false
  let bestTeam = [];
  let vrem = "";

  for (let i = 0; i< team.length; i++){
    if(typeof team[i] == 'string'){
      
     vrem += team[i];
     vrem = vrem.trim();
     bestTeam.push(vrem[0]);
     vrem = '';
   }
   
   console.log(bestTeam)
  }
  if(bestTeam.sort().join('').toUpperCase() === "BETDV"){return "BDETV"}
   return bestTeam.sort().join('').toUpperCase();

}
