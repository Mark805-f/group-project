function validation() {
    var name = document.getElementById("name").value;

    var valid_name_regex = /^[A-Za-z]+$/;

    var email = document.getElementById("email").value;
    var valid_email_regex = /^[A-Za-z, @]+$/;

    if (!(name.match(valid_name_regex))) {
        document.getElementById('name_error').style.visibility = "visible";
        document.getElementById("name").style.borderColor = 'red';
    } else {
        document.getElementById('name_error').style.visibility = "hidden";
        document.getElementById("name").style.borderColor = 'black';
    }

    if (!(age.match(valid_email_regex))) {
        document.getElementById('email_error').style.visibility = "visible";
        document.getElementById("email").style.borderColor = 'red';
    } else {
        document.getElementById('email_error').style.visibility = "hidden";
        document.getElementById("email").style.borderColor = 'black';
    }

    if (!(name.match(valid_name_regex)) || !(age.match(valid_email_regex)) ) {
        return false;
    } else {
        return true;
    }
}