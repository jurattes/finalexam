/***     Your global javascript or jquery section here */
// DOM
$(document).ready(function () {
    $(window).scroll(function () {
    if (this.scrollY > 20) {
    $('.navbar').addClass("sticky");
    $('#background').css({
       'display': 'block',
       'display': 'none' 
    });
    
    } else {
    $('.navbar').removeClass("sticky");
    $('#background').css({
        'display': 'block',
     });
    }
    if (this.scrollY > 500) {
        $('.scroll-up').addClass("show");
    } else {
        $('.scroll-up').removeClass("show");
    } 
});

// Toggle light/dark mode
$("#background").on("click", function(){
    let image = $('#background').attr('src');
    if (image === 'assets/images/night-mode.svg'){
        $('#background').attr('src', 'assets/images/light-mode.svg')
        $('body').css({"background-image": "url(assets/images/light-bg.webp)"}); 
        $('body').css({"color": "black"});
        $('.home').css({"color": "black"});
        $('.title').css({"color": "black"});
        $('.text').css({"color": "black"});
        $('.info').css({"color": "black"});
    } else {
        $('#background').attr('src', 'assets/images/night-mode.svg')
        $('body').css({"background-image": "url(assets/images/grid.png"});
        $('body').css({"color": "white"});
        $('.home').css({"color": "white"});
        $('.title').css({"color": "white"});
        $('.text').css({"color": "white"});
        $('.info').css({"color": "white"});
}
});


$(document).on('submit','#form', function(e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;

    // Form Validation
    // Name Validation
    let name = $('#name').val().trim();
    if (name === '') {
        $('#nameError').text('Invalid name.').show();
        $('#name').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else {
        $('#nameError').hide();
        $('#name').css({
            'border': '1px solid #ccc'
        });
    }

    // Email Validation
    let email = $('.email').val().trim();
    if (email === '') {
        $('#emailError').text('Invalid email.').show();
        $('#email').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else {
        $('#emailError').hide();
        $('#email').css({
            'border': '1px solid #ccc'
        });
    }

    // Email Regex Validation
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        $('#emailError').text('Invalid email address.').show();
        $('#email').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else  {
        $('#emailError').hide();
        $('#email').css({
            'border': '1px solid #ccc'
        });
    }

    // Surname Validation
    let subject = $('#subject').val().trim();
    if (subject === '') {
        $('#subjectError').text('Invalid subject.').show();
        $('#subject').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else {
        $('#subjectError').hide();
        $('#subject').css({
            'border': '1px solid #ccc'
        });
    }

    // Textbox Validation
    let textbox = $('#textbox').val().trim();
    if (textbox === '') {
        $('#textboxError').text('Enter a message.').show();
        $('#textbox').css({
            'border': 'solid red 3px'
        });
        isValid = false;
    } else {
        $('#textboxError').hide();
        $('#textbox').css({
            'border': '1px solid #ccc'
        });
    }

    // Checks if isValid = true
    if (isValid) {
        // Variables
        let Name = name;
        let Email = email;
        let Subject = subject;
        let TextBox = textbox;
        let text = `
        Justin Pescador, front-end developer at LaSalle College, sign this portfolio, do you want to confirm or decline the saving of your information?:
            >> Your name: ${Name}
            >> Your email: ${Email}
            >> Your subject: ${Subject}
            >> Your message: ${TextBox}
        `;
        let info = `
        Name: ${Name}
        Email: ${Email}
        Subject: ${Subject}
        Message: ${TextBox}
        `;

        // Creates text file and appends info to file
        if (confirm(text)) {
        const blob = new Blob([info], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const a = $("<a>")
            .attr("href", url)
            .attr("download", "info.txt")
            .appendTo("body");
        a[0].click();
        URL.revokeObjectURL(url);
        a.remove();
        setCookie(Name, Email, Subject, TextBox)
        }
    } 
       

});

// Set Cookie
function setCookie(name, email, subject, textbox) {
    document.cookie = "username=" + name + ";";
    document.cookie = "email=" + email + ";";
    document.cookie = "subject=" + subject + ";";
    document.cookie = "text=" + textbox + ";";
}

// Scroll up button
$(".scroll-up").on("click", function(){
    $(window).scrollTop(0); 
});

// Owl Carousel
$('.owl-carousel').owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
}); 

});


   