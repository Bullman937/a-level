$('#button_1').on('click', function (){

	var rashod; //Расход безнина на 1 км
	var rashod100; // Расход бензина на 100 км
	var rasstoyanie;
	var cena;
	var resultat;

	rashod = $('#value_1').val();
	rasstoyanie = $('#value_2').val();
	cena = $('#value_3').val();

	rashod = parseInt(rashod); //Преобразование строки в число
	rasstoyanie = parseInt(rasstoyanie);
	cena = parseInt(cena);

	rashod100 = 100 / rashod; //Преобразование расхода на 100 км
	resultat = (rasstoyanie * cena) / rashod100;
	resultat = Math.round(resultat); //Округление до целого числа

	$('#rezult').val(resultat);
	return false
});