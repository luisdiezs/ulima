<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Admision</title>
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/styles-dev.css" rel="stylesheet" type="text/css">
	<link href="css/slick.css" rel="stylesheet" type="text/css">
	<link href="css/steps_extra.css" rel="stylesheet" type="text/css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.0/tiny-slider.css">
	<script src="./js/jquery.js"></script>
	<link href="css/selectize.css" rel="stylesheet" type="text/css">
	
</head>

<body>
<?php
	$file = "tmp/data-colegios.xml";
	$reader = new XMLReader();
	$reader->open($file);
	$ciclos = array();
	while ( @$reader->read() ) {
		if ($reader->nodeType == \XMLReader::ELEMENT && $reader->name == "NCiclo") {
			 //$taxon_xml = $reader->readOuterXML();
			$ciclos[] = $reader->readString();
			 //$t = simplexml_load_string($taxon_xml, null, LIBXML_NOCDATA);
		 }
	}
	var_dump($ciclos);
	$reader->close();
?>

	<div class="wrapper r_search">
		<div class="r_busqueda" style="display:none;">
			<form class="cont_rbusqueda" action="http://165.227.165.221/search/node">
				<div class="search_r">
					<input class="srch_btn" name="" type="submit" value="">|
					<input type="text" name="keys" class="srch_input" value="¿Qué estás buscando?">
				</div>
			</form>
		</div>
		<div class="header">
			<div class="cont_nav">

				<div class="center-nav">
					<figure class="logo">
						<a href="#">
							<picture>
								<source srcset="img/svg/logoulima.svg" media="(max-width: 770px)">
								<img src="img/svg/logoulima.svg" alt=" " />
							</picture>
						</a>
					</figure>
					<span class="hamb"> <span></span> <span></span> <span></span> </span>
					<input class="btn_src src_movil" name="" type="button">
					<a href="#" class="close_src_menu">&#10005;</a>
					<nav id="menu-nav" class=" ">
						<!--agregar clase "menu_on" para activar menu-->
						<ul>
							<li class="  "><a href="">Carreras</a></li>
							<li class=" admi ">
								<a href="">Admisión</a>
								<ul class="sub_menu">



									<li><a href="">Examen de escolares</a></li>

									<li><a href="">Examen de admisión</a></li>

									<li><a href="">Colegio acreditado por la Ulima</a></li>
									<li><a href="">Prelima</a></li>

									<li><a href="">Primeros puestos en secundaria</a></li>

									<li><a href="">Deportista calificado</a></li>

									<li><a href="">Traslado Externo</a></li>


									<li><a href="">Diplomático</a></li>

									<li class="last"><a href="">Alumnos Libres</a></li>

									<span> <img src="img/ico_arrow.jpg"/></span>

								</ul>

							</li>
							<li class=" "><a href="">Pre Lima</a></li>
							<li><a href="">Convenios</a></li>
							<li class=" admi   ">
								<a href="">Vida Ulima</a>
								<ul class="sub_menu">
									<li><a href="">Empleabilidad Ulima</a></li>
									<li class="last"><a href="">Infraestructura</a></li>
									<span> <img src="img/ico_arrow.jpg"></span>
								</ul>
							</li>
							<li><a href="">Inversión</a></li>
							<li class="contacto"><a href="">Contacto</a></li>
						</ul>
						<div class="cont_buscar ">
							<!--agregar clase "expan" para expandir-->
							<input class="camp_buscar" name="" type="text" value="¿Qué estás buscando?">
							<input class="btn_src" name="" type="button">
							<a href="#" class="close_src">&#10005;</a>
						</div>
					</nav>
				</div>
			</div>

		</div>
		<!--section1-->
		<div class="main-slider carousel">
			<div class="content container-list">
				<div>
					<ul class="list-items" autoplay infinite with-dots countitem-mob="1" countitem-desk="1">
						<li class="item-note item_slider sl1">
							<figure>
								<picture>
									<source media="(max-width: 770px)" srcset="img/portada_movil/slide1.jpg ">
									<img src="img/bg1.jpg" alt=" " style="width:100%;">
								</picture>
							</figure>
							<div class="cont_msj_s">
								<h2>Examen de <br>admisión <span></span></h2>
								<h3>10 de marzo de 2019 </h3>
								<div class="btn_ir"> <span> <a href="">INSCRÍBETE AQUÍ</a> </span> </div>
								<div class="counter">
									<h4>Faltan</h4>
									<div id="clockdiv" data-endtime="2019-02-28 24:00:00" class="cont_counter">
										<ul>
											<li>
												<h3 class="days">21</h3>
												<h4>DÍAS</h4>
											</li>
											<li>
												<h3 class="hours">21</h3>
												<h4>HORAS</h4>
											</li>
											<li>
												<h3 class="minutes">45</h3>
												<h4>MINUTOS</h4>
											</li>
											<!--<li class="last-time">
									   <h3 class="seconds">45</h3>
									   <h4>SEGUNDOS</h4>
									   </li>-->
										</ul>
									</div>
									<h4 class="cierre">para el Cierre de Inscripciones <strong>28 de febrero 2018</strong></h4>
								</div>
							</div>
						</li>
						<li class="item-note item_slider sl2">
							<figure>
								<picture>
									<source media="(max-width: 770px)" srcset="img/portada_movil/slide2.jpg ">
									<img src="img/bg2_slide.jpg" alt=" " style="width:100%;">
								</picture>
							</figure>
							<div class="cont_msj_s">
								<h2>Open Ulima <span></span></h2>
								<h3>Docentes, graduados y alumnos compartirán sus experiencias en las carreras que ofrece la Ulima. </h3>
								<div class="btn_ir"> <span> <a href="">INFÓRMATE AQUÍ</a> </span> </div>
							</div>
						</li>
						<li class="item-note item_slider sl2 sl3">
							<figure>
								<picture>
									<source media="(max-width: 770px)" srcset="img/portada_movil/slide3.jpg ">
									<img src="img/bg3_slide.jpg" alt=" " style="width:100%;">
								</picture>
							</figure>
							<div class="cont_msj_s">
								<h2>Pre Lima <span></span></h2>
								<h3>Inscríbete en la Pre Lima y descubre tu orientación vocacional. </h3>
								<div class="btn_ir"> <span> <a href="">MÁS INFORMACIÓN</a> </span> </div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--section2-->
		<div class="somosulima">
			<div class="cont_slima">
				<div class="slima1">
					<h2>#SomosULima<br>Somos tu mejor opción</h2>
					<h3>Con más de 50 años de experiencia la Universidad de Lima sigue formando profesionales líderes que impulsan el desarrollo del país.</h3>
				</div>
				<div class="carousel">
					<div class="slima2 list-items" infinite with-dots countitem-mob="1" countitem-desk="3">
						<div class="item-note valoresulima ">
							<h2>95 <span>%</span></h2>
							<h4>de nuestros egresados insertos en el mundo laboral*</h4>
						</div>
						<div class="item-note valoresulima vl2">
							<h2>12</h2>
							<h4>carreras integrales</h4>
						</div>
						<div class="item-note valoresulima vl3">
							<h2>+35</h2>
							<h4>talleres artísticos y deportivos</h4>
						</div>
						<div class="item-note valoresulima ">
							<h2>95 <span>%</span></h2>
							<h4>de nuestros egresados insertos en el mundo laboral*</h4>
						</div>
						<div class="item-note valoresulima vl2">
							<h2>12</h2>
							<h4>carreras integrales</h4>
						</div>
						<div class="item-note valoresulima vl3">
							<h2>+35</h2>
							<h4>talleres artísticos y deportivos</h4>
						</div>



					</div>
				</div>
				<h4 class="m_encuesta">*Antes de cumplir un año de egreso. Fuente: Encuesta de satisfacción de Egresados 2018 (Oficina de Planificación y Acreditación de la Universidad de Lima)</h4>
			</div>
		</div>
		<!--section3-->
		<div class="ncarreras">
			<div class="cont_carreras">
				<h2>Nuestras Carreras</h2>
				<p>Aquí conocerás nuestras carreras para que puedas desempeñarte como profesional.</p>
				<form action="#" id="formSelectCarrera" class="form-validate" method="post" novalidate>

					<div class="custom-select ">
						<select>
							<option  value="">¿En qué carrera estás interesado?</option>
							<option  value="https://espanol.yahoo.com/?p=us">INGENIERIA</option>
							<option  value="https://www.google.com">MEDICINA</option>
							<option  value="https://www.bing.com/">ADMINISTRACIÓN</option>
							<option  value="https://search.aol.com/">COMUNICACIONES</option>
								  </select>
					</div>
					<!--<div class="message-error"><p class="help-block error">Seleccione una opcion para continuar.</p></div>-->
					<input type="submit" id="Ir a la carrera" value="Ir a la carrera">
				</form>
			</div>
		</div>
		<!--section4-->
		<div class="ningreso">
			<div class="cont_ingreso">
				<h2>¿Como ingresar a la ULima?</h2>
				<p>Conoce las modalidades de ingreso que tenemos para ti. </p>
				<div class="cont_tingreso">
					<div class="t_ingreso t1">
						<figure> </figure>
						<h4>Examen de Escolares</h4>
					</div>
					<div class="t_ingreso t2">
						<figure> </figure>
						<h4>Examen de Admisión</h4>
					</div>
					<div class="t_ingreso t3">
						<figure> </figure>
						<h4>Colegio Acreditado por la Ulima</h4>
					</div>
					<div class="t_ingreso t4">
						<figure> </figure>
						<h4>Pre Lima</h4>
					</div>
					<div class="t_ingreso t5">
						<figure> </figure>
						<h4>Primeros puestos en secundaria</h4>
					</div>
					<div class="t_ingreso t6">
						<figure> </figure>
						<h4>Deportista calificado</h4>
					</div>
				</div>
				<div class="btn_ir"> <span> <a href="">VER TODO</a> </span> </div>
			</div>
		</div>
		<!--section5-->
		<div class="nmapa">
			<div class="cont_mapa">
				<h2>Estudia en todo el mundo con <br>nuestros convenios</h2>
				<div class="cont_lugares">
					<div class="cont_paises p1">
						<span> <img src="img/svg/punto.svg"/> </span>
						<div class="d_paises">
							<h3>NORTEAMERICA</h3>
							<h4>13 convenios</h4>
							<ul>
								<li>Canadá</li>
								<li>Estados Unidos</li>
								<li>México</li>
							</ul>
						</div>
					</div>
					<div class="cont_paises p2">
						<span> <img src="img/svg/punto.svg"/> </span>
						<div class="d_paises">
							<h3>SUDAMÉRICA</h3>
							<h4>16 convenios</h4>
							<ul>
								<li>Argentina</li>
								<li>Brasil</li>
								<li>Chile</li>
								<li>Colombia</li>
								<li>Uruguay</li>
								<li>Venezuela</li>
							</ul>
						</div>
					</div>
					<div class="cont_paises p3">
						<span> <img src="img/svg/punto.svg"/> </span>
						<div class="d_paises">
							<h3>EUROPA</h3>
							<h4>48 convenios</h4>
							<ul>
								<li>Alemania</li>
								<li>Bélgica</li>
								<li>España</li>
								<li>Finlandia</li>
								<li>Francia</li>
								<li>Países Bajos</li>
								<li>Italia</li>
								<li>Irlanda</li>
								<li>República Checa</li>
								<li>Reino Unido</li>
								<li>Suecia</li>
							</ul>
						</div>
					</div>
					<div class="cont_paises p4">
						<span> <img src="img/svg/punto.svg"/> </span>
						<div class="d_paises">
							<h3>ASIA</h3>
							<h4>6 convenios</h4>
							<ul>
								<li>China</li>
								<li>Corea del Sur</li>
							</ul>
						</div>
					</div>
					<div class="cont_paises p5">
						<span> <img src="img/svg/punto.svg"/> </span>
						<div class="d_paises">
							<h3>OCEANÍA</h3>
							<h4>1 convenio</h4>
							<ul>
								<li>Australia</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="carousel">
					<div class="estad_paises list-items" infinite with-dots countitem-mob="1" countitem-desk="3">
						<div class="contstat item-note">
							<figure> <img src="img/conve130.jpg" /> </figure>
							<p>Más de 130 convenios internacionales con 87 universidades alrededor del mundo.</p>
						</div>
						<div class="contstat item-note">
							<figure> <img src="img/conve50.jpg" /> </figure>
							<p>Más del 50% de las <br> instituciones figuran en el<br> ranking de QS.
							</p>
						</div>
						<div class="contstat item-note">
							<figure> <img src="img/conve300.jpg" /> </figure>
							<p>Más de 300 alumnos al<br> año deciden vivir una <br>experiencia internacional.</p>
						</div>
					</div>
				</div>
				<div class="btn_ir"> <span> <a href="">CONOCE MÁS</a> </span> </div>
			</div>
		</div>
		<!--section 6-->
		<div class="n_cat_simu">
			<div class="cont_c_s">
				<div class="cat_pago">
					<div class="cont_pago">
						<h2>Categorias de pago</h2>
						<p>Encuentra toda la información relacionada a costos en esta sección.</p>
						<div class="btn_ir"> <span> <a href="">CONOCE MÁS</a> </span> </div>
					</div>
				</div>
				<div class="cat_simu">
					<div class="cont_simu">
						<h2>Simulador de pensiones</h2>
						<p>Estamos más cerca de lo que imaginas, prueba nuestra calculadora de pensiones.</p>
						<div class="btn_ir btn_ir_modal"> <span> <a href="">INICIAR SIMULADOR</a> </span> </div>
					</div>
				</div>
			</div>
		</div>
		<!--section7-->
		<div class="nfooter">
			<div class="cont_footer">
				<div class="footer1">
					<figure>
						<a href=""> <img src="img/svg/logoulima2.svg" /></a>
					</figure>
					<ul>
						<li class="active"><a href="">Carreras</a></li>
						<li><a href="">Admisión</a></li>
						<li><a href="">Pre Lima</a></li>
						<li><a href="">Convenios</a></li>
						<li><a href="">Vida Ulima</a></li>
						<li><a href="">Inversión</a></li>
						<li class="contacto"><a href="">Contacto</a></li>
					</ul>
				</div>
				<div class="footer2">
					<div class="datos_ul">
						<div class="dul d1">
							<span> </span>
							<h4>Av. Javier Prado Este N.° 4600 Urb. Fundo Monterrico Chico Santiago de Surco - Lima
							</h4>
						</div>
						<div class="dul d2">
							<span> </span>
							<h4>+511 4376767</h4>
						</div>
						<div class="dul d3">
							<span> </span>
							<h4><a href="mailto:admision@ulima.edu.pe">admision@ulima.edu.pe</a></h4>
						</div>
					</div>
					<div class="suscrib_ul">
						<h3>Suscríbete a #SomosUlima</h3>
						<p> Infórmate de nuestras últimas actividades y comunicaciones</p>
						<div class="contsuscri">
							<form id="form-suscribe" action="#" class="form-validate" method="post" novalidate>
								<div class="form-group">
									<input id="email_suscriptor_footer" class="t_input form-control" name="email" type="email" placeholder="Correo electrónico" value="">
									<div class="message-error"></div>
								</div>
								<input id="btn_suscripte" class="t_btn" type="submit" value="SUSCRÍBETE">
							</form>
						</div>
					</div>
				</div>
				<div class="footer3">
					<div class="enlaces_ulima"> Enlaces de interés: <span> <a href="http://www.ulima.edu.pe/"> ulima.edu.pe </a></span> <span> <a href="#">  egresadosnotables.ulima.edu.pe </a></span> <span> <a href="#"> laboral.ulima.edu.pe </a></span></div>
					<div class="contsocial">
						<ul>
							<li>
								<a href=""> </a>
							</li>
							<li class="s2">
								<a href=""> </a>
							</li>
							<li class="s3">
								<a href=""> </a>
							</li>
							<li class="s4">
								<a href=""> </a>
							</li>
							<li class="s5">
								<a href=""> </a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="   modal_incrip modal_inver   ">
		<div class="layer_dark"></div>
		<div>
			<div id="modal_steps" class="cont_pasos">
				<div id="modal_step1" class="paso1_inv">

<?php


	/*$file = "tmp/data-colegios.xml";
	$reader = new XMLReader();
	$reader->open($file);
	while( $reader->read() ) {
		if ( $reader->nodeType == XMLReader::ELEMENT && $reader->name == 'colegioCategoriaSimuladorReturn' ){
			echo $reader->readString();
		}
		$reader->next();
	}
	$reader->close();*/
?>

					<h2>Simulador de pensiones</h2>
					<div class="item_m1">
						<?php // getCiclos()
						//$ciclos = array('20191' => '20191', '20192' => '20192'); ?>

						<select name="cicloscbo" id="cicloscbo">
							<option value="Elegir Ciclo">Elegir Ciclo</option>
							</select>
					</div>
					<h3>¿Cuál es tu caso?</h3>
					<div class="cont_tipocolegios disabled">
						<div class="cont_cole">
							<a id="btn_one_cole" href="#">
								<figure>
									<img src="img/png/cole1.png" />
								</figure>
								<h4>Estudíé de tercero a quinto año de secundaria <strong>en un mismo colegio</strong></h4>
							</a>
						</div>
						<div class="cont_cole fr">
							<a id="btn_diff_cole" href="#">
								<figure>
									<img src="img/png/cole2.png" />
								</figure>
								<h4>Estudíé de tercero a quinto año de secundaria <strong>en diferentes colegios</strong></h4>
							</a>
						</div>
					</div>
					<p>La información que obtenga este simulador es referencial. Su categoría de pago será asignada al momento de su inscripción al concurso de admisión.</p>
					<div class="cont_btn_cal">
						<span class="back_cal"><a href="" class="prev_step_button"></a></span>
						<span class="next_cal"><a href=""  class="next_step_button disabled_button"></a></span>
					</div>
				</div>
				<div id="modal_step2" class="paso1_inv ps2" style="display: none;">
					<h2>Simulador de pensiones</h2>
					<h3>Elige tu colegio</h3>
					<div class="cont_filtros_cole">
						<div class="item_doble">
							<div class="item_m2">
								<h3>Departamento</h3>
								<select name="dpto" id='dpto-solo'>
									<?php $departamentos = array('0' => 'Lima'); ?>
									<option value="0">Seleccionar</option>
								  </select>
							</div>
							<div class="item_m2 fright">
								<h3>Provincia</h3>
								<select name="prov" id="prov-solo">
								<option value="0">Seleccionar</option>
								  </select>
							</div>
						</div>
						<div class="item_m1">
							<h3>Distrito</h3>
							<select name="dist" id="distrito-solo" >
								<?php $distritos = array('0' => 'Cercado', '1' => 'San Miguel'); ?>
							  <option value="0">Seleccionar</option>
							</select>
						</div>
					</div>

					<div class="cont_seleccolegio">
						<div class="item_selecole">
							<span></span>
							<h3>Colegio</h3>
							<!--<input class="autocompl tovalidate" type="text" onkeypress="ajaxColegios()" placeholder="Selecciona">-->
							<!--<input class="autocompl tovalidate" type="text" placeholder="Selecciona">-->
							<div class="control-group">
								<select class="demo-default select-searchable" id="colegio-solo" placeholder="Selecionar">
									<option value="">Selecciona</option>
								</select>
							</div>
						</div>
					</div>
					<p>Los nombres de los colegios serán verificados por la Universidad de Lima al momento de su inscripción al concurso de admisión.</p>
					<div class="cont_btncal">
						<span class="back_cal"><a id="btn_step2_back" class="prev_step_button" href="#">Regresar</a></span>
						<span class="next_cal"><a id="btn_step2_register"  class="next_step_button" href="#">Siguiente</a></span>
					</div>
				</div>
				<div id="modal_step3" class="paso1_inv ps2 vcoles" style="display:none">
					<h2>Simulador de pensiones</h2>
					<h3>Elige tus colegios</h3>
					<div class="btn_sele">
						<span class="btnsele1 active">
						<input name="5to" type="button" id="5to" value="5to">

					  </span>
						<span class="btnsele2">
						<input name="4to" type="button" id="4to" value="4to">
					  </span>
						<span class="btnsele3">
						<input name="3ro" type="button" id="3ro" value="3ro">
					  </span>
					</div>

					<div class="cont_filtros_cole">
						<div class="item_doble">
							<div class="item_m2">
								<h3>Departamento</h3>
								<select  id="dpto-quinto">
									<option value="0">Seleccionar</option>
								</select>
							</div>
							<div class="item_m2 fright">
								<h3>Provincia</h3>
								<select  id="prov-quinto">
									<option value="0">Seleccionar</option>
								</select>
							</div>
						</div>
						<div class="item_m1">
							<h3>Distrito</h3>
							<select  id="distrito-quinto">
								<option value="0">Seleccionar</option>
							</select>
						</div>
					</div>

					<div class="cont_seleccolegio">
						<div class="item_selecole">
							<h3>Colegio</h3>
							<!--<input class="autocompl tovalidate" type="text" placeholder="Selecciona">-->
							<div class="control-group">
								<select class="demo-default select-searchable" placeholder="Selecionar" id="colegio-quinto">
									<option value="">Selecciona</option>
								</select>
							</div>
						</div>
					</div>
					<!--<div class="cont_seleccolegio">
						<div class="item_selecole">
							<span>3er año</span>
							<input class="autocompl" type="text" value="Selecciona">
						</div>
						<div class="item_selecole">
							<span>4to año</span>
							<input class="autocompl" type="text" value="Selecciona">
						</div>
						<div class="item_selecole">
							<span>5to año</span>
							<input class="autocompl" type="text" value="Selecciona">
						</div>
					</div>-->
					<p>Los nombres de los colegios serán verificados por la Universidad de Lima al momento de su inscripción al concurso de admisión.</p>
					<div class="cont_btncal">
						<span class="back_cal"><a id="btn_step3_back" class="prev_step_button" href="#">Regresar</a></span>
						<span class="next_cal"><a id="btn_step3_register" class="next_step_button " href="#">Siguiente</a></span>
					</div>
				</div>
				<div id="modal_step4" class="paso1_inv ps2 vcoles" style="display:none">
					<h2>Simulador de pensiones</h2>
					<h3>Elige tus colegios</h3>
					<div class="btn_sele">
						<span class="btnsele1">
							<input name="5to" type="button" id="5to" value="5to">
				
						</span>
						<span class="btnsele2 active">
							<input name="4to" type="button" id="4to" value="4to">
						</span>
						<span class="btnsele3">
							<input name="3ro" type="button" id="3ro" value="3ro">
						</span>
					</div>

					<div class="cont_filtros_cole">
						<div class="item_doble">
							<div class="item_m2">
								<h3>Departamento</h3>
								<select  id="dpto-cuarto">
									<option value="0">Seleccionar</option>
								</select>
							</div>
							<div class="item_m2 fright">
								<h3>Provincia</h3>
								<select id="prov-cuarto">
									<option value="0">Seleccionar</option>
								</select>
							</div>
						</div>
						<div class="item_m1">
							<h3>Distrito</h3>
							<select  id="distrito-cuarto">
								<option value="0">Seleccionar</option>
							</select>
						</div>
					</div>

					<div class="cont_seleccolegio">
						<div class="item_selecole">
							<h3>Colegio</h3>
							<!--<input class="autocompl tovalidate" type="text" placeholder="Selecciona">-->
							<div class="control-group">
								<select class="demo-default select-searchable" id="colegio-cuarto" placeholder="Selecionar">
									<option value="0">Seleciona</option>
								</select>
							</div>
						</div>
					</div>
					<!--<div class="cont_seleccolegio">
										<div class="item_selecole">
											<span>3er año</span>
											<input class="autocompl" type="text" value="Selecciona">
										</div>
										<div class="item_selecole">
											<span>4to año</span>
											<input class="autocompl" type="text" value="Selecciona">
										</div>
										<div class="item_selecole">
											<span>5to año</span>
											<input class="autocompl" type="text" value="Selecciona">
										</div>
									</div>-->
					<p>Los nombres de los colegios serán verificados por la Universidad de Lima al momento de su inscripción al concurso de admisión.
					</p>
					<div class="cont_btncal">
						<span class="back_cal">
							<a id="btn_step3_back" class="prev_step_button" href="#">Regresar</a>
						</span>
						<span class="next_cal">
							<a id="btn_step3_register" class="next_step_button" href="#">Siguiente</a>
						</span>
					</div>
				</div>
				<div id="modal_step5" class="paso1_inv ps2 vcoles" style="display:none">
					<h2>Simulador de pensiones</h2>
					<h3>Elige tus colegios</h3>
					<div class="btn_sele">
						<span class="btnsele1">
							<input name="5to" type="button" id="5to" value="5to">
				
						</span>
						<span class="btnsele2">
							<input name="4to" type="button" id="4to" value="4to">
						</span>
						<span class="btnsele3 active">
							<input name="3ro" type="button" id="3ro" value="3ro">
						</span>
					</div>

					<div class="cont_filtros_cole">
						<div class="item_doble">
							<div class="item_m2">
								<h3>Departamento</h3>
								<select id="dpto-tercero">
									<option value="0">Seleccionar</option>
								</select>
							</div>
							<div class="item_m2 fright">
								<h3>Provincia</h3>
								<select id="prov-tercero">
									<option value="0">Seleccionar</option>
								</select>
							</div>
						</div>
						<div class="item_m1">
							<h3>Distrito</h3>
							<select id="distrito-tercero">
								<option value="0">Seleccionar</option>
							</select>
						</div>
					</div>

					<div class="cont_seleccolegio">
						<div class="item_selecole">
							<h3>Colegio</h3>
							<!--<input class="autocompl tovalidate" type="text" placeholder="Selecciona">-->
							<div class="control-group">
								<select class="demo-default select-searchable" id="colegio-tercero" placeholder="Selecionar">
									<option value="">Selecciona</option>
								</select>
							</div>
						</div>
					</div>
					<!--<div class="cont_seleccolegio">
										<div class="item_selecole">
											<span>3er año</span>
											<input class="autocompl" type="text" value="Selecciona">
										</div>
										<div class="item_selecole">
											<span>4to año</span>
											<input class="autocompl" type="text" value="Selecciona">
										</div>
										<div class="item_selecole">
											<span>5to año</span>
											<input class="autocompl" type="text" value="Selecciona">
										</div>
									</div>-->
					<p>Los nombres de los colegios serán verificados por la Universidad de Lima al momento de su inscripción al concurso de admisión.
					</p>
					<div class="cont_btncal">
						<span class="back_cal">
							<a id="btn_step3_back" class="prev_step_button" href="#">Regresar</a>
						</span>
						<span class="next_cal">
							<a id="btn_step3_register" class="next_step_button" href="#">Siguiente</a>
						</span>
					</div>
				</div>
				<div id="modal_step6" class="paso1_inv ps3 subform_ready" style="display: none;">
					<h2>Simulador de pensiones</h2>
					<h3>Tu categoría es</h3>
					<div class="cont_calculadora">
						<div class="cont_categoria">
							<div class="cat1">
								<h3>CATEGORÍA</h3>
								<h2 id="mostrar-categoria-colegio"></h2>
							</div>
							<div id="credit_value" class="cat2" data-credito="383">
								<h3>VALOR DEL CRÉDITO</h3>
								<h2><span>S/.</span><span id="categoriaval">468.00</span>*</h2>
							</div>
						</div>
						<h4 class="mens">*En función de la información brindada por usted</h4>
						<div class="cont_creditos">
							<h3>Elige tu cantidad de créditos*</h3>
							<div class="num_credit">
								<span class="menos">
							  <a href="#">-</a>
						   </span>
								<span id="numcreditos" class="num">20</span>
								<span class="mas">
							  <a href="#">+</a>
						   </span>
							</div>
						</div>
						<h3>
							*Solo en el primer ciclo, el ingresante debe matricularse en el total de creditos correspondientes al primer nivel de plan de estudios. Apartir del segundo ciclo, el alumno puede matricularse en la cantidad de créditos que elija.
						</h3>
						<div class="n_tasas">
							<div class="item_tasa">
								<span>Derecho de enseñanza [20 créditos]</span>
								<h4 id="calcAmount"> S/ 9360.00</h4>
							</div>
							<div class="item_tasa">
								<span>Derecho de matrícula</span>
								<h4 class="derecho_matricula"><span>S/.</span><span class="matricula"></span></h4>
							</div>
							<div class="item_tasa">
								<span>Subtotal</span>
								<h4 class="derecho_matricula" data-matricula="240"><span>S/.</span><span class="matricula"></span></h4>
							</div>
							<div class="item_tasa t_total">
								<span>Total ciclo</span>
								<h4 id="totalAmount">S/ 9,840.00</h4>
							</div>
						</div>
						<div class="cont_btncal">
							<span class="back_cal"><a id="btn_step4_back" class="prev_step_button" href="#">Regresar</a></span>
							<span class="next_cal"><a  class="next_step_button" id="btn_step4_siguiente" href="#">Simular Cuotas</a></span>
						</div>
						<div class="cont_btncal impri">
							<span class="back_cal"><a href="">Imprimir</a></span>
						</div>
					</div>
				</div>
				<div id="modal_step7" class="paso1_inv s_cuotas subform_ready" style="display: none;">
					<h2>Simulador de pensiones</h2>
					<h3> Simulación de cuotas</h3>
					<div class="cont_regist">
						<div class="cont_table_cuota">
							<table border="0">
								<tbody>
									<tr class="trh_c">
										<td>N° Cuota</td>
										<!--<td>fecha emisión</td>-->
										<td>fecha vencimiento</td>
										<td class="fright">total emisión s/</td>
									</tr>
									<tr>
										<td>1</td>
										<!--<td>31/07/2019</td>-->
										<td><span class="fecha_vencimiento"></span></td>
										<td class="fright"><span class="cuota-monto-uno"></span></td>
									</tr>
									<tr>
										<td>2</td>
										<!--<td>31/07/2019</td>-->
										<td><span class="fecha_vencimiento"></span></td>
										<td class="fright"><span class="cuota-monto"></span></td>
									</tr>
									<tr>
										<td>3</td>
										<!--<td>31/07/2019</td>-->
										<td><span class="fecha_vencimiento"></span></td>
										<td class="fright"><span class="cuota-monto"></span></td>
									</tr>
									<tr>
										<td>4</td>
										<!--<td>31/07/2019</td>-->
										<td><span class="fecha_vencimiento"></span></td>
										<td class="fright"><span class="cuota-monto"></span></td>
									</tr>
									<tr>
										<td>5</td>
										<!--<td>31/07/2019</td>-->
										<td><span class="fecha_vencimiento"></span></td>
										<td class="fright"><span class="cuota-monto"></span></td>
									</tr>
									<tr class="no_br">
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td class="bld">Total</td>
										<td class="bld fright"><span class="monto_total"></span></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="cont_btncal">
							<span class="back_cal"><a id="btn_step5_back prev_step_button" href="#">Regresar</a></span>
							<span class="back_cal fr"><a id="btn_step5_print" href="#">Imprimir</a></span>
						</div>
					</div>
				</div>
			</div>
			<span class="cerrar"><a href=""> <img src="img/png/cerrar.png"/> </a></span>
		</div>
	</div>


	<script src="js/selectize.js"></script>
		<style type="text/css">
		.selectize-control::before {
			-moz-transition: opacity 0.2s;
			-webkit-transition: opacity 0.2s;
			transition: opacity 0.2s;
			content: ' ';
			z-index: 2;
			position: absolute;
			display: block;
			top: 12px;
			right: 34px;
			width: 16px;
			height: 16px;
			background: url(images/spinner.gif);
			background-size: 16px 16px;
			opacity: 0;
		}
		.selectize-control.loading::before {
			opacity: 0.4;
		}
		</style>
	<script src="./js/main.bundle.js"></script>
	<script src="./js/functions.js"></script>
	<script>
		var x, i, j, selElmnt, a, b, c;

		x = document.getElementsByClassName("custom-select");
		for (i = 0; i < x.length; i++) {
			selElmnt = x[i].getElementsByTagName("select")[0];

			a = document.createElement("DIV");
			a.setAttribute("class", "select-selected");

			a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
			x[i].appendChild(a);

			b = document.createElement("DIV");
			b.setAttribute("class", "select-items select-hide");
			for (j = 1; j < selElmnt.length; j++) {

				c = document.createElement("DIV");
				var dataurl = selElmnt[j].getAttribute("value"); //añadir
				c.setAttribute("value", dataurl); //añadir
				c.innerHTML = selElmnt.options[j].innerHTML;
				c.addEventListener("click", function(e) {

					var y, i, k, s, h;
					s = this.parentNode.parentNode.getElementsByTagName("select")[0];
					h = this.parentNode.previousSibling;
					for (i = 0; i < s.length; i++) {
						if (s.options[i].innerHTML == this.innerHTML) {
							s.selectedIndex = i;
							h.innerHTML = this.innerHTML;
							y = this.parentNode.getElementsByClassName("same-as-selected");
							for (k = 0; k < y.length; k++) {
								y[k].removeAttribute("class");
							}
							this.setAttribute("class", "same-as-selected");
							break;
						}
					}
					h.click();
				});
				b.appendChild(c);
			}
			x[i].appendChild(b);
			a.addEventListener("click", function(e) {

				e.stopPropagation();
				closeAllSelect(this);
				this.nextSibling.classList.toggle("select-hide");
				this.classList.toggle("select-arrow-active");
			});
		}

		function closeAllSelect(elmnt) {

			var x, y, i, arrNo = [];
			x = document.getElementsByClassName("select-items");
			y = document.getElementsByClassName("select-selected");
			for (i = 0; i < y.length; i++) {
				if (elmnt == y[i]) {
					arrNo.push(i)
				} else {
					y[i].classList.remove("select-arrow-active");
				}
			}
			for (i = 0; i < x.length; i++) {
				if (arrNo.indexOf(i)) {
					x[i].classList.add("select-hide");
				}
			}
		}

		document.addEventListener("click", closeAllSelect);
	</script>
	<script>

/*$('.select-searchable').each(function() {
	var s =$( this );
	s.selectize({
			valueField: 'id',
			labelField: 'name',
			searchField: 'name',
			options: [],
			create: false,
			load: function(query, callback) {
				if (!query.length) return callback();
				$.ajax({
					url: 'ajax.php',
					type: 'GET',
					dataType: 'json',
					data: {
						name: query,
						id: 'colegios'
					},
					error: function() {
						callback();
					},
					success: function(res) {
						callback(res);
					}
				});
			},
			onChange:function(query, callback){
				s.parent().parent().find(".hidden-me").val(query).trigger("focus");
				//$(".hidden-me").val(query).trigger("focus");
			}
	});
});*/

	</script>
</body>

</html>