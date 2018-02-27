<?php
    function sign(){

    }

    $c = curl_init();
    curl_setopt_array($c, [
        CURLOPT_URL => 'https://api.mailgun.net/v3/mail2.ppcgtech.com/messages',
        CURLOPT_POST => true,
        CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
        CURLOPT_USERPWD => "api:key-6c69e73604fdfdc194805aa1184897e6",
        CURLOPT_POSTFIELDS => [
            'from'          => 'Excited User <postmaster@mail2.ppcgtech.com>',
            'to'            => 'korman.yuri@gmail.com',
            'subject'       => 'Hello',
            'text'          => 'ppcgtech',
            'html'          => '<b>Business Name:</b> ' . $_POST['name'] . '<br>' .
                               '<b>Name:</b> ' . $_POST['contactName'] . '<br>' .
                               '<b>Phone:</b> ' . $_POST['phone'] . '<br>' .
                               '<b>Email:</b> ' . $_POST['email']
        ]
    ]);

    if (!$output = curl_exec($c)) {
        echo curl_error($c);
    } else {
        $info = curl_getinfo($c);
        print_r($info, true);
    }
    curl_close($c);