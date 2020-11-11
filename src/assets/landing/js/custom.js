(function($) {


    // Add smooth scrolling to all links in navbar
    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {

        var hash = this.hash;
        if (hash) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }

    });

    $(".navbar-collapse a").on('click', function() {
        $(".navbar-collapse.collapse").removeClass('in');
    });

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

})(jQuery);

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function() {
    var modal = document.getElementById("apmodal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function() {
    var modal = document.getElementById("apmodal");
    var btn = document.getElementById("gold");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function() {
    var modal = document.getElementById("apmodal");
    var btn = document.getElementById("silver");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function() {
    var modal = document.getElementById("apmodallogin");
    var btn = document.getElementById("login");
    var span = document.getElementsByClassName("close1")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function() {
    var modal = document.getElementById("apmodallogin");
    var btn = document.getElementById("login1");
    var span = document.getElementsByClassName("close1")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function() {
    var modal = document.getElementById("apmodal");
    var btn = document.getElementById("aboutt");
    btn.onclick = function() {
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function() {
    var modal = document.getElementById("companylogin");
    var btn = document.getElementById("companyloginclick");
    var span = document.getElementsByClassName("close2")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
$(document).ready(function() {
    var modal = document.getElementById("companylogin");
    var btn = document.getElementById("companyloginclick1");
    btn.onclick = function() {
        modal.style.display = "block";
    }
});
$(document).ready(function() {
    var modal = document.getElementById("companylogin");
    var btn = document.getElementById("companyloginclick2");
    btn.onclick = function() {
        modal.style.display = "block";
    }
});