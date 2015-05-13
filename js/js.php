<?php

    header ( "Content-Type: text/javascript; charset=UTF-8" , true ) ;

    ob_start ( 'ob_gzhandler' ) ;

        $sourcen = array (
                    'lib/jquery.syncheight.js',
                    'lib/jquery.scrollTo.min.js',
                    'lib/jquery-scrollspy.js',
                    'responsive.js',
                    'layout.js' ,
                    '../bower_components/jquery-validation/dist/jquery.validate.min.js',
                    '../bower_components/jquery-validation/src/localization/messages_de.js',
                    'forms.js',
                    'tabs.js',
                    'alerts.js'
                ) ;

        foreach ( $sourcen AS $filename ) {
            if ( file_exists ( $filename ) == FALSE )
                die ( $filename ) ;

            echo file_get_contents ( $filename ) . "\r\n\r\n" ;
        }

    ob_end_flush () ;
