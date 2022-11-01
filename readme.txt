Pour gérer les accès aux routes 
créer un module Access 
ng g m Acccess --routing 
Pour créer un component Register 
ng g c access/Register


----------------
Dans ce projet utilisation des Lazy Loading, des composants qui sont chargés seulement si ils ont été appelés.

-----------------------

Bindings 

Interpollation(data-binding) -  {{}} possibilité de |
Event Binding - () 
Property Binding [] disabled vrai / faux, mettre un isdisabled dans le ts.
Two Way Binding [()] -> mettre FormsModule dans le appmodule , c'est pour un input/ngModel/une variable. On peut modifier la variable
Style Binding [style.color] ou [style.font-size] entre le html et le ts

----------------------------
Material +  npm install alertifyjs --save
+ couper le serveur
+ npm start 
