/**
 * Created by korman on 27.02.18.
 */
(function($){
    $('document').ready(function(){
        $('.t-submit').click(function (e) {
            e.preventDefault();
            var name        = $('[name="Business Name"]').val();
            var contactName = $('[name="Name"]').val();
            var phone       = $('[name="Phone"]').val();
            var email       = $('[name="Email"]').val();

            console.log(name);
            console.log(contactName);
            console.log(phone);
            console.log(email);

            $.ajax({
                url: '/sm.php',
                method: 'post',
                data: {
                    name: name,
                    contactName: contactName,
                    phone: phone,
                    email: email
                }
            })
                .done(function (data) {
                    $('[name="Business Name"]').val('');
                    $('[name="Name"]').val('');
                    $('[name="Phone"]').val('');
                    $('[name="Email"]').val('');

                    alert('Your contact information send successful');
                });
        });
    });
})(jQuery)