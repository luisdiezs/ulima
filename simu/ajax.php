<?php

	// COLEGIOS

	if ( $_GET['id'] == 'colegios' ) {
		$colegios = array();
		$file = "tmp/data-colegios.xml";
		$xml = new XMLReader();
		$xml->open($file);
		while ( @$xml->read() ) {
			if ($xml->nodeType == \XMLReader::ELEMENT && ( $xml->name == 'item' || $xml->name == "NCiclo") ) {
				if ( $xml->name == 'NCiclo') {
					if ( $xml->readString() == '20181')
						break;
				}
		        $test = new SimpleXMLElement($xml->readOuterXml());
		        $colegios[] = array('id' => (int)$test->coCole, 'name' =>$test->noCole . '-' . $test->txRefCole);
			}
		}
		$xml->close();
		echo json_encode($colegios);
	}
	else
		die('error');
?>