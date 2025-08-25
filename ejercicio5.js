let dia = 'sabado';  

switch (dia.toLowerCase()) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'miércoles':  
  case 'jueves':
  case 'viernes':
    console.log("laborable");
    break;
  case 'sabado':
  case 'sábado':
  case 'domingo':
    console.log("fin de semana");
    break;
  default:
    console.log("día no válido");
}