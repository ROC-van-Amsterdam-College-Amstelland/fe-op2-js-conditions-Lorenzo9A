/* Opdracht 2 */

/* A) Schrijf code waarmee je ingevulde waarde uit het invulveld 'ophaalt'
 *    maak gebruik van document.getElementById().value; 
 */

/* jouw code hieronder-->> */
var ingevuld_getal = 18 =  document.getElementById("Som").value;


/* B) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd groter is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'purple'
 */

/* jouw code hieronder-->> */
var getal1 = 19;

 


if (getal1 > ingevuld_getal) {
    document.getElementById("main").style.backgroundColor = "purple";

}



/* C) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd kleiner is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'green'
 */

if (getal1 < ingevuld_getal) {
    document.getElementById("main").style.backgroundColor = "green";

}
